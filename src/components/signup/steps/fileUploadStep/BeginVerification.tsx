import React from "react";

export default function BeginVerification() {
  return (
    <div className="absolute top-0 left-0 z-100 bg-gray-50 w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Begin Verification</h2>
        <p className="text-gray-600 mb-4">
          Please follow the instructions to complete your verification.
        </p>
      </div>
    </div>
  );
}
