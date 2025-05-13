import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

type Props = {
  setStart: (start: boolean) => void;
};

export default function SignUpModal({ setStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
    >
      <div className="relative bg-gray-50 flex items-center flex-col gap-y-7   rounded-lg shadow-sm ">
        <div className="absolute top-5 right-5">
          <Button variant="ghost" onClick={() => setStart(false)}>
            <X className="h-5 w-5 text-black" />
          </Button>
        </div>
        <div className="flex flex-row items-center h-full">
          <Image
            src="/images/image2.png"
            alt="start"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="flex flex-col px-10 py-5 h-full space-y-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold">Sign Up now!</h2>
              <p className="text-gray-600 text-lg max-w-md">
                Discover a new way to trade vinyls. Connect with collectors,
                exchange records, and manage your music and money — all in one
                place.
              </p>
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
