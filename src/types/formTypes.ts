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
  governmentFrontIdFilesString?: FileInfo | null;
  governmentBackIdFilesString?: FileInfo | null;
  profilePhotoString?: FileInfo | null;
};

export type FileInfo = {
  name: string;
  type: string;
};

export type FileType = {
  front: File | undefined;
  back: File | undefined;
  photo: File | undefined;
};

export type FormErrors = Record<string, string>;
