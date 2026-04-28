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
    <div className="p-4 space-y-3">
      <p className="font-bold text-xl">Pillars of &quot;Bangladesh 2.0&quot;</p>
      <div className="space-y-6">
        {pillars.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-10">
            <Image src="/bulb.svg" width="70" height="50" alt="Bulb" />
            <p className="font-bold">{item.title}</p>
            <p>{entryTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
