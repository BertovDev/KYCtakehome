import React from "react";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import ConnectMobileComponent from "./ConnectMobileComponent";

type Props = {
  handleUploadIdFile: (file: File) => void;
  handleUploadImagePreview: (file: File, sessionId?: string) => void;
  errors: {
    governmentIdFile?: {
      message?: string;
    };
    profilePhoto?: {
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
          setIsModalOpen(true);
        }}
        className="flex flex-col gap-y-5 border bg-zinc-900/50 backdrop-blur-sm rounded-lg shadow-sm border-zinc-800 py-5 px-10 text-center hover:bg-zinc-800 transition cursor-pointer"
      >
        <Label htmlFor="governmentIdFileCamera" className="cursor-pointer">
          <div className="flex flex-col items-center gap-y-2 ">
            <div
              className="
                rounded-full bg-zinc-800 border-zinc-700 border-2 hover:bg-zinc-900 mb-1 p-1  flex items-center shadow-sm shadow-black/20 justify-center"
            >
              <Camera className="w-10 h-10 text-zinc-300  p-2 " />
            </div>
            <Label
              htmlFor="governmentIdFileCamera"
              className="text-zinc-300 text-lg font-medium "
            >
              Use Your Phone
            </Label>
            <ul className="text-sm font-medium text-zinc-300 ">
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
