export default function Donate() {
  const money = [
    {
      amount: 100,
      color: "bg-white dark:bg-zinc-800",
    },
    {
      amount: 200,
      color: "bg-[#C6E4D6] dark:bg-green-600",
    },
    {
      amount: 500,
      color: "bg-white dark:bg-zinc-800",
    },
    {
      amount: 1000,
      color: "bg-white dark:bg-zinc-800",
    },
  ];
  return (
    <div className="p-4 space-y-3 lg:space-y-8">
      <p className="font-bold text-xl lg:text-4xl text-center">Donate Today</p>
      <p className="text-sm text-center">
        Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
        embracing cutting-edge technology, promoting inclusive growth, and
        ensuring sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure.
      </p>
      <div className="flex flex-row gap-2 rounded-2xl xl:flex-row xl:gap-9 justify-center">
        {money.map((item) => {
          return (
            <div key={item.amount} className={`${item.color} p-4 rounded-xl xl:px-20 xl:py-10`}>
              <p className="font-bold text-2xl text-center">{item.amount} Taka</p>
            </div>
          );
        })}
      </div>
      <div className="px-10">
        <input
          type="number"
          placeholder="Other Amount (Taka)"
          className="bg-white w-full px-4 py-3 text-sm outline-none text-center"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-[#006A50] text-white px-10 py-3 text-sm rounded-xl">
          Donate Now
        </button>
      </div>
    </div>
  );
}
