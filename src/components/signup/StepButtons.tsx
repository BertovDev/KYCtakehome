import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function StepButtons({}: Props) {
  const handleNext = () => {
    console.log("Next");
    // setStep(currentStep + 1);
  };

  const handleBack = () => {
    // setStep(currentStep - 1);
  };

  return (
    <div className="flex justify-between mt-9">
      <Button variant="outline" onClick={handleBack} disabled={false}>
        Back
      </Button>
      <Button type="submit" onClick={handleNext} disabled={false}>
        {false ? (
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
            {false ? "Complete Setup" : "Continue"}
            {false && <ChevronRight className="ml-2 h-4 w-4" />}
          </>
        )}
      </Button>
    </div>
  );
}
