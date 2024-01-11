import BackCard from "@/components/back-card";
import FrontCard from "@/components/front-card";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto bg-white">
      <FrontCard />
      <div className="flex w-full h-1 bg-[#1b1a1a]" />
      <BackCard />
    </div>
  );
}
