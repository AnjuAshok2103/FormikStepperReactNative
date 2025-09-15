// DynamicField.tsx
import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { InitialData, Option } from '../types';
import { get } from '../utils';
import AddPhotos from './AddPhotos';
import { ArrayField } from './ArrayField';
import CaptureSignature from './CaptureSignature';
import CustomCheckBox from './CustomCheckBox';
import CustomSwitch from './CustomSwitch';
import { Dropdown } from './DropDownComponent';
import { DecimalInput } from './inputs/CustomDecimalInput';
import CustomTextInput from './inputs/CustomTextInput';
import { MultiSelect } from './MultiSelectComponent';

interface Props {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'boolean' | 'array-of-objects';
  inputType:
    | 'text-input'
    | 'decimal-input'
    | 'dropdown'
    | 'switch'
    | 'multi-select'
    | 'inventory-list'
    | 'signature-editor'
    | 'image-selector'
    | 'check-box';
  options?: Option[] | Record<string, Option[]>;
  initialData?: InitialData[];
  path: string; // Add a basePath prop here
  showLabel?: boolean;
  visibleIf?: (values: any) => boolean;
  stepInfoText?: string;
}

export const DynamicField: React.FC<Props> = ({
  name,
  label,
  type,
  inputType,
  options,
  initialData,
  showLabel = true,
  path,
  stepInfoText,
  visibleIf,
}) => {
  const { values, handleChange, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<any>();
  // Use the full path for Formik's functions and value access
  const fullPath = `${path}.${name}`;
  const value = get(values, fullPath);
  const fieldError = get(errors, fullPath); // Retrieve the error for the full path
  const isTouched = get(touched, fullPath); // Check if the field has been touched

  // Check visibility condition at the top
  const isVisible = visibleIf ? visibleIf(values) : true;

  // Effect to reset field value when it becomes hidden
  useEffect(() => {
    if (!isVisible) {
      // Reset the field's value to a sensible default when it's hidden
      const resetValue = type === 'boolean' ? false : '';
      setFieldValue(fullPath, resetValue);
    }
  }, [isVisible, fullPath, setFieldValue, type]);

  // If the field is not visible, return null to hide it
  if (!isVisible) {
    return null;
  }

  const renderField = () => {
    switch (inputType) {
      case 'text-input':
        return (
          <CustomTextInput
            type={type}
            handleOnChange={(text: any) => setFieldValue(fullPath, text)}
            handleBlur={handleBlur(fullPath)}
            value={value}
            isTouched={isTouched}
            fieldError={fieldError}
            path={path}
            fullPath={fullPath}
          />
        );
      case 'decimal-input':
        return (
          <DecimalInput
            type={type}
            handleOnChange={(text: any) => setFieldValue(fullPath, text)}
            handleBlur={handleBlur(fullPath)}
            value={value}
            isTouched={isTouched}
            fieldError={fieldError}
            path={path}
            fullPath={fullPath}
          />
        );
      case 'dropdown':
        // Handle both flat and grouped options
        let dropdownOptions: Option[] = [];

        if (Array.isArray(options)) {
          dropdownOptions = options;
        } else if (options && typeof options === 'object') {
          // Dependent dropdown (like subcategory)
          const parentValue = get(values, 'meterActivityDetails.category'); // 🔑 depends on parent
          dropdownOptions = options[parentValue] || [];
        }

        return (
          <Dropdown
            label={label}
            options={dropdownOptions}
            selectedValue={value}
            onSelect={selected => setFieldValue(fullPath, selected)}
            path={path}
            name={name}
          />
        );
      case 'switch':
        return <CustomSwitch name={name} label={label} path={path} />;

      case 'multi-select':
        // Pass the fullPath to the MultiSelect component
        return (
          <MultiSelect
            name={name}
            label={label}
            options={options as Option[]}
            path={path}
          />
        );

      case 'inventory-list':
        if (initialData) {
          return (
            <ArrayField
              name={name}
              label={label}
              path={path}
              stepInfoText={stepInfoText}
              initialData={initialData} // 🔑 Pass initialData to ArrayField
            />
          );
        }
      case 'image-selector':
        return (
          <AddPhotos
            name={name}
            label={label}
            path={path}
            // onChange={selectedPhotos => setFieldValue(fullPath, selectedPhotos)}
          />
        );

      case 'signature-editor':
        return (
          <CaptureSignature
            name={name}
            label={label}
            path={path}
            // onChange={selectedPhotos => setFieldValue(fullPath, selectedPhotos)}
          />
        );

      case 'check-box':
        return (
          <CustomCheckBox
            name={name}
            label={label}
            path={path}
            stepInfoText={stepInfoText}
            // onChange={selectedPhotos => setFieldValue(fullPath, selectedPhotos)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={{ marginBottom: 16, gap: 10 }}>
      {inputType !== 'switch' && inputType !== 'dropdown' && showLabel && (
        <Text style={{ fontWeight: '600' }}>{label}</Text>
      )}
      {renderField()}
      {fieldError && isTouched && (
        <Text style={{ color: 'red' }}>{fieldError as string}</Text>
      )}
    </View>
  );
};
