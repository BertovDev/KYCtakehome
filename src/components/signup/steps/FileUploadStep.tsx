"use client";

import { useForm } from "react-hook-form";
import { KycFormValues, kycSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/SignupStepContext";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import StepButtons from "../StepButtons";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { simulateBackendFilePersistance } from "@/lib/utils";

type FileUploadId = {
  front: {
    name: string;
    type: string;
  } | null;
  back: {
    name: string;
    type: string;
  } | null;
};

export default function FileUploadStep() {
  const router = useRouter();
  const { data, setData, isHydrated } = useFormData();

  const [uploadIdFiles, setUploadIdFiles] = useState<FileUploadId>({
    front: data.governmentFrontIdFilesString
      ? {
          name: data.governmentFrontIdFilesString.name,
          type: data.governmentFrontIdFilesString.type,
        }
      : null,
    back: data.governmentBackIdFilesString
      ? {
          name: data.governmentBackIdFilesString.name,
          type: data.governmentBackIdFilesString.type,
        }
      : null,
  });
  const [uploadPhotoFiles, setUploadPhotoFiles] = useState<{
    name: string;
    type: string;
  } | null>(
    data.profilePhotoString
      ? {
          name: data.profilePhotoString.name,
          type: data.profilePhotoString.type,
        }
      : null
  );
  const [isLoading, setIsLoading] = useState(false);

  const {
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KycFormValues>({
    defaultValues: {
      governmentFrontIdFiles: undefined,
      governmentBackIdFiles: undefined,
      profilePhoto: undefined,
    },
    resolver: zodResolver(kycSchema),
  });

  useEffect(() => {
    if (!isHydrated) return;

    if (
      !data.fullAddress ||
      !data.country ||
      !data.city ||
      !data.state ||
      !data.zipcode ||
      !data.fullname ||
      !data.dateOfBirth
    ) {
      router.push("/signup/step-2");
    }

    const files = simulateBackendFilePersistance(data);
    if (files) {
      reset({
        governmentFrontIdFiles: files.front,
        governmentBackIdFiles: files.back,
        profilePhoto: files.photo,
      });
    }

    setUploadIdFiles({
      front: data.governmentFrontIdFilesString
        ? {
            name: data.governmentFrontIdFilesString.name,
            type: data.governmentFrontIdFilesString.type,
          }
        : null,
      back: data.governmentBackIdFilesString
        ? {
            name: data.governmentBackIdFilesString.name,
            type: data.governmentBackIdFilesString.type,
          }
        : null,
    });
    setUploadPhotoFiles(
      data.profilePhotoString
        ? {
            name: data.profilePhotoString.name,
            type: data.profilePhotoString.type,
          }
        : null
    );
  }, [isHydrated, data, router]);

  const onSubmit = handleSubmit(async (values: KycFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setIsLoading(false);
      setData({
        ...data,
        ...values,
        governmentFrontIdFilesString: {
          name: values.governmentFrontIdFiles?.name,
          type: values.governmentFrontIdFiles?.type,
        },
        governmentBackIdFilesString: {
          name: values.governmentBackIdFiles?.name,
          type: values.governmentBackIdFiles?.type,
        },
        profilePhotoString: {
          name: values.profilePhoto?.name,
          type: values.profilePhoto?.type,
        },
      });

      router.push("/signup/step-4");
    }
  });

  const handleFrontIdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadIdFiles((prev) => ({
        ...prev,
        front: {
          name: file.name,
          type: file.type,
        },
      }));
      setValue("governmentFrontIdFiles", file, {
        shouldValidate: true,
      });
    }
  };

  const handleBackIdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadIdFiles((prev) => ({
        ...prev,
        back: {
          name: file.name,
          type: file.type,
        },
      }));
      setValue("governmentBackIdFiles", file, {
        shouldValidate: true,
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadPhotoFiles({
        name: file.name,
        type: file.type,
      });
      setValue("profilePhoto", file, {
        shouldValidate: true,
      });
    }
  };

  return !isHydrated ? (
    <p className="text-black text-3xl">Loading...</p>
  ) : (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="flex gap-x-5 flex-row  items-center justify-center mt-2">
          <div className="flex flex-col gap-y-5 border-2 border-dashed  rounded-lg   border-gray-300 p-6 text-center hover:bg-gray-100 transition cursor-pointer">
            <Label
              htmlFor="governmentIdFrontFile"
              className="text-black text-sm font-medium  tracking-wide"
            >
              Government ID Front
            </Label>
            <Input
              id="governmentIdFrontFile"
              type="file"
              className="hidden"
              accept="image/*,.pdf"
              onChange={(e) => {
                handleFrontIdUpload(e);
              }}
            />
            <Label htmlFor="governmentIdFrontFile" className="cursor-pointer">
              <div className="flex flex-col items-center gap-y-2">
                <Upload className="h-8 w-8 text-black mb-3" />
                <ul className="text-sm font-medium text-black ">
                  {uploadIdFiles.front ? (
                    <li>{uploadIdFiles.front.name} </li>
                  ) : (
                    <li>Click to upload or drag and drop</li>
                  )}
                </ul>
                <span className="text-xs text-black/60">
                  Passport, Drivers License, or ID Card
                </span>
              </div>
            </Label>
            {errors.governmentFrontIdFiles && (
              <p className="text-red-500 text-sm mt-1">
                {errors.governmentFrontIdFiles.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-5 border-2 border-dashed  rounded-lg   border-gray-300 p-6 text-center hover:bg-gray-100 transition cursor-pointer">
            <Label
              htmlFor="governmentIdBackFile"
              className="text-black text-sm font-medium  tracking-wide"
            >
              Government ID Back
            </Label>
            <Input
              id="governmentIdBackFile"
              type="file"
              className="hidden"
              accept="image/*,.pdf"
              onChange={(e) => {
                handleBackIdUpload(e);
              }}
            />
            <Label htmlFor="governmentIdBackFile" className="cursor-pointer">
              <div className="flex flex-col items-center gap-y-2">
                <Upload className="h-8 w-8 text-black mb-3" />
                <ul className="text-sm font-medium text-black ">
                  {uploadIdFiles.back ? (
                    <li>{uploadIdFiles.back.name}</li>
                  ) : (
                    <li>Click to upload or drag and drop</li>
                  )}
                </ul>
                <span className="text-xs text-black/60">
                  Passport, Drivers License, or ID Card
                </span>
              </div>
            </Label>

            {errors.governmentBackIdFiles && (
              <p className="text-red-500 text-sm mt-1">
                {errors.governmentBackIdFiles.message?.toString()}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="profilePhoto"
          className="text-black text-sm font-medium  tracking-wide"
        >
          Selfie Photo
        </Label>
        <div className="flex flex-col gap-y-5 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-100 transition cursor-pointer">
          <Input
            id="profilePhoto"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              handlePhotoUpload(e);
            }}
          />
          <Label htmlFor="profilePhoto" className="cursor-pointer">
            <div className="flex flex-col items-center gap-y-2">
              <Upload className="h-8 w-8 text-black mb-3" />
              <ul className="text-sm font-medium text-black ">
                {uploadPhotoFiles ? (
                  <li>{uploadPhotoFiles.name}</li>
                ) : (
                  <li>Click to upload or drag and drop</li>
                )}
              </ul>
              <span className="text-xs text-black/60 ">
                Clear photo of your face
              </span>
            </div>
          </Label>
          {errors.profilePhoto && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profilePhoto.message?.toString()}
            </p>
          )}
        </div>
      </div>

      <StepButtons isLoading={isLoading} />
    </form>
  );
}
