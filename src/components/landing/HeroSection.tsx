import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 ">
      <div className="flex flex-col justify-center space-y-6">
        <div className="flex flex-row space-x-5 justify-center md:justify-normal md:flex-col text-4xl sm:text-5xl md:text-7xl font-bold  text-gray-900">
          <h1>Spin</h1>
          <h1>Swap</h1>
          <h1>Connect.</h1>
        </div>

        <p className="text-gray-600 max-w-md">
          Discover a new way to trade vinyls. Connect with collectors, exchange
          records, and manage your music and money — all in one place.
        </p>

        <div className="flex items-center space-x-4 pt-4 border-b pb-5 border-gray-400 rounded-lg">
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
            <Link href="/signup">Join the Community</Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full p-3 border border-gray-400"
          >
            <Link href="/signup">
              <Play className="h-5 w-5 text-gray-700" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 pt-5 ">
          <div className="flex items-center justify-between">
            Trusted Swaps with Real Music Lovers
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="border-2 border-white">
                  <AvatarImage src={`/profilePlaceholder.png`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 md:mt-0">
        <div className="relative h-[600px] md:h-[600px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full bottom-10 ">
              <Image
                src="/images/heroImage.png"
                alt="Hero Image"
                width={600}
                height={600}
                className="object-contain rounded-full"
              />

              <div className="absolute md:-bottom-7 bottom-40 left-5 flex justify-center items-center flex-col right-0 bg-[#F1F2ED] shadow-lg backdrop-blur-xl p-5 rounded-full ">
                <h3 className="font-bold text-lg">
                  Built-in Wallet for Secure Transactions
                </h3>
                <p className="text-sm text-gray-600">
                  Virtual Vinyl Storage to Manage Your Collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
