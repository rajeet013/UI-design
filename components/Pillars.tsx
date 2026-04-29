import Image from "next/image";

export default function Pillars() {
  const entryTitle =
    "Dolor sit amet consectetur elit. Facilis quas, ducimus labore sequi quos";

  const pillars = [
    {
      title: "Innovation",
    },
    {
      title: "Sustainability",
    },
    {
      title: "Infrastructure",
    },
    {
      title: "Empowerment",
    },
  ];
  return (
    <div className="p-4 space-y-3 lg:space-y-8">
      <p className="font-bold text-xl xl:text-4xl">Pillars of &quot;Bangladesh 2.0&quot;</p>
      <div className="flex flex-col gap-4 md:flex md:flex-row">
        {pillars.map((item) => (
          <div key={item.title} className="bg-white dark:bg-zinc-800 rounded-2xl p-7">
            <Image src="/bulb.svg" width={70} height={50} alt="Bulb" />
            <p className="font-bold text-foreground">{item.title}</p>
            <p>{entryTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
