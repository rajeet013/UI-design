import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between p-5">
        <p className="font-bold text-xl">Bangladesh 2.0</p>
        <div className="flex flex-row items-center space-x-4">
          <ThemeSwitch />
          <button className="border border-[006A50] text-green-900 p-4 text-sm rounded-xl">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}
