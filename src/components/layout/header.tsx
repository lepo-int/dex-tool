import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-violet-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-10 py-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image src="/assets/logo.png" alt="KIBA Logo" width={180} height={50} quality={100} />
                </div>

                {/* Navigation - Desktop & Mobile Toggle Button */}
                <div className="flex items-center lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden lg:flex space-x-10 text-lg">
                    <a href="#" className="hover:text-white">Stake</a>
                    <a href="#" className="hover:text-white">Liquidity</a>
                    <a href="#" className="hover:text-red-500">Minting</a>
                    <a href="#" className="hover:text-white flex items-center">
                        Developer <span className="ml-1 w-2 h-2 bg-white rounded-full"></span>
                    </a>
                </nav>

                {/* Connect Wallet Button - Always Visible */}
                <div className="ml-auto lg:ml-0">
                    <ConnectButton />
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden bg-violet-700 py-4 space-y-3 text-center">
                    <a href="#" className="block hover:text-white">Stake</a>
                    <a href="#" className="block hover:text-white">Liquidity</a>
                    <a href="#" className="block hover:text-red-500">Minting</a>
                    <a href="#" className="block hover:text-white flex items-center justify-center">
                        Developer <span className="ml-1 w-2 h-2 bg-white rounded-full"></span>
                    </a>
                </div>
            )}
        </header>
    );
}
