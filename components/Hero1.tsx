import Image from "next/image";

export default function Hero1() {
  return (
    <div>
      <div className="flex flex-col bg-[#C6E4D6] p-6 rounded-xl lg:flex-row">
        <div className="space-y-3 p-6">
          <p className="text-gray-700">Bangladesh 2.0</p>
          <p className="text-3xl font-bold text-black xl:text-4xl">
            Idea, innovation, vision and challenges in New Bangladesh
          </p>
          <button className="bg-[#006A50] text-white p-4 text-sm rounded-xl font-bold">
            Explore New Bangladesh
          </button>
        </div>
        <Image
          src="/Image.png"
          width="400"
          height="400"
          alt="Bangladesh"
          className=""
        />
      </div>
    </div>
  );
}
