import Donate from "@/components/Donate";
import Hero1 from "@/components/Hero1";
import Opinion from "@/components/Opinion";
import Pillars from "@/components/Pillars";
import Recent from "@/components/Recent";
import Subscribe from "@/components/Subscribe";
import Vision from "@/components/Vision";

export default function page() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      <Hero1 />
      <Pillars />
      <Vision />
      <Opinion />
      <Recent />
      <Donate />
      <Subscribe />
    </div>
  );
}
