"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import UploadFromDevice from "@/components/signup/steps/fileUploadStep/uploadOptions/UploadFromDevice";
import { Check } from "lucide-react";

export default function UploadPage() {
  const [isComplete, setIsComplete] = useState(false);
  const { sessionId } = useParams() as { sessionId: string };

  const handleUpload = async (file: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sessionId", sessionId || "");

    await fetch(`/api/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        console.log(res);

        if (res.status === 200) {
          console.log("File uploaded successfully");
          setIsComplete(true);
        } else {
          console.error("Upload failed", json);
        }
      })
      .catch((err) => {
        console.error("Request failed", err);
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
          handleUploadIdFile={handleUpload}
          errors={{}}
          // handleUploadImagePreview={handleUpload}
        />
      )}
    </>
  );
}
