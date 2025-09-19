import { StepDefinition } from '../types';

export const dnp: StepDefinition[] = [
  {
    title: 'Meter Maintenance',
    fields: [],
    subSteps: [
      {
        title: 'Pressure Test',
        fields: [
          {
            name: 'lockup',
            label: 'Lockup',
            inputType: 'decimal-input',
            type: 'number',
            validation: 'required',
          },
          {
            name: 'unit',
            label: 'Unit',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              { label: 'wc', value: 'wc', disabled: false },
              { label: 'lbs', value: 'lbs', disabled: false },
            ],
          },
          {
            name: 'clockTestCFH',
            label: 'Clock Test CFH',
            inputType: 'decimal-input',
            type: 'number',
            validation: 'required',
          },
          {
            name: 'clockTestInMinutes',
            label: 'CFH In Minutes',
            inputType: 'number-input',
            type: 'number',
            max: 2,
            typeNumberSubtype: 'minutes',
            validation: 'required',
          },
          {
            name: 'dropTestPassed',
            label: 'Drop Test',
            inputType: 'switch',
            type: 'boolean',
          },
          {
            name: 'dropTestInMinutes',
            label: 'Drop Test In Minutes',
            inputType: 'number-input',
            type: 'number',
            typeNumberSubtype: 'minutes',
            max: 2,
            validation: 'required',
          },
        ],
      },
      {
        title: 'In Meter',
        fields: [
          {
            name: 'number',
            label: 'Number',
            inputType: 'text-input',
            type: 'number',
            max: 5,
            validation: 'required',
          },
          {
            name: 'dials',
            label: 'Dials',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              { label: '4', value: '4', disabled: false },
              { label: '5', value: '5', disabled: false },
              { label: '6', value: '6', disabled: false },
              { label: '7', value: '7', disabled: false },
            ],
          },
          {
            name: 'read',
            label: 'Read',
            inputType: 'text-input',
            type: 'number',
            max: 5,
            validation: 'required',
          },
          {
            name: 'ertId',
            label: 'ERT ID',
            inputType: 'text-input',
            type: 'number',
            max: 4,
            validation: 'required',
          },
        ],
      },
      {
        title: 'Out Meter',
        fields: [
          {
            name: 'number',
            label: 'Number',
            inputType: 'text-input',
            type: 'number',
            max: 5,
            validation: 'required',
          },
          {
            name: 'dials',
            label: 'Dials',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              { label: '4', value: '4', disabled: false },
              { label: '5', value: '5', disabled: false },
              { label: '6', value: '6', disabled: false },
              { label: '7', value: '7', disabled: false },
            ],
          },
          {
            name: 'read',
            label: 'Read',
            inputType: 'text-input',
            type: 'number',
            max: 5,
            validation: 'required',
          },
          {
            name: 'ertId',
            label: 'ERT ID',
            inputType: 'text-input',
            type: 'number',
            max: 4,
            validation: 'required',
          },
        ],
      },
      {
        title: 'Comments',
        stepInfoText:
          'Select the issue you have observed with the service. This will help us understand the problem and take appropriate action.',
        fields: [
          {
            name: 'selectedComment',
            label: 'Selected Comments',
            inputType: 'multi-select',
            type: 'text',
            validation: 'required',
            options: [
              {
                value: 'noGasLeak',
                label: 'No gas leak detected',
              },
              {
                value: 'minorGasLeak',
                label: 'Minor gas leak detected',
              },
              {
                value: 'majorGasLeak',
                label: 'Major gas leak detected',
              },
              {
                value: 'meterDamaged',
                label: 'Meter is damaged',
              },
              {
                value: 'meterInaccessible',
                label: 'Meter is inaccessible',
              },
              {
                value: 'corrosionOnPipes',
                label: 'Corrosion on pipes observed',
              },
              {
                value: 'pipeLeaking',
                label: 'Pipe is leaking',
              },
              {
                value: 'utilityRoomLocked',
                label: 'Utility room is locked',
              },
              {
                value: 'keyNotFound',
                label: 'Key not found as per instructions',
              },
              {
                value: 'serviceCompleted',
                label: 'Service completed without issues',
              },
              {
                value: 'additionalRepairsRequired',
                label: 'Additional repairs required',
              },
              {
                value: 'odorDetected',
                label: 'Odor detected, further inspection needed',
              },
              {
                value: 'improperInstallation',
                label: 'Improper installation identified',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Confirmation',
    fields: [
      {
        name: 'review',
        label: 'review',
        type: 'review',
        inputType: 'review',
      },
    ],
  },
];
