import React from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import UploadFromMobile from "./uploadOptions/UploadFromMobile";
import UploadFromDevice from "./uploadOptions/UploadFromDevice";

type ImagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  handlePhotoUpload: (file: File) => void;
  setCurrentStep: (step: "id" | "photo" | "review") => void;
  setImagePreview: (preview: ImagePreviewType) => void;
  imagePreview: ImagePreviewType;
  errors: {
    profilePhoto?: {
      message?: string;
    };
  };
};

export default function PhotoVerificationStep({
  handlePhotoUpload,
  setCurrentStep,
  setImagePreview,
  imagePreview,
  errors,
}: Props) {
  const handleUploadImagePreview = (file: File, sessionId?: string) => {
    if (sessionId !== undefined) {
      setImagePreview({
        ...imagePreview,
        photoImage: "/profilePlaceholder.png",
      });
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview({
          ...imagePreview,
          photoImage: reader.result as string,
        });
      };
    }
  };

  return (
    <div className="space-y-2 flex flex-col justify-center items-start  file-upload">
      <div className="flex flex-col gap-y-1 mb-5 ml-2">
        <h2 className="text-xl font-bold ">Profile Photo verification </h2>
        <span className="text-gray-600 text-sm">
          Passport, Drivers License, or ID Card
        </span>
      </div>

      <div className="flex gap-x-4 flex-row items-center justify-around w-full mt-2">
        {imagePreview.photoImage ? (
          <div className="flex flex-col gap-y-2 items-center">
            <div className="relative max-w-md">
              <Image
                className="w-full object-contain border-blue-400 border-2 rounded-xl p-0.5"
                src={imagePreview.photoImage}
                alt="Image Preview"
                width={200}
                height={200}
              />
              <Button
                onClick={() =>
                  setImagePreview({
                    ...imagePreview,
                    photoImage: null,
                  })
                }
                variant="ghost"
                className="absolute top-3 right-3 text-red-500 hover:text-red-600 bg-white rounded-full p-1"
              >
                <X />
              </Button>
            </div>
            <div className="flex flex-row gap-x-2 w-full ">
              <Button
                type="button"
                onClick={() => setCurrentStep("review")}
                variant="default"
                className="w-full "
              >
                Continue
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-row gap-x-5">
              <UploadFromMobile
                handleUploadIdFile={handlePhotoUpload}
                handleUploadImagePreview={handleUploadImagePreview}
                errors={errors}
              />

              <UploadFromDevice
                handleUploadIdFile={handlePhotoUpload}
                handleUploadImagePreview={handleUploadImagePreview}
                errors={errors}
              />
            </div>

            <div className="mb-2 p-4 border border-gray-200 rounded-lg bg-blue-50">
              <h3 className="font-medium text-gray-800 mb-2">
                Tips for a good selfie:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Ensure your face is clearly visible and centered
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Use good lighting (natural light works best)
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Remove sunglasses, hats, or anything covering your face
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Have a neutral expression or slight smile
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentStep("id")}
              className="mb-2 w-1/6"
              type="button"
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
