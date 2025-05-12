import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormData, FileInfo } from "@/types/formTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const simulateBackendFilePersistance = (
  data: FormData
): File | undefined => {
  if (data.governmentIdString) {
    return new File([], data.governmentIdString.name, {
      type: data.governmentIdString.type,
    });
  }
};

export const simulateBackendFilePersistancePhoto = (
  data: FormData
): File | undefined => {
  if (data.profilePhotoString) {
    return new File([], data.profilePhotoString.name, {
      type: data.profilePhotoString.type,
    });
  }
};
