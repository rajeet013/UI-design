import Image from "next/image";

export default function Vision() {
  const vision = [
    {
      title: "Digital Information",
      entry:
        "Creating a nationwide digital ecosystem to enhance connectivity and access to services for all citizens.",
      color: "bg-[#DDEAFF]",
      btnColor: "bg-[#5490F5]",
    },
    {
      title: "Green Energy",
      entry:
        "Investments in solar and wind energy to ensure a sustainable and eco-friendly future.",
      color: "bg-[#D6F5E8]",
      btnColor: "bg-[#09A15C]",
    },
    {
      title: "Modern Infrastructure",
      entry:
        "Building state-of-the-art infrastructure to support economic growth and global competitiveness.",
      color: "bg-[#FFF3D6]",
      btnColor: "bg-[#FFC239]",
    },
  ];
  return (
    <div className="p-4 space-y-3">
      <p className="font-bold text-xl">The Vision of Future</p>
      <p className="text-sm">
        Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing
        cutting-edge technology, promoting inclusive growth, and ensuring
        sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure, the country is set to become
        a global model of development.
      </p>
      <div className="space-y-6">
        {vision.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl p-10 ${item.color} space-y-2`}
          >
            <Image src="/bulb.svg" width="70" height="50" alt="Bulb" />
            <p className="font-bold">{item.title}</p>
            <p>{item.entry}</p>
            <button
              className={`${item.btnColor} text-white p-4 text-sm rounded-xl`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-4 space-y-2">
        <p>
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis quas, ducimus labore sequi quos deserunt optio id repellendus
          tempora veniam amet porro corporis exercitationem numquam debitis
          culpa laudantium odio, velit vel minus sit? Veritatis aut maiores
          ducimus fugit error ex sit, dignissimos eum tempora perferendis a rem
          culpa ab aliquid modi? Est vitae neque esse, cumque, quam tenetur rem
          earum eaque mollitia modi ipsum aspernatur, dignissimos excepturi
          aliquam architecto soluta necessitatibus vero?&rdquo;
        </p>
        <p className="font-bold">Dr. Muhammad Yunus</p>
        <p>Chief Adviser of the People&apos; Republic of Bangladesh</p>
      </div>
    </div>
  );
}
