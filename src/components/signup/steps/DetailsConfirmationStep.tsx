"use client";

import { useFormData } from "@/context/SignupStepContext";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepButtons from "../StepButtons";
import { walletInitEndpoint } from "@/app/routes";

export default function DetailsConfirmationStep() {
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useFormData();
  const { handleSubmit } = useForm({
    defaultValues: data,
  });

  const router = useRouter();

  const submitData = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setIsLoading(false);
      router.push(walletInitEndpoint);
      console.log("submitData");
      console.log(data);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitData)} className="space-y-6">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Email</span>
              <span className="text-sm text-gray-600">{data.email}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Full Name</span>
              <span className="text-sm text-gray-600">{data.fullname}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Date of Birth</span>
              <span className="text-sm text-gray-600">{data.dateOfBirth}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Address</span>
              <span className="text-sm text-gray-600">{data.fullAddress}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">City</span>
              <span className="text-sm text-gray-600">{data.city}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">State</span>
              <span className="text-sm text-gray-600">{data.state}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">ZIP Code</span>
              <span className="text-sm text-gray-600">{data.zipcode}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Country</span>
              <span className="text-sm text-gray-600">{data.country}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Government ID</span>
              <div className="flex items-center gap-2">
                {data.governmentIdString ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm text-gray-600">
                  {data.governmentIdString ? "Uploaded" : "Not Uploaded"}
                </span>
              </div>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm font-medium">Profile Photo</span>
              <div className="flex items-center gap-2">
                {data.profilePhoto ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm text-gray-600">
                  {data.profilePhoto ? "Uploaded" : "Not Uploaded"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <StepButtons isLoading={isLoading} />
    </form>
  );
}
