import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import qrcode from "qrcode";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  setIsModalOpen: (open: boolean) => void;
};

export default function ConnectMobileComponent({ setIsModalOpen }: Props) {
  const [sessionId, setSessionId] = useState("");
  const [qr, setQr] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const id = uuidv4();
    setSessionId(id);

    const generateQrCode = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/mobile/${sessionId}`;
      const qrCode = await qrcode.toDataURL(url);
      setQr(qrCode);
    };

    generateQrCode();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="relative bg-gray-50 flex items-center flex-col gap-y-5 p-5 rounded-lg shadow-sm ">
        <Button
          onClick={() => {
            setIsModalOpen(false);
          }}
          variant="ghost"
          className=" text-red-500 hover:text-red-600 bg-white rounded-full p-1"
        >
          <X />
        </Button>

        <h2>Scan the QR to open in your mobile app</h2>
        {qr && <Image src={qr} alt="QR Code" width={200} height={200} />}
      </div>
    </div>
  );
}
