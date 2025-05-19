import React from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import UploadFromDevice from "./uploadOptions/UploadFromDevice";
import UploadFromMobile from "./uploadOptions/UploadFromMobile";
import { useRouter } from "next/navigation";
import { step1Endpoint } from "@/lib/routes";

type imagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  handleUploadIdFile: (file: File) => void;
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
  const router = useRouter();

  const handleUploadImagePreview = (file: File, sessionId?: string) => {
    if (sessionId !== undefined) {
      setImagePreview({
        idImage: "/idPlaceholder.webp",
        photoImage: null,
      });
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview({
          idImage: reader.result as string,
          photoImage: null,
        });
      };
    }
  };

  return (
    <div className="space-y-5 flex flex-col justify-center gap-y-2 items-center pt-8 pb-5  file-upload">
      <div className="flex  items-center  flex-col gap-y-1 ml-2 ">
        <h2 className="text-2xl text-zinc-300 font-bold ">ID verification </h2>

        <span className="text-zinc-300 text-sm">
          Passport, Drivers License, or ID Card
        </span>
      </div>

      <div className="flex gap-x-4 flex-row items-center justify-around w-full mt-2">
        {imagePreview.idImage !== null ? (
          <div className="flex flex-col gap-y-5 items-center mt-3">
            <div className="relative max-w-md">
              <Image
                className="w-full object-contain border-zinc-300 border-2 rounded-xl p-0.5"
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
                className=" bg-gradient-to-r w-full from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group"
                type="button"
                onClick={() => {
                  setCurrentStep("photo");
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
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-5">
              <UploadFromMobile
                handleUploadIdFile={handleUploadIdFile}
                handleUploadImagePreview={handleUploadImagePreview}
                errors={errors}
              />

              <UploadFromDevice
                handleUploadIdFile={handleUploadIdFile}
                handleUploadImagePreview={handleUploadImagePreview}
                errors={errors}
              />
            </div>
            <div className="mb-2 p-4 border border-zinc-500 rounded-lg bg-zinc-900/50 ">
              <h3 className="font-medium text-zinc-300 mb-2">
                Tips for a good ID photo:
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
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
            <Button
              variant="outline"
              onClick={() => router.push(step1Endpoint)}
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
