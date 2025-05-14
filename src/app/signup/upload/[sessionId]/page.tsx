"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import UploadFromDevice from "@/components/signup/steps/fileUploadStep/uploadOptions/UploadFromDevice";
import { CheckCircle } from "lucide-react";

export default function UploadPage() {
  const [isComplete, setIsComplete] = useState(false);
  const [erorrs, setErrors] = useState({});
  const { sessionId } = useParams();

  const handleUpload = async (file: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sessionId", (sessionId as string) || "");

    await fetch(`/api/upload`, {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        if (data.status === 200) {
          setIsComplete(true);
        }
      })
      .catch((err) => {
        setErrors(err.message);
      });
  };

  return (
    <>
      {isComplete ? (
        <div className="flex flex-col py-5 items-center justify-center gap-y-5 border-9 ">
          <h3 className="text-black text-2xl">File uploaded successfully</h3>
          <CheckCircle className="w-52 h-52 text-blue-400 p-2 " />
        </div>
      ) : (
        <UploadFromDevice
          handleUploadIdFile={(e) => handleUpload(e)}
          errors={erorrs}
        />
      )}
    </>
  );
}
