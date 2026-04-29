import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-white dark:bg-zinc-800 flex flex-col items-center justify-center space-y-3 rounded-xl py-5">
      <p className="font-bold text-2xl xl:text-4xl xl:pb-7">Bangladesh 2.0</p>
      <div className="flex gap-4 xl:w-20 xl:h-20">
        <FaFacebook color="#0866FF" />
        <FaInstagram color="#FF0069" />
        <FaXTwitter color="#000000" />
      </div>
    </div>
  );
}
