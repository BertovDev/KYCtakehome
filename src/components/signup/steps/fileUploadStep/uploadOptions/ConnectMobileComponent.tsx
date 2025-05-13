import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import qrcode from "qrcode";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  setIsModalOpen: (open: boolean) => void;
  handleUploadImagePreview: (file: File, sessionId?: string) => void;
  handleUploadIdFile: (file: File) => void;
  errors: {
    governmentIdFile?: {
      message?: string;
    };
  };
};

export default function ConnectMobileComponent({
  setIsModalOpen,
  handleUploadIdFile,
  handleUploadImagePreview,
  errors,
}: Props) {
  const [sessionId, setSessionId] = useState("");
  const [qr, setQr] = useState("");

  useEffect(() => {
    const id = uuidv4();
    setSessionId(id);

    const generateQrCode = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/signup/upload/${id}`;
      const qrCode = await qrcode.toDataURL(url);

      setQr(qrCode);
    };

    generateQrCode();
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    const interval = setInterval(async () => {
      try {
        const status = await fetch(
          `/api/session/status?sessionId=${sessionId}`
        );
        const { active } = await status.json();

        console.log(active, sessionId);

        if (!active) {
          const file = await fetch(`/api/upload?sessionId=${sessionId}`);
          const fileData = await file.json();

          if (fileData.name !== undefined) {
            clearInterval(interval);
            const newFile = new File([], fileData.name, {
              type: fileData.type,
            });
            handleUploadImagePreview(newFile, sessionId);
            handleUploadIdFile(newFile);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [sessionId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
    >
      <div className="relative bg-gray-50 flex items-center flex-col gap-y-7 p-5 py-7  rounded-lg shadow-sm ">
        <h2 className="text-xl font-semibold">
          Scan the QR to open in your mobile app
        </h2>

        {qr && <Image src={qr} alt="QR Code" width={200} height={200} />}
        <Button
          onClick={() => {
            setIsModalOpen(false);
          }}
          variant="ghost"
          className=" text-red-500 hover:bg-red-400 hover:text-gray-50 bg-white rounded-full p-4 w-full"
        >
          Back
        </Button>
        {errors.governmentIdFile && (
          <p className="text-red-500 text-sm mt-1">
            {errors.governmentIdFile.message?.toString()}
          </p>
        )}
      </div>
    </motion.div>
  );
}
