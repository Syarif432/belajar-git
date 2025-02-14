import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="lg:relative w-full mx-auto">
      <Image
        src="/banner.webp"
        alt="banner"
        width={900}
        height={400}
        className="hidden md:block w-full h-auto object-cover"
      />
      <Image
        src="/single-banner.webp"
        alt="Deskripsi gambar"
        width={600}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="rounded-lg md:hidden"
      />
      <div className="lg:absolute inset-0 flex flex-col items-center justify-center text-center py-10 px-5">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl">Have You found the one?</h1>
          <p className="text-sm font-light">
            The search is over: Rent your Valentine’s Day look now.
          </p>
          <Link href={""}>
            <Button className="w-52 rounded-none font-bold">
              Rent A Dress
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
