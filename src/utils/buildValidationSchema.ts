import * as Yup from 'yup';
import { FieldDefinition, StepDefinition } from '../types';

// Helper function to convert a string to camelCase
export const toCamelCase = (str: string): string => {
  return str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
};

const buildSchemaFromFields = (
  fields: FieldDefinition[],
  isOptional: boolean,
) => {
  const shape: Record<string, any> = {};

  fields.forEach(field => {
    let validator: any;
    // Check if the field is visible based on its visibleIf function
    switch (field.inputType) {
      case 'multi-select':
        // multi-select = array of strings
        validator = Yup.array()
          .of(Yup.string().required())
          .min(1, `Atleast 1 ${field.label} must be selected`);

        if (field.validation === 'required') {
          validator = validator.required(`${field.label} is required`);
        }
        break;

      case 'inventory-list':
        // inventory-list = array of objects with custom shape
        // Each object has name, inventory, stubs (from InitialData)
        validator = Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required('Name is required'),
              label: Yup.string().required('Label is required'),
              inventory: Yup.number()
                .min(0, 'Inventory must be >= 0')
                .required('Inventory is required'),
              stubs: Yup.number()
                .min(0, 'Stubs must be >= 0')
                .required('Stubs is required'),
            }),
          )
          .test(
            'at-least-one-filled',
            'At least one appliance must have an inventory or stubs value greater than zero',
            value => {
              // ✅ If step is optional → skip this validation
              if (isOptional) {
                return true;
              }

              // ✅ If step is required → enforce rule
              if (!value) {
                return false;
              }
              return value.some(
                appliance => appliance.inventory > 0 || appliance.stubs > 0,
              );
            },
          );
        break;

      case 'image-selector':
        validator = Yup.array().of(Yup.object());
        // A field can be marked as required only if the parent step is not optional
        if (!isOptional && field.validation === 'required') {
          validator = validator.required(`${field.label} is required`);
        }
        break;

      case 'signature-editor':
        validator = Yup.string(); // A signature is typically a base64 string
        // You can add .required() if the signature is mandatory
        if (!isOptional && field.validation === 'required') {
          validator = validator.required(`${field.label} is required`);
        }
        break;

      case 'decimal-input':
        validator = Yup.string()
          .matches(/^\d+\.\d{2}$/, 'Value must have exactly two decimal places')
          .test('min', 'Value must be at least 1.00', value => {
            if (!value) return false;
            return parseFloat(value) >= 1.0;
          })
          .test('max', 'Value must be at most 100.00', value => {
            if (!value) return false;
            return parseFloat(value) <= 100.0;
          })
          .required('This field is required');
        break;

      case 'dropdown':
        validator = Yup.string();

        if (!isOptional && field.validation === 'required') {
          if (field.requiredField) {
            // ✅ Only dropdown gets conditional required
            validator = Yup.string().when(field.requiredField, {
              is: (val: boolean) => val === false, // or false, depending on your business rule
              then: schema => schema.required(`${field.label} is required`),
              otherwise: schema => schema.notRequired(),
            });
          } else {
            validator = validator.required(`${field.label} is required`);
          }
        }

        break;

      default:
        // now handle by type
        switch (field.type) {
          case 'number':
            if (field.typeNumberSubtype === 'minutes') {
              validator = Yup.number()
                .typeError(`${field.label} must be a number`)
                .min(1, `${field.label} must be at least 1`)
                .max(60, `${field.label} cannot exceed 60`)
                .required(`${field.label} is required`);
            } else {
              if (field.requiredField) {
                validator = Yup.number().when(field.requiredField, {
                  is: (val: boolean) => val === true, // or false, depending on your business rule
                  then: schema => schema.notRequired(),
                  otherwise: schema =>
                    schema.required(`${field.label} is required`),
                });
              } else {
                validator = Yup.string().matches(
                  /^\d*$/,
                  `${field.label} must be a number`,
                );

                if (field.max !== undefined) {
                  const max = field.max;
                  validator = Yup.string()
                    .matches(
                      new RegExp(`^\\d{${max}}$`),
                      `${field.label} must be exactly ${max} digits`,
                    )
                    .required(`${field.label} is required`);
                }
              }
            }
            break;

          case 'boolean':
            validator = Yup.boolean();
            break;

          case 'text':
            validator = Yup.string();
            if (field.min !== undefined) {
              validator = validator.min(
                field.min,
                `${field.label} must be at least ${field.min} characters`,
              );
            }
            if (field.max !== undefined) {
              validator = validator.max(
                field.max,
                `${field.label} cannot exceed ${field.max} characters`,
              );
            }

            if (field.validation === 'required') {
              validator = validator.required(`${field.label} is required`);
            }

            break;
          default:
            validator = Yup.string();
            break;
        }

        if (field.regex) {
          validator = validator.matches(
            field.regex.pattern,
            field.regex.message,
          );
        }
        break;
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};

const buildNestedSchema = (steps: StepDefinition[]) => {
  const schemaShape: Record<string, any> = {};

  steps.forEach(step => {
    const stepKey = toCamelCase(step.title);
    const isOptional = step.optional ? step.optional : false;
    if (step.subSteps && step.subSteps.length > 0) {
      const subStepsSchema = buildNestedSchema(step.subSteps);
      schemaShape[stepKey] = Yup.object().shape({
        subSteps: subStepsSchema,
        ...buildSchemaFromFields(step.fields || [], isOptional).fields,
      });
    } else {
      schemaShape[stepKey] = buildSchemaFromFields(
        step.fields || [],
        isOptional,
      );
    }
  });

  return Yup.object().shape(schemaShape);
};

export const buildValidationSchema = (formDefinition: StepDefinition[]) => {
  return buildNestedSchema(formDefinition);
};
