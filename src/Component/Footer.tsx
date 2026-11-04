import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-[#060919] pt-32 pb-10 text-white mt-48">
            {/* Floating Newsletter Card */}
            <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
                <div className="bg-gradient-to-r from-blue-100 via-white to-amber-100 p-2 rounded-3xl border border-white/20 shadow-2xl">
                    <div className="bg-white text-black text-center py-12 px-6 rounded-2xl">
                        <h3 className="text-3xl font-extrabold mb-2">Subscribe to our Newsletter</h3>
                        <p className="text-gray-500 mb-6">Get the latest updates and news right in your inbox!</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-3 border border-gray-300 rounded-xl w-full text-sm focus:outline-none"
                            />
                            <button className="bg-gradient-to-r from-amber-400 to-pink-500 text-black font-bold px-6 py-3 rounded-xl whitespace-nowrap shadow-md hover:opacity-90 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Main Content */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <img src="/favicon.svg" alt="Footer Logo" className="w-20 h-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm mb-12">
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">About Us</h4>
                        <p className="leading-relaxed">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
                        <ul className="space-y-2 list-disc list-inside">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">Services</a></li>
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li>
                             <a 
                            href="https://wa.me/8801731122497" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                           className="hover:text-white transition"
                         >
                         Contact
                    </a>
                     </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Subscribe</h4>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-l-xl text-sm text-white focus:outline-none w-full"
                            />
                            <button className="bg-gradient-to-r from-amber-400 to-pink-500 text-black font-bold px-4 py-2 rounded-r-xl text-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-6 text-center text-gray-500 text-xs">
                    @2024 Your Company All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

