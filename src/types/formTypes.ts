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
  governmentIdFile?: File | null;
  profilePhoto?: File | null;
  governmentIdString?: FileInfo | null;
  profilePhotoString?: FileInfo | null;
};

export type FileInfo = {
  name: string;
  type: string;
};

export type FileUploadId = {
  name: string;
  type: string;
};

export type FormErrors = Record<string, string>;
