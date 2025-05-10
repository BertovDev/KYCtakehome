"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import WalletInitialization from "./WalletInitialization";

import { FormData } from "@/types/formTypes";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import { SignUpFormValues } from "@/lib/validation";

const steps = [
  { id: 1, name: "Personal Information" },
  { id: 2, name: "Account Creation" },
  { id: 3, name: "KYC Verification" },
  { id: 4, name: "DetailConfirmation" },
];

const mockErrorData = {
  country: "Uruguay",
  email: "alreadytaken@gmail.com",
};

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    profilePhoto: null,
    password: "",
    confirmPassword: "",
    fullAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    dateOfBirth: "",
    governmentIdFile: null,
    competitorCategory: "",
    termsAccepted: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorsRecord, setErrors] = useState<Record<string, string>>({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      } else if (
        formData.email.toLowerCase() === mockErrorData.email.toLowerCase()
      ) {
        newErrors.email = "Email is already taken";
      }
      // Profile photo is optional, so no validation needed
    } else if (step === 2) {
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    } else if (step === 3) {
      if (!formData.fullAddress.trim()) {
        newErrors.fullAddress = "Address is required";
      }
      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }
      if (!formData.state.trim()) {
        newErrors.state = "State/Province is required";
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = "Zip/Postal code is required";
      }
      if (!formData.country.trim()) {
        newErrors.country = "Country is required";
      } else if (
        formData.country.toLowerCase() === mockErrorData.country.toLowerCase()
      ) {
        newErrors.country = "This country is not supported";
      }
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = "Date of birth is required";
      } else {
        const birthDate = new Date(formData.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
          newErrors.dateOfBirth = "You must be at least 18 years old";
        }
      }

      if (!formData.governmentIdFile) {
        newErrors.governmentIdFile =
          "Please upload a copy of your government ID";
      }
    } else if (step === 4) {
      if (!formData.competitorCategory) {
        newErrors.competitorCategory = "Please select a competitor category";
      }
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = "You must accept the terms to continue";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        // If we're on the email step, check for already taken email
        if (
          currentStep === 1 &&
          formData.email.toLowerCase() === mockErrorData.email.toLowerCase() // Buscar si el correo ya esta registrado
        ) {
          return; // Error is already set in validateStep
        }

        if (currentStep === 3) {
          console.log(formData);
        }

        // If we're on the KYC step, check for unsupported country
        if (
          currentStep === 3 &&
          formData.country.toLowerCase() === mockErrorData.country.toLowerCase()
        ) {
          // Buscar si el pais no se encunetra en nuestros paises disponibles
          return; // Error is already set in validateStep
        }

        // Simulate API call with loading state
        setIsLoading(true);

        try {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Move to next step
          setCurrentStep(currentStep + 1);
        } catch (error) {
          console.error("Error during form submission:", error);
          // Handle general error
          setErrors((prev) => ({
            ...prev,
            general: "An unexpected error occurred. Please try again.",
          }));
        } finally {
          setIsLoading(false);
        }
      } else {
        // Final step - complete signup
        setIsLoading(true);

        try {
          // Simulate final API call
          await new Promise((resolve) => setTimeout(resolve, 200));

          // All steps completed
          setIsComplete(true);
        } catch (error) {
          console.error("Error during final submission:", error);
          setErrors((prev) => ({
            ...prev,
            general: "Failed to complete signup. Please try again.",
          }));
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear error for this field when user starts typing
    if (errorsRecord[field]) {
      setErrors({
        ...errorsRecord,
        [field]: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] w-full max-w-3xl mx-auto bg-background">
      <Card className="w-full shadow-lg border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center">
            {isComplete ? "Wallet Setup Complete" : "Food Competition Signup"}
          </CardTitle>

          {!isComplete && (
            <div className="mt-6">
              <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="relative">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          currentStep >= step.id
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-gray-300 text-gray-500"
                        }`}
                      >
                        {currentStep > step.id ? (
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
                        className={`w-16 h-0.5 mx-1 ${currentStep > index + 1 ? "bg-primary" : "bg-gray-300"}`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="pt-8">
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WalletInitialization
                userName={formData.name}
                startingPoints={100}
                onComplete={() =>
                  console.log("Wallet setup complete", formData)
                }
              />
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {errorsRecord.general && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-500 text-sm">{errorsRecord.general}</p>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  Back
                </Button>

                <Button onClick={handleNext} disabled={isLoading}>
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
                      {currentStep === steps.length
                        ? "Complete Setup"
                        : "Continue"}
                      {currentStep !== steps.length && (
                        <ChevronRight className="ml-2 h-4 w-4" />
                      )}
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
