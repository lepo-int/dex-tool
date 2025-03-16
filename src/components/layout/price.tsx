import Image from "next/image";

export default function PriceSeg({ network }: { network: string }) {
    const networks: Record<string, string> = {
        ethereum: "/assets/ethereum.png",
        polygon: "/assets/polygon.png",
        binance: "/assets/binance.png",
        tron: "/assets/tron.png",
    };
    const image = networks[network] || networks.ethereum;

    return (
        <div className="bg-violet-600 w-full sm:w-80 lg:w-85 h-auto sm:h-28 lg:h-25 rounded-3xl border-2 border-indigo-300 p-4 sm:p-6 lg:p-8 flex items-center justify-between opacity-80">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <Image src={image} alt={network} width={32} height={32} quality={100} />
            </div>
        </div>
    );
}
