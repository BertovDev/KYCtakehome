import { Check } from "lucide-react";
import useStep from "../../hooks/useStep";
import React from "react";
import steps from "@/lib/signUpSteps";

type Props = {
  isComplete: boolean;
};

export default function StepsCounter({ isComplete }: Props) {
  const { currentStep } = useStep();

  return (
    <div className="">
      <div className="flex items-center  justify-center gap-x-5">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="relative">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index + 1 <= currentStep || isComplete
                    ? "bg-primary border-primary  text-primary-foreground"
                    : "bg-blue-50"
                }
                  
                    ${currentStep === index ? "border-blue-500 border-2" : " border-none"}
                  `}
              >
                {index + 1 <= currentStep || isComplete ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-0.5 mx-1 ${index + 1 <= currentStep ? "bg-primary" : "bg-gray-300"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
