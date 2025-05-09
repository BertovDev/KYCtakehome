import React from "react";
import { StepsProps } from "@/types/formTypes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function AccountCreationStep({
  formData,
  onChange,
  isLoading,
  errors,
}: StepsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your full name"
          disabled={isLoading}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your email address"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="profilePhoto"
          className="block text-sm font-medium mb-2"
        >
          Profile Photo (Optional)
        </Label>
        <Input
          id="profilePhoto"
          type="file"
          accept="image/*"
          onChange={(e) =>
            onChange("profilePhoto", e.target.files?.[0] || null)
          }
          className="w-full p-2 border rounded-md"
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
