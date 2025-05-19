import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

type Props = {
  handleUploadIdFile: (file: File) => void;
  handleUploadImagePreview?: (file: File) => void;
  errors: {
    governmentIdFile?: {
      message?: string;
    };
    profilePhoto?: {
      message?: string;
    };
  };
};

export default function UploadFromDevice({
  handleUploadIdFile,
  handleUploadImagePreview,
  errors,
}: Props) {
  return (
    <>
      <div className="flex flex-col gap-y-5 border shadow-sm bg-zinc-900/50  rounded-lg   border-zinc-800 py-5 px-10 text-center hover:bg-zinc-800 transition cursor-pointer">
        <Input
          id="governmentIdFileUpload"
          type="file"
          className="hidden"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            handleUploadIdFile(e.target.files?.[0] as File);
            if (handleUploadImagePreview) {
              handleUploadImagePreview(e.target.files?.[0] as File);
            }
          }}
        />
        <Label htmlFor="governmentIdFileUpload" className="cursor-pointer">
          <div className="flex flex-col items-center gap-y-2">
            <div
              className="
                rounded-full bg-zinc-800 border-zinc-700 border-2 hover:bg-zinc-900 mb-1 p-1 flex items-center shadow-sm shadow-black/20 justify-center"
            >
              <Upload className="w-10 h-10 text-zinc-300 p-2 " />
            </div>
            <Label
              htmlFor="governmentIdFileUpload"
              className="text-zinc-300 text-lg font-medium "
            >
              From device
            </Label>
            <ul className="text-sm font-medium text-zinc-300 ">
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
    </>
  );
}
