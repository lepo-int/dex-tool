import Layout from "./layout";
import Image from "next/image";
import PriceSeg from "@/components/layout/price";

export default function Home() {
  return (
    <Layout>
      <div className="flex mx-90 my-20">
        <div className="text-white mt-10">
          <h1 className="text-8xl"><strong>Bounty</strong> Swap</h1>
          <p className="text-2xl mt-5"><strong>Trade crypto</strong> seamlessly with our DEX App.</p>
          <p className="text-2xl mt-2"><strong>Fast, Secure, and Fully Decentralized</strong>.</p>
          <p className="text-2xl mt-2">Swap assets anytime with <strong>low fees and no middlemen! </strong></p>
          <button className="font-bold cursor-pointer border-2 bg-gradient-to-r from-blue-400 to-blue-600 my-5 px-8 py-2 rounded-full text-white text-lg hover:bg-blue-500">Start Trading</button>
          <div className="mt-15">
            <div className="flex space-x-10">
              <PriceSeg network={"ethereum"} />
              <PriceSeg network={"polygon"} />
            </div>
            <div className="flex mt-5 space-x-10">
              <PriceSeg network={"binance"} />
              <PriceSeg network={"tron"} />
            </div>
          </div>
        </div>
        <div>
          <Image src="/assets/bange.png" className="ml-20" alt="KIBA Logo" width={420} height={50} quality={100}/>
        </div>
      </div>
    </Layout>
  );
}
