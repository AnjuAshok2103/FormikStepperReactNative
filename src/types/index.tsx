export type MainStackParamsList = {
  Main: undefined;
  Home: { formDefinition: StepDefinition[]; orderType: string };
  Other: undefined;
};

export type Option = { label: string; value: string; disabled?: boolean };

export type InitialData = {
  label: string;
  name: string;
  inventory: number;
  stubs: number;
};

export type ValidationRule = 'required' | 'email' | 'number' | 'boolean';
export interface FieldDefinition {
  name: string;
  label: string;
  inputType:
    | 'text-input'
    | 'decimal-input'
    | 'dropdown'
    | 'switch'
    | 'multi-select'
    | 'inventory-list' // New property
    | 'image-selector'
    | 'signature-editor'
    | 'check-box';
  type: 'text' | 'number' | 'boolean' | 'array-of-objects';
  validation?: ValidationRule | string;
  min?: number;
  max?: number;
  regex?: { pattern: RegExp; message: string }; // New property for regex validation
  options?: Option[] | Record<string, Option[]>;
  initialData?: InitialData[];
  typeNumberSubtype?: 'default' | 'minutes';
  showLabel?: boolean;
  visibleIf?: (values: any) => boolean;
  requiredField?: string;
}

export interface StepDefinition {
  title: string;
  optional?: boolean;
  stepInfoText?: string;
  fields?: FieldDefinition[];
  subSteps?: StepDefinition[];
}

export interface Asset {
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  originalPath?: string;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
}
