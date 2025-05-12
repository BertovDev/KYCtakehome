"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { countries } from "@/lib/countries";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/SignupStepContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DetailsConfirmationFormValues,
  detailsConfirmationSchema,
} from "@/lib/validation";
import StepButtons from "../StepButtons";
import { signUpEndpoint, step2Endpoint } from "@/app/routes";

type CountryData = {
  id: number;
  name: string;
  label: string;
};

export default function KycVerificationStep() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { data, setData, isHydrated } = useFormData();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsConfirmationFormValues>({
    defaultValues: {
      fullname: "",
      dateOfBirth: "",
      fullAddress: "",
      country: "",
      city: "",
      state: "",
      zipcode: "",
    },
    resolver: zodResolver(detailsConfirmationSchema),
  });

  useEffect(() => {
    if (!isHydrated) return;

    if (!data.email || !data.password) {
      router.push(signUpEndpoint);
    }

    reset(data);
  }, [isHydrated, data, router]);

  const onSubmit = handleSubmit(
    async (values: DetailsConfirmationFormValues) => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error) {
        console.error("Error during form submission:", error);
      } finally {
        setIsLoading(false);
        setData({ ...data, ...values });
        router.push(step2Endpoint);
      }
    }
  );

  return !isHydrated ? (
    <p className="text-black text-3xl">Loading...</p>
  ) : (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            {...register("fullname")}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullname.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            Full Address
          </label>
          <Input
            id="fullAddress"
            type="text"
            {...register("fullAddress")}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your street address"
            disabled={isLoading}
          />
          {errors.fullAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullAddress.message?.toString()}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="block text-sm font-medium mb-2">
              City
            </Label>
            <Input
              id="city"
              type="text"
              {...register("city")}
              className="w-full p-2 border rounded-md"
              placeholder="City"
              disabled={isLoading}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">
                {errors.city.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="state" className="block text-sm font-medium mb-2">
              State/Province
            </Label>
            <Input
              id="state"
              type="text"
              {...register("state")}
              className="w-full p-2 border rounded-md"
              placeholder="State/Province"
              disabled={isLoading}
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message?.toString()}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zipcode" className="block text-sm font-medium mb-2">
              Zip/Postal Code
            </Label>
            <Input
              id="zipcode"
              type="text"
              {...register("zipcode")}
              className="w-full p-2 border rounded-md"
              placeholder="Zip/Postal Code"
              disabled={isLoading}
            />
            {errors.zipcode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zipcode.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="country" className="block text-sm font-medium mb-2">
              Country
            </Label>

            <Select
              onValueChange={(value) => {
                setValue("country", value);
              }}
              {...register("country")}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder={data.country || "Select a country"} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country: CountryData) => {
                  return (
                    <SelectItem value={country.name} key={country.id}>
                      {country.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message?.toString()}
              </p>
            )}
          </div>
        </div>

        <div>
          {" "}
          <Label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium mb-2"
          >
            Date of Birth
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            max={new Date().toISOString().split("T")[0]}
            {...register("dateOfBirth")}
            className="w-full p-2 border rounded-md"
            disabled={isLoading}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateOfBirth.message?.toString()}
            </p>
          )}
        </div>
        <StepButtons isLoading={isLoading} />
      </form>
    </>
  );
}
