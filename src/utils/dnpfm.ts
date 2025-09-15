import { StepDefinition } from '../types';

export const dnpfm: StepDefinition[] = [
  {
    title: 'Meter Maintenance',
    fields: [],
    subSteps: [
      {
        title: 'In Meter',
        stepInfoText: '',
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
        title: 'Pressure Test',
        stepInfoText: '',
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
            inputType: 'text-input',
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
            inputType: 'text-input',
            type: 'number',
            typeNumberSubtype: 'minutes',
            max: 2,
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
            name: 'commentsSelected',
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
    title: 'SO Details',
    fields: [],
    subSteps: [
      {
        title: 'Appliance Inventory',
        stepInfoText:
          'Update the inventory to reflect the parts used or restocked during this service.Record the stubs for warranty claims or service actions completed.Ensure accurate entries to maintain seamless service order tracking.',
        fields: [
          {
            name: 'appliances', // The array field
            label: 'Appliances',
            inputType: 'inventory-list', // New input type
            type: 'array-of-objects', // New type
            validation: 'required',
            initialData: [
              { name: 'ac', label: 'Air Conditoner', inventory: 0, stubs: 0 },
              {
                name: 'washingMachine',
                label: 'Washing Machine',
                inventory: 0,
                stubs: 0,
              },
              { name: 'fridge', label: 'Refrigerator', inventory: 0, stubs: 0 },
              {
                name: 'waterHeater',
                label: 'Water Heater',
                inventory: 0,
                stubs: 0,
              },
              { name: 'range', label: 'Range', inventory: 0, stubs: 0 },
              { name: 'furnace', label: 'Furnace', inventory: 0, stubs: 0 },
              { name: 'gasPack', label: 'Gas Pack', inventory: 0, stubs: 0 },
              { name: 'dryer', label: 'Dryer', inventory: 0, stubs: 0 },
              { name: 'gasLight', label: 'Gas Light', inventory: 0, stubs: 0 },
              {
                name: 'wallHeater',
                label: 'Wall Heater',
                inventory: 0,
                stubs: 0,
              },
              {
                name: 'poolHeater',
                label: 'Pool Heater',
                inventory: 0,
                stubs: 0,
              },
              { name: 'fireplace', label: 'Fireplace', inventory: 0, stubs: 0 },
              { name: 'bbq', label: 'BBQ', inventory: 0, stubs: 0 },
              { name: 'spa', label: 'Spa', inventory: 0, stubs: 0 },
              { name: 'boiler', label: 'Boiler', inventory: 0, stubs: 0 },
              { name: 'engine', label: 'Engine', inventory: 0, stubs: 0 },
              { name: 'other', label: 'Other', inventory: 0, stubs: 0 },
            ],
          },
        ],
      },
      {
        title: 'Leak Classification',
        stepInfoText:
          'Check this box if the leak is present and on company facilities. Leave it unchecked if the leak will be transferred to Construction or Tech Services, if no leak is determined to be present, or if the leak is on the customer houseline.',
        optional: true,
        fields: [
          {
            name: 'leakOnAboveGround',
            label: 'Leak On Above Ground Company Facilities',
            inputType: 'check-box',
            type: 'boolean',
            showLabel: false,
          },
          {
            name: 'nonReportableLeak',
            label: 'Non-Reportable Leak',
            inputType: 'check-box',
            type: 'boolean',
            showLabel: false,
            // Condition 1: Visible if leakOnAboveGround is true
            visibleIf: values =>
              values?.soDetails?.subSteps?.leakClassification
                ?.leakOnAboveGround,
          },
          {
            name: 'hazardousLeak',
            label: 'Hazardous Leak',
            inputType: 'check-box',
            type: 'boolean',
            showLabel: false,
            visibleIf: values =>
              !values?.soDetails?.subSteps?.leakClassification
                ?.nonReportableLeak &&
              values?.soDetails?.subSteps?.leakClassification
                ?.leakOnAboveGround,
          },
          {
            name: 'nonHazardousLeakCause',
            label: 'Non Hazardous Leak Cause',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            requiredField: 'nonReportableLeak',
            visibleIf: values =>
              values?.soDetails?.subSteps?.leakClassification
                ?.leakOnAboveGround &&
              !values?.soDetails?.subSteps?.leakClassification
                ?.nonReportableLeak,
            options: [
              {
                label: 'CORROSION FAILURE',
                value: 'corrosion_failure',
                disabled: false,
              },
              {
                label: 'NATURAL FORCE DAMAGE',
                value: 'natural_force_damage',
                disabled: false,
              },
              {
                label: 'OTHER OUTSIDE FORCE DAMAGE',
                value: 'other_outside_force_damage',
                disabled: false,
              },
              {
                label: 'PIPE, WELD, OR JOINT FAILURE',
                value: 'pipe_weld_or_joint_failure',
                disabled: false,
              },
              {
                label: 'EQUIPMENT FAILURE',
                value: 'equipment_failure',
                disabled: false,
              },
              {
                label: 'INCORRECT OPERATION',
                value: 'incorrect_operation',
                disabled: false,
              },
              { label: 'OTHER CAUSE', value: 'other_cause', disabled: false },
            ],
          },
          {
            name: 'leakPipeSize',
            label: 'Leak Pipe Size',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            visibleIf: values =>
              values?.soDetails?.subSteps?.leakClassification
                ?.leakOnAboveGround,
            options: [
              { label: '1/4"', value: '1/4', disabled: false },
              { label: '1/2"', value: '1/2', disabled: false },
              { label: '3/4"', value: '3/4', disabled: false },
              { label: '1"', value: '1', disabled: false },
              { label: '1 1/4"', value: '1_1/4', disabled: false },
              { label: '1 1/2"', value: '1_1/2', disabled: false },
              { label: '1 3/4"', value: '1_3/4', disabled: false },
              { label: '2"', value: '2', disabled: false },
              { label: '2 1/4"', value: '2_1/4', disabled: false },
              { label: '2 1/2"', value: '2_1/2', disabled: false },
              { label: '2 3/4"', value: '2_3/4', disabled: false },
              { label: '3"', value: '3', disabled: false },
              { label: '3 1/4"', value: '3_1/4', disabled: false },
              { label: '3 1/2"', value: '3_1/2', disabled: false },
              { label: '3 3/4"', value: '3_3/4', disabled: false },
              { label: '4"', value: '4', disabled: false },
              {
                label: 'NON-PIPE/OTHER COMPONENT',
                value: 'non_pipe_other_component',
                disabled: false,
              },
            ],
          },
          {
            name: 'soapBubbleTest',
            label: 'Soap Bubble Test',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            requiredField: 'hazardousLeak',
            visibleIf: values =>
              !values?.soDetails?.subSteps?.leakClassification?.hazardousLeak &&
              values?.soDetails?.subSteps?.leakClassification
                ?.leakOnAboveGround,
            options: [
              { label: 'Bubbles', value: 'bubbles', disabled: false },
              { label: 'Fuzz', value: 'fuzz', disabled: false },
            ],
          },
        ],
      },
      {
        title: 'Hazardous Conditions',
        stepInfoText:
          'Select the issue you have observed with the service. This will help us understand the problem and take appropriate action.',
        fields: [
          {
            name: 'signedBy',
            label: 'Signed By',
            inputType: 'text-input',
            type: 'text',
            max: 15,
            validation: 'required',
          },
          {
            name: 'relation',
            label: 'Relation',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              { label: 'Owner', value: 'owner', disabled: false },
              { label: 'Occupant', value: 'occupant', disabled: false },
              { label: 'Agent', value: 'agent', disabled: false },
              { label: 'Tenant', value: 'tenant', disabled: false },
            ],
          },
          {
            name: 'meterLeft',
            label: 'Meter Left',
            inputType: 'switch',
            type: 'boolean',
          },
          {
            name: 'photos',
            label: 'Add Photos',
            inputType: 'image-selector',
            type: 'array-of-objects',
          },
          {
            name: 'signature',
            label: 'Add Signature',
            inputType: 'signature-editor',
            type: 'text',
          },
        ],
      },
      {
        title: 'Atmospheric Corrosion',
        stepInfoText:
          'Corrosion can impact service reliability. Please ensure technicians have clear access to pipes or areas where corrosion is suspected.',
        fields: [
          {
            name: 'corrosion',
            label: 'Corrosion',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              {
                value: 'noneFound',
                label: 'None Found',
                disabled: false,
              },
              {
                value: 'aboveStopcock',
                label: 'Above Stopcock',
                disabled: false,
              },
              {
                value: 'belowStopcock',
                label: 'Below Stopcock',
                disabled: false,
              },
            ],
          },
        ],
      },
      {
        title: 'Comments',
        stepInfoText:
          'Select the issue you have observed with the service. This will help us understand the problem and take appropriate action.',
        fields: [
          {
            name: 'commentsSelected',
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
];
