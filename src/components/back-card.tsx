import ImageWithFallback from "./image-with-fallback";
import TagWithLegend from "./tag-with-legend";
import { ACCESS_ZONE, ACTIVITIES, TRANSPORT_CODE, VANUE_ACCESS } from "@/constants/data";

export default function BackCard() {
  type Colors = "red" | "grey" | "black" | "green" | "blue" | "yellow" | "white";

  return (
    <div className="flex flex-col w-full p-[30px] space-y-8">
      <div className="flex flex-row justify-center items-center w-full space-x-8">
        <ImageWithFallback alt="image" src="/images/logo-forki.png" className="w-auto h-auto object-contain" />
        <ImageWithFallback alt="image" src="/images/logo-wskf.png" className="w-auto h-auto object-contain" />
        <ImageWithFallback alt="image" src="/images/logo-shindoka.png" className="w-auto h-auto object-contain" />
      </div>
      <ImageWithFallback alt="image" src="/images/divider-back.png" className="w-auto h-auto object-contain" />
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-row justify-start items-center w-full">
            <span className="text-xl -rotate-90 -mx-12 text-nowrap leading-none font-semibold">VENUE ACCESS</span>
            <div className="flex flex-col w-full space-y-2">
              {VANUE_ACCESS.map((item, index) => (
                <TagWithLegend key={index} color={item.color as Colors} label={item.label} legend={item.legend} />
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-full">
            <span className="text-xl -rotate-90 -mx-16 text-nowrap leading-none font-semibold">TRANSPORT CODE</span>
            <div className="flex flex-col w-full space-y-2">
              {TRANSPORT_CODE.map((item, index) => (
                <TagWithLegend key={index} color={item.color as Colors} label={item.label} legend={item.legend} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-row justify-start items-center w-full">
            <span className="text-xl -rotate-90 -mx-12 text-nowrap leading-none font-semibold">ACCESS ZONE</span>
            <div className="flex flex-col w-full space-y-2">
              {ACCESS_ZONE.map((item, index) => (
                <TagWithLegend key={index} color={item.color as Colors} label={item.label} legend={item.legend} classNameTag="h-[44px]" />
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-full">
            <span className="text-xl -rotate-90 -mx-8 text-nowrap leading-none font-semibold">ACTIVITIES</span>
            <div className="flex flex-col w-full space-y-2">
              {ACTIVITIES.map((item, index) => (
                <TagWithLegend key={index} color={item.color as Colors} label={item.label} legend={item.legend} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full space-y-3 pt-10">
            <span className="text-sm font-bold">Supported by:</span>
            <div className="grid grid-cols-2 gap-x-3">
              <ImageWithFallback alt="image" src="/images/prima.png" className="w-auto h-auto object-contain" />
              <ImageWithFallback alt="image" src="/images/prima.png" className="w-auto h-auto object-contain opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <ImageWithFallback alt="image" src="/images/divider-back.png" className="w-auto h-auto object-contain" />
    </div>
  );
}
