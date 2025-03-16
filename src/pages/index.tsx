import Layout from "./layout";
import Image from "next/image";
import PriceSeg from "@/components/layout/price";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center mx-auto my-10 lg:my-20 max-w-screen-xl">
        <div className="text-white text-center lg:text-left mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">Bounty Swap</h1>
          <p className="text-lg md:text-2xl mt-4"><strong>Trade crypto</strong> seamlessly with our DEX App.</p>
          <p className="text-lg md:text-2xl mt-2"><strong>Fast, Secure, and Fully Decentralized</strong>.</p>
          <p className="text-lg md:text-2xl mt-2">
            Swap assets anytime with <strong>low fees and no middlemen!</strong>
          </p>
          <button className="font-bold cursor-pointer border-2 bg-gradient-to-r from-blue-400 to-blue-600 my-5 px-6 md:px-8 py-2 rounded-full text-white text-lg hover:bg-blue-500">
            Start Trading
          </button>

          <div className="mt-8">
            <div className="grid grid-cols-2 gap-4 md:gap-10">
              <PriceSeg network={"ethereum"} />
              <PriceSeg network={"polygon"} />
              <PriceSeg network={"binance"} />
              <PriceSeg network={"tron"} />
            </div>
          </div>
        </div>

        <div className="hidden lg:block mt-10 lg:mt-0">
          <Image
            src="/assets/bange.png"
            className="mx-auto lg:ml-20"
            alt="KIBA Logo"
            width={350}
            height={50}
            quality={100}
          />
        </div>
      </div>
    </Layout>
  );
}
