import React from "react";
import { StepsProps } from "@/types/formTypes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PasswordCreationStep({
  formData,
  onChange,
  isLoading,
  errors,
}: StepsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Create a password"
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        <Label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-2"
        >
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Confirm your password"
          disabled={isLoading}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
}
