import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
    return (
        <header className="bg-violet-800 text-white shadow-md">
            <div className="max-w-10xl flex items-center px-10 py-2">
                <div className="flex items-center space-x-2 ml-40">
                    <Image src="/assets/logo.png" alt="KIBA Logo" width={220} height={50} quality={100} />
                </div>

                <nav className="flex space-x-15 text-white ml-40 text-lg">
                    <a href="#" className="hover:text-white">Stake</a>
                    <a href="#" className="hover:text-white">Liquidity</a>
                    <a href="#" className="hover:text-red-500">Minting</a>
                    <a href="#" className="hover:text-white flex items-center">
                        Developer <span className="ml-1 w-2 h-2 bg-white rounded-full"></span>
                    </a>
                </nav>

                <div className="flex items-center space-x-4 rounded-full ml-115">
                    <ConnectButton/>
                </div>

            </div>
        </header>
    );
}
