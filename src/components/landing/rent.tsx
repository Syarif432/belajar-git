import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Rent = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-around md:mt-10">
      <div className="text-center flex flex-col gap-10">
        <Image
          src={"/rent1.webp"}
          alt="rent foto 1"
          width={800}
          height={400}
          className="bg-black"
        />
        <div className="">
          <h1 className="font-bold text-2xl">Rent items monthly</h1>
          <p>
            Become a member and choose new designer styles every month. Plans
            from $79.
          </p>
          <Button>Choose Plant</Button>
        </div>
      </div>
      <div className="text-center flex flex-col gap-10">
        <Image src={"/rent1.webp"} alt="rent foto 1" width={800} height={400} />
        <div className="">
          <h1 className="font-bold text-2xl">Rent items monthly</h1>
          <p>
            Become a member and choose new designer styles every month. Plans
            from $79.
          </p>
          <Button>Choose Plant</Button>
        </div>
      </div>
    </div>
  );
};

export default Rent;
