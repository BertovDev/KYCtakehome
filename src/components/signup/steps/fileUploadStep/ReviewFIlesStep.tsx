import React from "react";
import Image from "next/image";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { Button } from "@radix-ui/themes";

type imagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  setCurrentStep: (step: "id" | "photo" | "review") => void;
  imagePreview: imagePreviewType;
};

export default function ReviewFIlesStep({
  setCurrentStep,
  imagePreview,
}: Props) {
  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-6 max-w-2xl mx-auto text-center animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Files Review
      </h1>
      <p className="text-gray-600 mb-1">
        Please review the files you have uploaded. If you are satisfied with the
        files, click the "Continue" button to proceed to the next step.
      </p>

      <div className="bg-white rounded-xl shadow-sm p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          File Summary
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center mb-2">
              <h3 className="font-medium text-gray-800 ">ID Document</h3>
              <Check className="w-5 h-5 ml-2 text-green-600" />
            </div>
            {imagePreview.idImage && (
              <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={imagePreview.idImage}
                  alt="ID Document"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            )}
          </div>

          <div className="flex-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center mb-2">
              <h3 className="font-medium text-gray-800 ">Selfie</h3>
              <Check className="w-5 h-5 ml-2 text-green-600" />
            </div>
            {imagePreview.photoImage && (
              <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={imagePreview.photoImage}
                  alt="Selfie"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-blue-50 mb-4">
          <h3 className="font-medium text-gray-800 mb-2">What happens next?</h3>
          <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-5">
            <li>Our verification team will review your submitted documents</li>
            <li>You'll receive a notification when the review is complete</li>
            <li>If approved, you'll gain full access to your account</li>
            <li>If we need additional information, we'll contact you</li>
          </ol>
        </div>

        <p className="text-sm text-gray-500">
          Review typically takes 1-2 business days. You'll receive an email
          notification once completed.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
        <Button
          onClick={() => setCurrentStep("id")}
          className="cursor-pointer flex-1 py-5 px-6 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Restart Verification
        </Button>
        <Button
          type="submit"
          className="cursor-pointer flex-1 py-5 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
