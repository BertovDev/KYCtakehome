import React from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import UploadFromMobile from "./uploadOptions/UploadFromMobile";
import UploadFromDevice from "./uploadOptions/UploadFromDevice";
import { motion } from "framer-motion";

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
        photoImage: "/images/image2.png",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-5 flex flex-col justify-center gap-y-2 items-center pt-8 pb-5  file-upload"
    >
      <div className="flex  items-center  flex-col gap-y-1 ml-2 ">
        <h2 className="text-xl font-bold text-zinc-300">
          Profile Photo verification{" "}
        </h2>
        <span className="text-zinc-300 text-sm">
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
                className=" bg-gradient-to-r w-full from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group"
                type="button"
                onClick={() => {
                  setCurrentStep("review");
                }}
              >
                <div>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                  <span className="relative z-10 flex items-center">
                    Continue
                  </span>
                </div>
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

            <div className="mb-2 p-4 border border-zinc-800 rounded-lg bg-zinc-900">
              <h3 className="font-medium text-zinc-300 mb-2">
                Tips for a good selfie:
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
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
    </motion.div>
  );
}
