import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload, Camera, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type imagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  handleUploadIdFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentStep: (step: "id" | "photo") => void;
  setImagePreview: (preview: imagePreviewType) => void;
  imagePreview: imagePreviewType;
  errors: {
    governmentIdFile?: {
      message?: string;
    };
  };
};

export default function IdVerificationStep({
  handleUploadIdFile,
  errors,
  setCurrentStep,
  setImagePreview,
  imagePreview,
}: Props) {
  const [mode, setMode] = useState<"camera" | "upload" | "initial">("initial");

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview({
        idImage: reader.result as string,
        photoImage: null,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2 flex flex-col justify-center items-start  file-upload">
      <div className="flex flex-col gap-y-1 mb-5 ml-2">
        <h2 className="text-xl font-bold ">ID verification </h2>
        <span className="text-gray-600 text-sm">
          Passport, Drivers License, or ID Card
        </span>
      </div>

      {mode === "initial" && (
        <div className="flex gap-x-4 flex-row items-center justify-around w-full mt-2">
          {imagePreview.idImage !== null ? (
            <div className="flex flex-col gap-y-2 items-center">
              <div className="relative max-w-md">
                <Image
                  className="w-full object-contain border-blue-500 border-4 rounded-xl p-0.5"
                  src={imagePreview.idImage}
                  alt="Image Preview"
                  width={200}
                  height={200}
                />
                <Button
                  onClick={() =>
                    setImagePreview({
                      idImage: null,
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
                  onClick={() => {
                    setCurrentStep("photo");
                  }}
                  variant="default"
                  className="w-full "
                >
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-row gap-x-5">
                <div className="flex flex-col gap-y-5 border bg-gray-50  rounded-lg shadow-sm border-gray-200 py-5 px-10 text-center hover:bg-gray-100 transition cursor-pointer">
                  <Label
                    htmlFor="governmentIdFileCamera"
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
                        htmlFor="governmentIdFileCamera"
                        className="text-black text-lg font-medium "
                      >
                        Use Your Phone
                      </Label>
                      <ul className="text-sm font-medium text-gray-800 ">
                        <li>Use your camera to take a photo of your ID</li>
                      </ul>
                    </div>
                  </Label>

                  {errors.governmentIdFile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.governmentIdFile.message?.toString()}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-5 border shadow-sm bg-gray-50 rounded-lg   border-gray-200 py-5 px-10 text-center hover:bg-gray-100 transition cursor-pointer">
                  <Input
                    id="governmentIdFileUpload"
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => {
                      handleUploadIdFile(e);
                      if (e.target.files?.[0]) {
                        handleUpload(e.target.files?.[0]);
                      }
                    }}
                  />
                  <Label
                    htmlFor="governmentIdFileUpload"
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
                        htmlFor="governmentIdFileUpload"
                        className="text-black text-lg font-medium "
                      >
                        Upload a Photo
                      </Label>
                      <ul className="text-sm font-medium text-gray-800 ">
                        <li>Select an existing file or upload a new one</li>
                      </ul>
                    </div>
                  </Label>

                  {errors.governmentIdFile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.governmentIdFile.message?.toString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-blue-50">
                <h3 className="font-medium text-gray-800 mb-2">
                  Tips for a good ID photo:
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    Ensure all 4 corners of your ID are visible
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    Make sure the photo is clear, not blurry
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    Avoid glare or reflections on the ID
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    Place it against a dark background for contrast
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
