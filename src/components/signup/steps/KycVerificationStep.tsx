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
import { signUpEndpoint, step2Endpoint } from "@/lib/routes";
import { motion } from "framer-motion";

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
        setIsLoading(false);
        setData({ ...data, ...values });
        router.push(step2Endpoint);
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    }
  );

  return !isHydrated ? (
    <div className="flex items-center justify-center text-zinc-300">
      Loading...
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex  flex-col w-full  px-10 justify-around rounded-lg p-8 space-y-5"
    >
      <h1 className="text-2xl font-bold mb-2 text-zinc-300">
        Enter your details
      </h1>

      <form
        onSubmit={onSubmit}
        className=" my-2 flex  flex-col justify-between"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.fullname.message?.toString()}
              </motion.p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-2 text-zinc-300"
            >
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.fullAddress.message?.toString()}
              </motion.p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="city"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.city.message?.toString()}
                </motion.p>
              )}
            </div>
            <div>
              <Label
                htmlFor="state"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.state.message?.toString()}
                </motion.p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="zipcode"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.zipcode.message?.toString()}
                </motion.p>
              )}
            </div>
            <div>
              <Label
                htmlFor="country"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
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
                  <SelectValue
                    className="text-white"
                    placeholder={data.country || "Select a country"}
                  />
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.country.message?.toString()}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            {" "}
            <Label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium mb-2 text-zinc-300"
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.dateOfBirth.message?.toString()}
              </motion.p>
            )}
          </div>
        </div>
        <StepButtons isLoading={isLoading} />
      </form>
    </motion.div>
  );
}
