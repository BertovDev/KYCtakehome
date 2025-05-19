import React from "react";
import Image from "next/image";
import { Check, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type imagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

type Props = {
  setCurrentStep: (step: "id" | "photo" | "review") => void;
  imagePreview: imagePreviewType;
  isLoading: boolean;
};

export default function ReviewFIlesStep({
  setCurrentStep,
  imagePreview,
  isLoading,
}: Props) {
  return (
    <div className="flex flex-col items-center py-5 px-4 md:px-6 max-w-2xl mx-auto text-center animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-300 mb-4">
        Files Review
      </h1>
      <p className="text-zinc-300 mb-1">
        Please review the files you have uploaded. If you are satisfied with the
        files, click the "Continue" button to proceed to the next step.
      </p>

      <div className=" backdrop-blur-sm rounded-xl shadow-sm p-6 w-full">
        <h2 className="text-lg font-semibold text-zinc-300 mb-4">
          File Summary
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <h3 className="font-medium text-zinc-300 ">ID Document</h3>
              <Check className="w-5 h-5 ml-2 text-green-600" />
            </div>
            {imagePreview.idImage && (
              <div className="relative w-full h-32 bg-zinc-800 rounded-lg overflow-hidden">
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

          <div className="flex-1 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-2">
              <h3 className="font-medium text-zinc-300 ">Selfie</h3>
              <Check className="w-5 h-5 ml-2 text-green-600" />
            </div>
            {imagePreview.photoImage && (
              <div className="relative w-full h-32 bg-zinc-800 rounded-lg overflow-hidden">
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

        <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm mb-4">
          <h3 className="font-medium text-zinc-300 mb-2">What happens next?</h3>
          <ol className="space-y-2 text-sm text-zinc-300 list-decimal pl-5">
            <li>Our verification team will review your submitted documents</li>
            <li>You'll receive a notification when the review is complete</li>
            <li>If approved, you'll gain full access to your account</li>
            <li>If we need additional information, we'll contact you</li>
          </ol>
        </div>

        <p className="text-sm text-zinc-300">
          Review typically takes 1-2 business days. You'll receive an email
          notification once completed.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto mt-5">
        <Button
          onClick={() => setCurrentStep("id")}
          className="cursor-pointer flex-1 py-5 px-6 bg-white shadow-md text-blue-600 font-medium rounded-2xl border border-blue-200 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center hover:text-primary"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Restart Verification
        </Button>

        <Button
          className="bg-gradient-to-r flex-1  from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group"
          type="submit"
          disabled={isLoading}
        >
          <div>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
            <span className="relative z-10 flex items-center">
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  {isLoading ? "Processing..." : "Continue"}
                  {isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
                </>
              )}
            </span>
          </div>
        </Button>

        {/* <Button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer flex-1 py-5 px-6 bg-blue-600 text-white font-medium rounded-2xl hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            <>
              {isLoading ? "Processing..." : "Continue"}
              {isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
            </>
          )}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button> */}
      </div>
    </div>
  );
}
