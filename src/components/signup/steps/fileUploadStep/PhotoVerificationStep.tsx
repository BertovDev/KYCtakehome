import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload, Camera, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ImagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [mode, setMode] = useState<"camera" | "upload" | "initial">("initial");

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview({
        ...imagePreview,
        photoImage: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2 flex flex-col justify-center items-start  file-upload">
      <div className="flex flex-col gap-y-1 mb-5 ml-2">
        <h2 className="text-xl font-bold ">Profile Photo verification </h2>
        <span className="text-gray-600 text-sm">
          Passport, Drivers License, or ID Card
        </span>
      </div>

      {mode === "initial" && (
        <div className="flex gap-x-4 flex-row items-center justify-around w-full mt-2">
          {imagePreview.photoImage ? (
            <div className="flex flex-col gap-y-2 items-center">
              <div className="relative max-w-md">
                <Image
                  className="w-full object-contain border-blue-500 border-4 rounded-xl p-0.5"
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
                <div className="flex flex-col gap-y-5 border bg-gray-50  rounded-lg shadow-sm border-gray-200 py-5 px-10 text-center hover:bg-gray-100 transition cursor-pointer">
                  <Label
                    htmlFor="profilePhotoCamera"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-y-2 ">
                      <div
                        className="
                rounded-full bg-blue-100 mb-1 p-1  flex items-center shadow-sm shadow-black/20 justify-center"
                      >
                        <Camera className="w-10 h-10 text-blue-400  p-2 " />
                      </div>
                      <Label
                        htmlFor="profilePhotoCamera"
                        className="text-black text-lg font-medium "
                      >
                        Use Your Phone
                      </Label>
                      <ul className="text-sm font-medium text-gray-800 ">
                        <li>Use your camera to take a photo of your ID</li>
                      </ul>
                    </div>
                  </Label>

                  {errors.profilePhoto && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.profilePhoto.message?.toString()}
                    </p>
                  )}
                </div>
                <div
                  className="flex flex-col gap-y-5 border shadow-sm bg-gray-50    rounded-lg   border-gray-200 py-5 px-10 text-center hover:bg-gray-100 transition cursor-pointer"
                  // onClick={() => setMode("upload")}
                >
                  <Input
                    id="profilePhotoUpload"
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg, image/jpg "
                    onChange={(e) => {
                      handlePhotoUpload(e);
                      if (e.target.files?.[0]) {
                        handleUpload(e.target.files?.[0]);
                      }
                    }}
                  />
                  <Label
                    htmlFor="profilePhotoUpload"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-y-2">
                      <div
                        className="
                rounded-full bg-blue-100 mb-1 p-1 flex items-center shadow-sm shadow-black/20 justify-center"
                      >
                        <Upload className="w-10 h-10 text-blue-400 p-2 " />
                      </div>
                      <Label
                        htmlFor="profilePhotoUpload"
                        className="text-black text-lg font-medium "
                      >
                        Upload a Photo
                      </Label>
                      <ul className="text-sm font-medium text-gray-800 ">
                        <li>Select an existing file or upload a new one</li>
                      </ul>
                    </div>
                  </Label>

                  {errors.profilePhoto && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.profilePhoto.message?.toString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-blue-50">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}
