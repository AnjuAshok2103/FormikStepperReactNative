import { StepDefinition } from '../types';

export const formDefinition: StepDefinition[] = [
  {
    title: 'Meter Activity Details',
    fields: [
      {
        name: 'category',
        label: 'Category',
        inputType: 'dropdown',
        type: 'text',
        validation: 'required',
        options: [
          { label: 'Exchange', value: 'exchange', disabled: false },
          { label: 'Install', value: 'install', disabled: true },
          { label: 'Read/Tests', value: 'read_tests', disabled: false },
          { label: 'Verify', value: 'verify', disabled: false },
          { label: 'Remove', value: 'remove', disabled: false },
        ],
      },
      {
        name: 'subcategory',
        label: 'Sub Category',
        inputType: 'dropdown',
        type: 'text',
        validation: 'required',
        options: {
          exchange: [
            { label: 'Meter', value: 'meter' },
            { label: 'ERT', value: 'ert' },
            { label: 'ERT & Index', value: 'ert_index' },
            { label: 'Index', value: 'index' },
          ],
          install: [],
          read_tests: [
            { label: 'Meter', value: 'meter' },
            { label: 'ERT', value: 'ert' },
          ],
          verify: [
            { label: 'Meter', value: 'meter' },
            { label: 'ERT', value: 'ert' },
          ],
          remove: [{ label: 'Meter', value: 'meter' }],
        },
      },
      {
        name: 'meterread',
        label: 'Meter Read',
        inputType: 'switch',
        type: 'boolean',
      },
    ],
  },
  {
    title: 'Leak Classification',
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
        visibleIf: values => values?.leakClassification?.leakOnAboveGround,
      },

      {
        name: 'hazardousLeak',
        label: 'Hazardous Leak',
        inputType: 'check-box',
        type: 'boolean',
        showLabel: false,
        visibleIf: values =>
          !values?.leakClassification?.nonReportableLeak &&
          values?.leakClassification?.leakOnAboveGround,
      },
      {
        name: 'nonHazardousLeakCause',
        label: 'Non Hazardous Leak Cause',
        inputType: 'dropdown',
        type: 'text',
        validation: 'required',
        requiredField: 'nonReportableLeak',
        visibleIf: values =>
          values?.leakClassification?.leakOnAboveGround &&
          !values?.leakClassification?.nonReportableLeak,
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
        visibleIf: values => values?.leakClassification?.leakOnAboveGround,
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
          !values?.leakClassification?.hazardousLeak &&
          values?.leakClassification?.leakOnAboveGround,
        options: [
          { label: 'Bubbles', value: 'bubbles', disabled: false },
          { label: 'Fuzz', value: 'fuzz', disabled: false },
        ],
      },
    ],
  },
  {
    title: 'Atmospheric Corrosion',
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
    title: 'Hazardous Conditions',
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
    ],
    subSteps: [
      {
        title: 'Capture Photos',
        fields: [
          {
            name: 'photos',
            label: 'Add Photos',
            inputType: 'image-selector',
            type: 'array-of-objects',
          },
        ],
      },
      {
        title: 'Capture Signature',
        fields: [
          {
            name: 'signature',
            label: 'Add Signature',
            inputType: 'signature-editor',
            type: 'text',
          },
        ],
      },
    ],
  },
  {
    title: 'Pressure Test',
    fields: [
      {
        name: 'lockup', // The array field
        label: 'Lockup',
        inputType: 'decimal-input', // New input type
        type: 'number', // New type
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
        name: 'clockTestCFH', // The array field
        label: 'Clock Test CFH',
        inputType: 'decimal-input', // New input type
        type: 'number', // New type
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
    title: 'Meter Maintenance',
    fields: [],
    subSteps: [
      {
        title: 'Reasons',
        fields: [
          {
            name: 'reason',
            label: 'Reason',
            inputType: 'dropdown',
            type: 'text',
            validation: 'required',
            options: [
              {
                label: 'No gas leak detected',
                value: 'noGasLeak',
                disabled: true,
              },
              {
                label: 'Minor gas leak detected',
                value: 'minorGasLeak',
                disabled: false,
              },
              {
                label: 'Major gas leak detected',
                value: 'majorGasLeak',
                disabled: false,
              },
              {
                label: 'Meter is damaged',
                value: 'meterDamaged',
                disabled: false,
              },
              {
                label: 'Meter is inaccessible',
                value: 'meterInaccessible',
                disabled: false,
              },
              {
                label: 'Corrosion on pipes observed',
                value: 'corrosionOnPipes',
                disabled: false,
              },
              {
                label: 'Pipe is leaking',
                value: 'pipeLeaking',
                disabled: false,
              },
              {
                label: 'Utility room is locked',
                value: 'utilityRoomLocked',
                disabled: false,
              },
              {
                label: 'Key not found as per instructions',
                value: 'keyNotFound',
                disabled: false,
              },
              {
                label: 'Service completed without issues',
                value: 'serviceCompleted',
                disabled: false,
              },
              {
                label: 'Additional repairs required',
                value: 'additionalRepairsRequired',
                disabled: false,
              },
              {
                label: 'Odor detected, further inspection needed',
                value: 'odorDetected',
                disabled: false,
              },
              {
                label: 'Improper installation identified',
                value: 'improperInstallation',
                disabled: false,
              },
            ],
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
            validation: 'required',
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
            validation: 'required',
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
        title: 'Comments',
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
    title: 'Appliance Inventory',
    fields: [
      {
        name: 'appliances', // The array field
        label: 'Appliances',
        inputType: 'inventory-list', // New input type
        type: 'array-of-objects', // New type
        validation: 'required',
        initialData: [
          { name: 'ac', label: 'Air Conditoner', inventory: 0, stubs: 0 },
          { name: 'wm', label: 'Washing Machine', inventory: 0, stubs: 0 },
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
