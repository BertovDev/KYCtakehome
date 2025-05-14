"use client";

import { useForm } from "react-hook-form";
import { KycFormValues, kycSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/SignupStepContext";
import { useEffect, useState } from "react";
import {
  simulateBackendFilePersistance,
  simulateBackendFilePersistancePhoto,
} from "@/lib/utils";
import { step1Endpoint, step3Endpoint } from "@/lib/routes";
import IdVerificationStep from "./IdVerificationStep";
import PhotoVerificationStep from "./PhotoVerificationStep";
import ReviewFIlesStep from "./ReviewFIlesStep";
import {
  ToastViewport,
  ToastProvider,
  ToastDescription,
  ToastTitle,
  Toast,
} from "@/components/ui/toast";
import { Check } from "lucide-react";

type ImagePreviewType = {
  idImage: string | null;
  photoImage: string | null;
};

export default function FileUploadStep() {
  const router = useRouter();
  const { data, setData, isHydrated } = useFormData();
  const [currentStep, setCurrentStep] = useState<"id" | "photo" | "review">(
    "id"
  );
  const [imagePreview, setImagePreview] = useState<ImagePreviewType>({
    idImage: null,
    photoImage: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    state: false,
    id: "",
  });

  const {
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KycFormValues>({
    defaultValues: {
      governmentIdFile: undefined,
      profilePhoto: undefined,
    },
    resolver: zodResolver(kycSchema),
  });

  useEffect(() => {
    if (!isHydrated) return;

    if (
      !data.fullAddress ||
      !data.country ||
      !data.city ||
      !data.state ||
      !data.zipcode ||
      !data.fullname ||
      !data.dateOfBirth
    ) {
      router.push(step1Endpoint);
    }

    // Create file from string to simulate File persistence
    const files = simulateBackendFilePersistance(data);
    const filesPhoto = simulateBackendFilePersistancePhoto(data);

    data.governmentIdFile = files;
    data.profilePhoto = filesPhoto;

    if (files && filesPhoto) {
      reset({
        governmentIdFile: files,
        profilePhoto: filesPhoto,
      });
    }

    if (data.governmentIdFile && data.profilePhoto) {
      setCurrentStep("review");
    }
  }, [isHydrated, data, router]);

  const onSubmit = handleSubmit(async (values: KycFormValues) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      setIsLoading(false);
      setData({
        ...data,
        ...values,
        governmentIdString: {
          name: values.governmentIdFile?.name,
          type: values.governmentIdFile?.type,
        },
        profilePhotoString: {
          name: values.profilePhoto?.name,
          type: values.profilePhoto?.type,
        },
      });

      router.push(step3Endpoint);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  });

  const handleIdUpload = (file: File) => {
    if (file) {
      setValue("governmentIdFile", file, {
        shouldValidate: true,
      });
    }
  };

  const handlePhotoUpload = (file: File) => {
    if (file) {
      setValue("profilePhoto", file, {
        shouldValidate: true,
      });
    }
  };

  return !isHydrated ? (
    <p className="text-black text-3xl">Loading...</p>
  ) : (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        {currentStep === "id" ? (
          <IdVerificationStep
            setCurrentStep={setCurrentStep}
            handleUploadIdFile={handleIdUpload}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            errors={errors}
            setShowToast={setShowToast}
          />
        ) : currentStep === "photo" ? (
          <PhotoVerificationStep
            handlePhotoUpload={handlePhotoUpload}
            setCurrentStep={setCurrentStep}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            errors={errors}
            setShowToast={setShowToast}
          />
        ) : (
          <ReviewFIlesStep
            setCurrentStep={setCurrentStep}
            imagePreview={imagePreview}
            isLoading={isLoading}
          />
        )}
      </form>
      {showToast.state && (
        <ToastProvider duration={1500} swipeDirection="up">
          <Toast
            onAnimationEnd={(e) => {
              if (e.animationName === "exit") {
                setShowToast({
                  state: false,
                  id: "",
                });
              }
            }}
            variant="default"
            className="bg-white"
          >
            <ToastTitle>
              {showToast.id === "id" ? "ID" : "Photo"} File uploaded
              successfully
            </ToastTitle>
            <ToastDescription asChild>
              <Check className="w-8 h-8 text-green-500" />
            </ToastDescription>
          </Toast>
          <ToastViewport className="ToastViewport" />
        </ToastProvider>
      )}
    </>
  );
}
