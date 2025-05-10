import { z } from "zod";

const ACCEPTED_FILE_TYPE = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

const signUpErrorMessages = {
  minLengthErrorMessage: "Password must contain at least one uppercase letter",
  maxLengthErrorMessage: "Password must not exceed 20 characters",
  uppercaseErrorMessage: "Password must contain at least one uppercase letter",
  lowercaseErrorMessage: "Password must contain at least one lowercase letter",
  numberErrorMessage: "Password must contain at least one number",
  specialCharacterErrorMessage:
    "Password must contain at least one special character (!@#$%^&*)",
  passwordMismatchErrorMessage: "Password do not match",
};

const mockErrorData = {
  country: "Uruguay",
  email: "alreadytaken@gmail.com",
};

const passwordSchema = z
  .string()
  .min(8, { message: signUpErrorMessages.minLengthErrorMessage })
  .max(20, { message: signUpErrorMessages.maxLengthErrorMessage })
  .refine((password) => /[A-Z]/.test(password), {
    message: signUpErrorMessages.uppercaseErrorMessage,
  })
  .refine((password) => /[a-z]/.test(password), {
    message: signUpErrorMessages.lowercaseErrorMessage,
  })
  .refine((password) => /[0-9]/.test(password), {
    message: signUpErrorMessages.numberErrorMessage,
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: signUpErrorMessages.specialCharacterErrorMessage,
  });

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email("Please enter your email address")
      .refine((email) => email !== mockErrorData.email, {
        message: "This email is already taken",
      }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: signUpErrorMessages.passwordMismatchErrorMessage,
    path: ["confirmPassword"],
  });

export const detailsConfirmationSchema = z.object({
  fullname: z.string().min(3, "Full name is required"),
  dateOfBirth: z
    .date({
      required_error: "Date of birth is required",
      invalid_type_error: "That's not a valid date",
    })
    .refine((date) => {
      if (!date) return false;

      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age >= 18;
    }, "You must be at least 18 years old."),
  city: z.string().min(2, "City is required"),
  fullAddress: z.string().min(5, "Enter full address"),
  country: z
    .string()
    .min(1, "Country is required")
    .refine(
      (country) =>
        country.toLowerCase() !== mockErrorData.country.toLowerCase(),
      "This country is not supported"
    ),
  state: z.string().min(2, "State is required"),
  zipcode: z.string().regex(/^[0-9]{4}$/, "Enter a valid 4-digit ZIP code"),
});

export const kycSchema = z.object({
  governmentFrontIdFiles: z
    .array(z.instanceof(File))
    .min(1, "Upload front side of your ID.")
    .max(1, "Max 1 image is allowed.")
    .refine((files) => files?.length === 1, "One more image is required.")
    .refine(
      (files) => ACCEPTED_FILE_TYPE.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .pdf files are accepted."
    ),
  governmentBackIdFiles: z
    .array(z.instanceof(File))
    .min(1, "Upload back side of your ID.")
    .max(1, "Max 1 image is allowed.")
    .refine(
      (files) => ACCEPTED_FILE_TYPE.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .pdf files are accepted."
    ),
  profilePhoto: z
    .array(z.instanceof(File))
    .min(1, "Upload a selfie photo.")
    .refine(
      (files) => ACCEPTED_FILE_TYPE.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .pdf files are accepted."
    ),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type DetailsConfirmationFormValues = z.infer<
  typeof detailsConfirmationSchema
>;
export type KycFormValues = z.infer<typeof kycSchema>;
