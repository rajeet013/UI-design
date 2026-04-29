import DropDown from "./DropDown";

const opinion = [
  {
    id: 1,
    title:
      "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
  },
  {
    id: 2,
    title:
      "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
  },
  {
    id: 3,
    title:
      "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
  },
];

export default function Opinion() {
  return (
    <div className="p-4 space-y-3 lg:space-y-8">
      <p className="font-bold text-xl xl:text-4xl">Your Opinion Matters</p>
      <div className="bg-white dark:bg-zinc-800 space-y-3 p-4 rounded-2xl lg:h-80">
        <table className="rounded-2xl lg:w-full lg:h-60 lg:mt-5">
          <thead>
            <tr className="text-md">
              <th className="bg-[#C6E4D6] dark:bg-green-600 py-5">Questions</th>
              <th className="bg-[#C6E4D6] dark:bg-green-600 py-5">Select Your Opinion</th>
            </tr>
          </thead>
          <tbody className="flex-col w-full items-center">
            {opinion.map((item) => (
              <tr key={item.id} className="">
                <td className="border border-gray-300 dark:text-foreground">{item.title}</td>
                <td className="border border-gray-300 dark:text-zinc-800 text-center">
                  <DropDown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
