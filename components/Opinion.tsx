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
    <div className="p-4">
      <p className="font-bold text-xl p-3">Your Opinion Matters</p>
      <div className="p-4 bg-white rounded-2xl">
        <table className="border-separate border border-spacing-y-1 border-gray-400">
          <thead>
            <tr className="text-md">
              <th className="bg-[#C6E4D6] py-5 text-center">Questions</th>
              <th className="bg-[#C6E4D6] py-5 text-center">
                Select Your Opinion
              </th>
            </tr>
          </thead>
          <tbody>
            {opinion.map((item) => (
              <tr key={item.id}>
                <td className="font-bold text-sm">{item.title}</td>
                <td>
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
