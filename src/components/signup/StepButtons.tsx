import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import useStep from "../../hooks/useStep";
import { signUpEndpoint } from "@/lib/routes";

type Props = {
  isLoading: boolean;
};

export default function StepButtons({ isLoading }: Props) {
  const path = usePathname();
  const router = useRouter();
  const { currentStep } = useStep();

  console.log(currentStep);

  const handleBack = () => {
    const step = currentStep;
    const newUrl = path.replace(
      path.split("/").pop() || "",
      "step-" + step.toString()
    );

    router.push(step === 0 ? signUpEndpoint : newUrl);
  };

  return (
    <div className="flex justify-between mt-9 gap-x-4">
      {currentStep >= 0 && (
        <Button type="button" variant="outline" onClick={handleBack}>
          Back
        </Button>
      )}

      <Button
        className="bg-gradient-to-r w-full from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group"
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

      {/* <Button type="submit" disabled={isLoading}>
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
      </Button> */}
    </div>
  );
}
