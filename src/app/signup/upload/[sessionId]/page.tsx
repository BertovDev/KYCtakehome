"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import UploadFromDevice from "@/components/signup/steps/fileUploadStep/uploadOptions/UploadFromDevice";
import { Check } from "lucide-react";

export default function UploadPage() {
  const [isComplete, setIsComplete] = useState(false);
  const { sessionId } = useParams();

  const handleUpload = async (file: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sessionId", sessionId || "");

    await fetch(`/api/upload`, {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        console.log(data.json());
        if (data.status === 200) {
          console.log("File uploaded successfully");
          setIsComplete(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isComplete ? (
        <div className="flex flex-row items-center justify-center">
          <h3 className="text-gray-50 text-2xl">File uploaded successfully</h3>
          <Check className="w-10 h-10 text-green-400 p-2 " />
        </div>
      ) : (
        <UploadFromDevice
          handleUploadIdFile={(e) => handleUpload(e)}
          errors={{}}
          handleUploadImagePreview={(e) => handleUpload(e)}
        />
      )}
    </>
  );
}
