import { StepDefinition } from '../types';

export const FM18E: StepDefinition[] = [
  {
    title: 'Meter Maintenance',
    fields: [],
    subSteps: [
      {
        title: 'Out Meter',
        fields: [
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
        title: 'In Meter',
        fields: [
          {
            name: 'read',
            label: 'Read',
            inputType: 'text-input',
            type: 'number',
            max: 5,
            validation: 'required',
          },
        ],
      },
      {
        title: 'Meter/ERT Drive Rate',
        fields: [
          {
            name: 'found',
            label: 'Found',
            inputType: 'dropdown',
            type: 'text',
            requiredField: 'driveRate',
            validation: 'required',
            visibleIf: values =>
              !values?.meterMaintenance?.subSteps?.meterErtDriveRate?.driverate,
            options: [
              { label: '1', value: '1', disabled: false },
              { label: '2', value: '2', disabled: false },
              { label: '5', value: '5', disabled: false },
              { label: '10', value: '10', disabled: false },
              { label: '100', value: '100', disabled: false },
            ],
          },
          {
            name: 'left',
            label: 'Left',
            inputType: 'dropdown',
            type: 'text',
            requiredField: 'driveRate',
            validation: 'required',
            visibleIf: values =>
              !values?.meterMaintenance?.subSteps?.meterErtDriveRate?.driverate,
            options: [
              { label: '1', value: '1', disabled: false },
              { label: '2', value: '2', disabled: false },
              { label: '5', value: '5', disabled: false },
              { label: '10', value: '10', disabled: false },
              { label: '100', value: '100', disabled: false },
            ],
          },
          {
            name: 'ert_rfread',
            label: 'Ert `rf` Read',
            inputType: 'text-input',
            type: 'number',
            requiredField: 'driveRate',
            visibleIf: values =>
              !values?.meterMaintenance?.subSteps?.meterErtDriveRate?.driverate,
            max: 5,
            validation: 'required',
          },
          {
            name: 'driverate',
            label: 'Drive Rate',
            inputType: 'switch',
            type: 'boolean',
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
