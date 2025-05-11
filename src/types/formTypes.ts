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
  zipcode?: string;
  country?: string;
  dateOfBirth?: string;

  // Step 3 : File Upload
  governmentFrontIdFiles?: File | null;
  governmentBackIdFiles?: File | null;
  profilePhoto?: File | null;
  governmentFrontIdFilesString?: FileType | null;
  governmentBackIdFilesString?: FileType | null;
  profilePhotoString?: FileType | null;
};

export type FileType = {
  name: string;
  type: string;
};

export type FormErrors = Record<string, string>;

export type StepsProps = {
  formData: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: any) => void;
  isLoading?: boolean;
};
