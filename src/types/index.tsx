export type MainStackParamsList = {
  Main: undefined;
  Home: { orderType: string };
  Other: undefined;
  Profile: undefined;
};

export type Option = { label: string; value: string; disabled?: boolean };

export type InitialData = {
  label: string;
  name: string;
  inventory: number;
  stubs: number;
};

export type ValidationRule = 'required' | 'email' | 'number' | 'boolean';
export type DataType =
  | 'text'
  | 'number'
  | 'boolean'
  | 'array-of-objects'
  | 'review';
export type InputTypes =
  | 'text-input'
  | 'decimal-input'
  | 'number-input'
  | 'dropdown'
  | 'switch'
  | 'multi-select'
  | 'inventory-list' // New property
  | 'image-selector'
  | 'signature-editor'
  | 'check-box'
  | 'review';
export interface FieldDefinition {
  name: string;
  label: string;
  inputType: InputTypes;
  type: DataType;
  validation?: ValidationRule | string;
  min?: number;
  max?: number;
  regex?: { pattern: RegExp; message: string }; // New property for regex validation
  options?: Option[] | Record<string, Option[]>;
  initialData?: InitialData[];
  typeNumberSubtype?: 'default' | 'minutes';
  showLabel?: boolean;
  disableIf?: (values: any) => boolean;
  visibleIf?: (values: any) => boolean;
  requiredField?: string | string[];
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
