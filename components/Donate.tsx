export default function Donate() {
  const money = [
    {
      amount: 100,
      color: "bg-white",
    },
    {
      amount: 200,
      color: "bg-[#C6E4D6]",
    },
    {
      amount: 500,
      color: "bg-white",
    },
    {
      amount: 1000,
      color: "bg-white",
    },
  ];
  return (
    <div className="space-y-3 self-center">
      <p className="font-bold text-xl">Donate Today</p>
      <p className="text-sm">
        Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
        embracing cutting-edge technology, promoting inclusive growth, and
        ensuring sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure.
      </p>
      <div className="flex flex-col gap-5 rounded-2xl xl:flex-row">
        {money.map((item) => {
          return (
            <div key={item.amount} className={`${item.color} p-4 rounded-xl`}>
              <p className="font-bold text-2xl">{item.amount} Taka</p>
            </div>
          );
        })}
      </div>
      <div className="px-10">
        <input
          type="number"
          placeholder="Other Amount (Taka)"
          className="bg-white w-full px-4 py-3 text-sm outline-none "
        />
      </div>
      <div className="px-23">
        <button className="bg-[#006A50] text-white px-10 py-3 text-sm rounded-xl">
          Done Now
        </button>
      </div>
    </div>
  );
}
