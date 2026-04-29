import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className=" flex flex-row items-center justify-between p-5 w-full max-w-7xl mx-auto">
        <p className="font-bold text-xl md:text-3xl">Bangladesh 2.0</p>
        <div className="flex flex-row items-center space-x-4">
          <ThemeSwitch />
          <button className="border border-[006A50] text-[#006A50] p-3 text-sm rounded-lg xl:px-5 xl:py-3 xl:p-5">
            <p className="font-bold text-[17px]">Sign In</p>
          </button>
        </div>
      </div>
    </div>
  );
}
