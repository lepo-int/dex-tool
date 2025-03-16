import Image from "next/image";

export default function PriceSeg({network} : {network: string }) {
    const networks: Record<string, string> = {
        ethereum: "/assets/ethereum.png",
        polygon: "/assets/polygon.png",
        binance: "/assets/binance.png",
        tron: "/assets/tron.png",
    }
    const image = networks[network] || networks.ethereum;

    return (
        <div className="bg-violet-600 w-85 h-25 rounded-3xl border-2 border-indigo-300 p-8 items-center flex opacity-80">
            <div className="w-18 h-18 bg-fuchsia-100 rounded-full items-center flex justify-center">
                <Image src={image} alt="Ether" width={40} height={40} quality={100} />
            </div>
        </div >
    );
}
