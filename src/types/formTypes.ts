export type FormData = {
  // Step 1: Account Creation
  email?: string;
  password?: string;
  confirmPassword?: string;

  // Step 2: KYC Information
  fullname?: string;
  fullAddress?: string;
  city?: string;
  state?: string;
  zipcde?: string;
  country?: string;
  dateOfBirth?: Date;

  // Step 3 : File Upload
  governmentFrontIdFiles?: File[] | null;
  governmentBackIdFiles?: File[] | null;
  profilePhoto?: File[] | null;

  // Step 4: Wallet Setup
  competitorCategory?: File;
  termsAccepted?: boolean;
};

export type FormErrors = Record<string, string>;

export type StepsProps = {
  formData: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: any) => void;
  isLoading?: boolean;
};
