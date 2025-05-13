"use client";

import { useFormData } from "@/context/SignupStepContext";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, File, Mail, User, X } from "lucide-react";
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
    <form onSubmit={handleSubmit(submitData)} className="space-y-8 p-5 my-2">
      <div className="grid gap-6">
        <Card className=" bg-gray-50">
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-x-2">
                <Mail className="h-5 w-5 text-gray-600" />
                Account Information
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="start gap-x-5 px-6 pb-5">
            <div className="flex justify-between py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">Email</span>
              <span className="text-sm text-black font-medium">
                {data.email}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className=" bg-gray-50">
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-x-2">
                <User className="h-5 w-5 text-gray-600" />
                Personal Information
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-x-5 gap-y-1 px-6 pb-5">
            <div className="flex justify-between gap-x-5 py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">
                Full Name
              </span>
              <span className="text-sm text-black font-medium">
                {data.fullname}
              </span>
            </div>
            <div className="flex justify-between gap-x-5 py-2 border-b border-gray-200 rounded-md ">
              <span className="text-sm font-medium text-gray-600">
                Date of Birth
              </span>
              <span className="text-sm text-black font-medium">
                {data.dateOfBirth}
              </span>
            </div>
            <div className="flex justify-between gap-x-5 py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">Address</span>
              <span className="text-sm text-black font-medium">
                {data.fullAddress}
              </span>
            </div>
            <div className="flex justify-between   gap-x-5 py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">City</span>
              <span className="text-sm text-black font-medium">
                {data.city}
              </span>
            </div>
            <div className="flex justify-between   gap-x-5 py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">State</span>
              <span className="text-sm text-black font-medium">
                {data.state}
              </span>
            </div>
            <div className="flex justify-between   gap-x-5 py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">
                ZIP Code
              </span>
              <span className="text-sm text-black font-medium ">
                {data.zipcode}
              </span>
            </div>
            <div className="flex justify-between gap-x-5 py-2 border-b border-gray-200 rounded-md ">
              <span className="text-sm font-medium text-gray-600">Country</span>
              <span className="text-sm text-black font-medium">
                {data.country}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className=" bg-gray-50 pb-5">
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-x-2">
                <File className="h-5 w-5 text-gray-600" />
                Uploaded Documents
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="start gap-x-5 px-6 ">
            <div className="flex justify-between py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">
                Government ID
              </span>
              <div className="flex items-start gap-x-5">
                {data.governmentIdString ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm text-black font-medium">
                  {data.governmentIdString ? "Uploaded" : "Not Uploaded"}
                </span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 rounded-md">
              <span className="text-sm font-medium text-gray-600">
                Profile Photo
              </span>
              <div className="flex items-start gap-x-5">
                {data.profilePhoto ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm text-black font-medium">
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
