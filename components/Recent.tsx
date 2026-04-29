import Image from "next/image";

export default function Recent() {
  const entryTitle =
    "Not until the creation and maintenance of decent conditions of life for all people are recognized and accepted as a common obligation of all people and all countries—not until then shall we, with a certain degree of justification, be able to speak of humankind as civilized";
  const satellite = [
    {
      id: 1,
      title: "Bangladesh Launches New Satellite",
      date: "05/01/2025",
      time: "10.25 PM",
      image: "/Bangladesh.jpg",
      source: "/Al-Jazeera.png",
    },
    {
      id: 2,
      title: "Bangladesh Launches New Satellite",
      date: "05/01/2025",
      time: "10.25 PM",
      image: "/Bangladesh.jpg",
      source: "/Al-Jazeera.png",
    },
    {
      id: 3,
      title: "Bangladesh Launches New Satellite",
      date: "05/01/2025",
      time: "10.25 PM",
      image: "/Bangladesh.jpg",
      source: "/Al-Jazeera.png",
    },
  ];
  return (
    <div className="p-4 space-y-3 ">
      <p className="font-bold text-xl">Recent News</p>
      <p className="text-sm">
        Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
        embracing cutting-edge technology, promoting inclusive growth, and
        ensuring sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure, the country is set to become
        a global model of development.
      </p>
      <div>
        <div className="flex flex-col gap-4 rounded-2xl">
          {satellite.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl px-3 py-10 space-y-4 space-x-2"
              >
                <Image
                  src={item.image}
                  width="400"
                  height="200"
                  alt="Bangladesh"
                  className="rounded-2xl"
                />
                <div className="space-y-3">
                  <p className="font-bold text-xl">{item.title}</p>
                  <Image
                    src={item.source}
                    width="150"
                    height="150"
                    alt="Bangladesh"
                    className="rounded-2xl"
                  />
                  <div className="flex space-x-7">
                    <p>Date: {item.date}</p>
                    <p>Time: {item.time}</p>
                  </div>
                  <div>
                    <p>{entryTitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
