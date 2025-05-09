export type FormData = {
  // Step 1: Personal Information
  name: string;
  email: string;
  profilePhoto: File | null;

  // Step 2: Account Creation
  password: string;
  confirmPassword: string;

  // Step 3: KYC Information
  fullAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  dateOfBirth: string;
  governmentIdFile: File | null;

  // Step 4: Wallet Setup
  competitorCategory: string;
  termsAccepted: boolean;
};

export type StepsProps = {
  formData: FormData;
  errors: Record<string, string>;
  onChange: (field: keyof FormData, value: any) => void;
  isLoading?: boolean;
};
