import { StepDefinition } from '../types';

export const formDefinitionSimple: StepDefinition[] = [
  {
    title: 'General Information',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        inputType: 'text-input',
        type: 'text',
        validation: 'required',
      },
      {
        name: 'email',
        label: 'Email Address',
        inputType: 'text-input',
        type: 'text',
        validation: 'required',
      },
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        inputType: 'text-input',
        type: 'number',
        validation: 'required',
      },
    ],
  },
  // --- New Step 2 with subSteps ---
  {
    title: 'Vehicle Details',
    fields: [],
    subSteps: [
      {
        title: 'Engine Specs',
        fields: [
          {
            name: 'horsepower',
            label: 'Horsepower (HP)',
            inputType: 'decimal-input',
            type: 'number',
          },
          {
            name: 'engineSize',
            label: 'Engine Size (L)',
            inputType: 'decimal-input',
            type: 'number',
          },
          {
            name: 'engineType',
            label: 'Engine Type',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              { label: 'Gasoline', value: 'gasoline' },
              { label: 'Diesel', value: 'diesel' },
              { label: 'Electric', value: 'electric' },
            ],
          },
        ],
      },
    ],
  },
];
