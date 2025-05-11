import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormData, FileType } from "@/types/formTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const simulateBackendFilePersistance = (
  data: FormData
): FileType | undefined => {
  if (
    data.governmentFrontIdFilesString &&
    data.governmentBackIdFilesString &&
    data.profilePhotoString
  ) {
    const files: FileType = {
      front:
        new File([], data.governmentFrontIdFilesString.name, {
          type: data.governmentFrontIdFilesString.type,
        }) ||
        undefined ||
        null,
      back:
        new File([], data.governmentBackIdFilesString.name, {
          type: data.governmentBackIdFilesString.type,
        }) ||
        undefined ||
        null,
      photo:
        new File([], data.profilePhotoString.name, {
          type: data.profilePhotoString.type,
        }) ||
        undefined ||
        null,
    };

    return files;
  }
};
