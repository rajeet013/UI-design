import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const dropdown = [
  {
    title: "Yes, I Agree",
  },
  {
    title: "No, I Don't Agree",
  },
];

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="bg-[#C6E4D6] flex p-1 text-sm font-semibold whitespace-nowrap">
        Yes, I Agree
        <ChevronDownIcon className="size-5 text-foreground" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-35 bg-backgroun"
      >
        <div className="py-1">
          {dropdown.map((item) => (
            <MenuItem key={item.title}>
              <Link
                href="#"
                className="block p-3 text-sm text-foreground hover:bg-[#C6E4D6]"
              >
                {item.title}
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
