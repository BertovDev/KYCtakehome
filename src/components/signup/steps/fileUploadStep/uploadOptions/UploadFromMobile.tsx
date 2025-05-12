import React from "react";
import { Label } from "@/components/ui/label";
import { Camera, X } from "lucide-react";
import ConnectMobileComponent from "./ConnectMobileComponent";

type Props = {
  handleUploadIdFile: (file: File) => void;
  handleUploadImagePreview: (file: File, sessionId?: string) => void;
  errors: {
    governmentIdFile?: {
      message?: string;
    };
  };
};

export default function UploadFromMobile({
  handleUploadIdFile,
  handleUploadImagePreview,
  errors,
}: Props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => {
          console.log("click");
          setIsModalOpen(true);
        }}
        className="flex flex-col gap-y-5 border bg-gray-50  rounded-lg shadow-sm border-gray-200 py-5 px-10 text-center hover:bg-gray-100 transition cursor-pointer"
      >
        <Label htmlFor="governmentIdFileCamera" className="cursor-pointer">
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

      {isModalOpen && (
        <ConnectMobileComponent
          handleUploadIdFile={handleUploadIdFile}
          handleUploadImagePreview={handleUploadImagePreview}
          errors={errors}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
