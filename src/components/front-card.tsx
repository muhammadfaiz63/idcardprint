'use client';
import ImageWithFallback from "./image-with-fallback";
import { useParams } from 'next/navigation';
import Tag from "./tag";
import { getIdcardDetail } from '../services/idcard';
import { useEffect, useState } from "react";

export default function FrontCard() {

  const [dataDetail, setDataDetail] = useState();

  const { id } = useParams();

  const getData = async (id: any) => {
      if(id){
        const detail = await getIdcardDetail(id);
        setDataDetail(detail ?? null);
      }
  };

  console.log("dataDetail",dataDetail)

  useEffect(() => {
      getData(id);
  }, [id]);


  return (
    <div className="flex flex-col w-full p-[30px] space-y-8">
      <div className="flex flex-row justify-between items-center w-full space-x-8">
        <div className="flex justify-center items-center w-1/3">
          <ImageWithFallback alt="image" src={'https://idcardapi.mnindonesia.com/'+dataDetail?.image} className="w-auto h-auto object-contain" />
        </div>
        <div className="flex flex-col justify-between items-start w-2/3">
          <div className="flex flex-col w-full space-y-3">
            <span className="text-3xl text-center">{dataDetail?.title}</span>
            <span className="text-3xl text-center">{dataDetail?.subtitle}</span>
            <span className="text-lg text-center">{dataDetail?.placedate}</span>
          </div>
          <div className="flex justify-center self-end w-full bg-[#11743B] mt-6">
            <span className="text-white text-[90px] leading-none">{dataDetail?.accreditation}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start w-full">
        <span className="text-4xl">{dataDetail?.name}</span>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-start items-start w-full space-y-2">
          <div className="flex flex-col justify-start items-start w-full space-y-2">
            <span className="text-3xl">{dataDetail?.type}</span>
            <span className="text-3xl">{dataDetail?.country}</span>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <span className="text-lg font-semibold">{dataDetail?.categories}</span>
            {/* <span className="text-lg font-semibold">KATA BEREGU PUTRA</span>
            <span className="text-lg font-semibold">KUMITE PERORANGAN-30 PUTRA</span> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ImageWithFallback alt="image" src="/images/barcode.png" className="w-auto h-auto object-contain" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col space-y-2 w-3/4">
          <div className="grid grid-cols-6 gap-x-3">
            <Tag label="ALL" color="grey" />
            <Tag label="ALL" color="black" />
            <Tag label="HQ" color="red" />
            <Tag label="HTL" color="red" />
            <Tag label="PKA" color="red" />
          </div>
          <div className="grid grid-cols-6 gap-x-3">
            <Tag label="SMR" color="yellow" />
            <Tag label="XAM" color="yellow" />
            <Tag label="WDR" color="yellow" />
            <Tag label="NBC" color="red" />
            <Tag label="MPC" color="red" />
          </div>
          <div className="grid grid-cols-6 gap-x-3">
            <Tag label="T1" color="green" />
            <Tag label="T2" color="green" />
            <Tag label="T3" color="green" />
            <Tag label="T4" color="green" />
            <Tag label="T5" color="green" />
            <Tag label="T5" color="green" />
          </div>
        </div>
        <div className="flex justify-center items-center w-1/4">
          <ImageWithFallback alt="image" src="/images/logo-wskf.png" className="w-auto h-auto object-contain" />
        </div>
      </div>
      {
        dataDetail?.note ? 
      <div className="flex flex-col w-full space-y-2">
        <div className="flex flex-row justify-around items-center w-full bg-[#0C356A] py-5">
          <span className="text-6xl text-white">1</span>
          <span className="text-6xl text-white">2</span>
          <span className="text-6xl text-white">3</span>
          <span className="text-6xl text-white">4</span>
        </div>
        <div className="flex flex-row justify-start items-start w-full">
          <span className="text-xs text-black font-semibold">Validity Period: 22 September 2023</span>
        </div>
        <div className="flex justify-center items-center">
          <ImageWithFallback alt="image" src="/images/footer.png" className="w-auto h-auto object-contain" />
        </div>
      </div>:null}
    </div>
  );
}
