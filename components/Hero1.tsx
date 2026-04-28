import Image from "next/image";

export default function Hero1() {
  return (
    <div>
      <div className="w-full mx-auto bg-green-200 space-y-3 p-6 rounded-xl">
        <p className="text-gray-700">Bangladesh 2.0</p>
        <p className="text-3xl font-bold text-black">
          Idea, innovation, vision and challenges in New Bangladesh
        </p>
        <button className="bg-[#006A50] text-white p-4 text-sm rounded-xl">
          Explore New Bangladesh
        </button>
        <Image src="/Image.png" width="300" height="300" alt="Bangladesh" />
      </div>
    </div>
  );
}
