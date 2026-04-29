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
    <div className="p-4 space-y-4 w-full ">
      <p className="font-bold text-xl p-3">Your Opinion Matters</p>
      <div className="p-10 bg-white rounded-2xl ">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="text-md">
              <th className="bg-[#C6E4D6] py-5">Questions</th>
              <th className="bg-[#C6E4D6] py-5">Select Your Opinion</th>
            </tr>
          </thead>
          <tbody className="">
            {opinion.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="font-bold text-sm">{item.title}</td>
                <td className="text-center">
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
