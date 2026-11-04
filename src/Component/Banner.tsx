import React from 'react';
import logo from '../assets/banner-main.png'
interface BannerProps {
    onClaimCredit: () => void;
}

const Banner = ({ onClaimCredit }: BannerProps) => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-6">
            <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-16 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Banner Image */}
                <div className="mb-6">
                    <img src={logo} alt="Banner Icon" className="w-40 h-auto mx-auto" />
                </div>

                {/* Heading & Subtitle */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    Beyond Boundaries Beyond Limits
                </p>

                {/* Claim Credit Button */}
                <div className="p-1 border border-[#E7FE29] rounded-2xl">
                    <button 
                        onClick={onClaimCredit}
                        className="bg-[#E7FE29] hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
                    >
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;