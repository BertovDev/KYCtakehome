import React from "react";
import { StepsProps } from "@/types/formTypes";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

export default function DetailsConfirmation({
  errors,
  onChange,
  isLoading,
  formData,
}: StepsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="competitorCategory"
          className="block text-sm font-medium mb-2"
        >
          Competitor Category
        </Label>
        <Select
          value={formData.competitorCategory}
          onValueChange={(e) => onChange("competitorCategory", e)}
          disabled={isLoading}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=" ">Select a category</SelectItem>
            <SelectItem value="amateur">Amateur</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
        {errors.competitorCategory && (
          <p className="text-red-500 text-sm mt-1">
            {errors.competitorCategory}
          </p>
        )}
      </div>

      <div className="flex items-start mt-4">
        <input
          id="termsAccepted"
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) => onChange("termsAccepted", e.target.checked)}
          className="mt-1"
          disabled={isLoading}
        />
        <label htmlFor="termsAccepted" className="ml-2 text-sm">
          I accept the terms and conditions for participating in food
          competitions
        </label>
      </div>
      {errors.termsAccepted && (
        <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>
      )}
    </div>
  );
}
