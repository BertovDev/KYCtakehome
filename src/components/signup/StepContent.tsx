"use client";

import React from "react";
import { FormData } from "@/types/formTypes";

import AccountCreationStep from "./steps/AccountCreationStep";
import PasswordCreationStep from "./steps/PasswordCreationStep";
import KycVerificationStep from "./steps/KycVerificationStep";
import DetailsConfirmation from "./steps/DetailsConfirmation";

interface StepContentProps {
  step: number;
  formData: FormData;
  errors: Record<string, string>;
  onChange: (field: keyof FormData, value: any) => void;
  isLoading?: boolean;
}

const StepContent = ({
  step,
  formData,
  errors,
  onChange,
  isLoading = false,
}: StepContentProps) => {
  if (step === 1) {
    return (
      <AccountCreationStep
        formData={formData}
        onChange={onChange}
        errors={errors}
        isLoading={isLoading}
      />
    );
  } else if (step === 2) {
    return (
      <PasswordCreationStep
        errors={errors}
        onChange={onChange}
        formData={formData}
        isLoading={isLoading}
      />
    );
  } else if (step === 3) {
    return (
      <KycVerificationStep
        errors={errors}
        onChange={onChange}
        isLoading={isLoading}
        formData={formData}
      />
    );
  } else if (step === 4) {
    return (
      <DetailsConfirmation
        errors={errors}
        onChange={onChange}
        isLoading={isLoading}
        formData={formData}
      />
    );
  }

  return null;
};

export default StepContent;
