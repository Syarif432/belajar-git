import Image from "next/image";
import Hero from "../../public/assets/Hero.png";

export default function Home() {
  return (
    <div className="bg-[#C2EFD4] text-[#224F34] ">
      <div className="px-4 py-4 flex flex-col gap-4 md:flex-row md:justify-around md:py-40 md:px-52 md:items-center">
        <div className="">
          <h1 className="font-serif font-semibold text-2xl md:text-7xl md:w-[50%]">
            Discover and Find Your Own Fashion!
          </h1>
          <p className="text-sm md:text-lg md:w-[50%]">
            Explore our curated collection of stylish clothing and accessories
            tailored to your unique taste.
          </p>
          <button className="mt-4 border border-[#224F34] hover:bg-[#224F34] hover:text-[#C2EFD4] rounded-md p-2">
            Explore Now
          </button>
        </div>
        <div className="">
          <Image src={Hero} alt="Hero image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
