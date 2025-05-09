import React from "react";
import { StepsProps } from "@/types/formTypes";
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

type CountryData = {
  id: number;
  name: string;
  label: string;
};

export default function KycVerificationStep({
  errors,
  onChange,
  formData,
  isLoading,
}: StepsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullAddress" className="block text-sm font-medium mb-2">
          Full Address
        </label>
        <Input
          id="fullAddress"
          type="text"
          value={formData.fullAddress}
          onChange={(e) => onChange("fullAddress", e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your street address"
          disabled={isLoading}
        />
        {errors.fullAddress && (
          <p className="text-red-500 text-sm mt-1">{errors.fullAddress}</p>
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
            value={formData.city}
            onChange={(e) => onChange("city", e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="City"
            disabled={isLoading}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <Label htmlFor="state" className="block text-sm font-medium mb-2">
            State/Province
          </Label>
          <Input
            id="state"
            type="text"
            value={formData.state}
            onChange={(e) => onChange("state", e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="State/Province"
            disabled={isLoading}
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="zipCode" className="block text-sm font-medium mb-2">
            Zip/Postal Code
          </Label>
          <Input
            id="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => onChange("zipCode", e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Zip/Postal Code"
            disabled={isLoading}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
          )}
        </div>
        <div>
          <Label htmlFor="country" className="block text-sm font-medium mb-2">
            Country
          </Label>

          <Select
            onValueChange={(e) => onChange("country", e)}
            defaultValue={formData.country}
            disabled={isLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
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
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">
          Date of Birth
        </Label>
        <Input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => onChange("dateOfBirth", e.target.value)}
          className="w-full p-2 border rounded-md"
          disabled={isLoading}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="governmentIdFile"
          className="block text-sm font-medium mb-2"
        >
          Upload Government ID
        </Label>
        <Input
          id="governmentIdFile"
          type="file"
          accept="image/*,.pdf"
          onChange={(e) =>
            onChange("governmentIdFile", e.target.files?.[0] || null)
          }
          className="w-full p-2 border rounded-md"
          disabled={isLoading}
        />
        {errors.governmentIdFile && (
          <p className="text-red-500 text-sm mt-1">{errors.governmentIdFile}</p>
        )}
      </div>
    </div>
  );
}
