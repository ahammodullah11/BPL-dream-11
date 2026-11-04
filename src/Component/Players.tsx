import React from 'react';
import type { Iplayer } from '../Typs/PlayerType';

interface PlayersProps {
    players: Iplayer[];
    selectedPlayers: Iplayer[];
    onSelectPlayer: (player: Iplayer) => void;
}

const Players = ({ players, selectedPlayers, onSelectPlayer }: PlayersProps) => {
    // যেগুলো সিলেক্ট করা হয়েছে সেগুলোর ID বের করা
    const selectedIds = selectedPlayers.map(p => p.id);

    // সিলেক্ট করা প্লেয়ারগুলোকে বাদ দিয়ে বাকি প্লেয়ারদের ফিল্টার করা
    const availablePlayers = players.filter(player => !selectedIds.includes(player.id));

    return (
        <div className="w-full">
            {availablePlayers.length === 0 ? (
                <div className="text-center py-16 bg-gray-900/50 rounded-2xl border border-gray-800">
                    <p className="text-gray-400 text-lg">No more players available to select!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {availablePlayers.map((player) => (
                        <div 
                            key={player.id} 
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:border-gray-700 transition-all duration-300"
                        >
                            <div>
                                {/* প্লেয়ারের ছবি */}
                                <div className="overflow-hidden rounded-xl mb-4 h-52 bg-gray-800">
                                    <img 
                                        src={player.image} 
                                        alt={player.name} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                                
                                {/* নাম ও দেশের নাম */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xl">👤</span>
                                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                                </div>
                                
                                <div className="flex justify-between items-center text-gray-400 text-sm border-b border-gray-800 pb-3 mb-4">
                                    <span className="flex items-center gap-1">🏳️ {player.country}</span>
                                    <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-xs font-semibold">
                                        {player.role}
                                    </span>
                                </div>

                                {/* রেটিং ও ব্যাটিং/বোলিং টাইপ */}
                                <div className="text-sm space-y-2 text-gray-300">
                                    <p className="font-bold text-white">Rating</p>
                                    <div className="flex justify-between text-sm">
                                        <span className="font-semibold text-gray-300">{player.battingType}</span>
                                        <span className="text-gray-400">{player.bowlingType}</span>
                                    </div>
                                </div>
                            </div>

                            {/* প্রাইস এবং চুজ বাটন */}
                            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800">
                                <div>
                                    <span className="text-xs text-gray-400 block">Price</span>
                                    <span className="font-bold text-white text-base">
                                        USD ${player.bidingPrice.toLocaleString()}
                                    </span>
                                </div>
                                
                                <button 
                                    onClick={() => onSelectPlayer(player)}
                                    className="bg-transparent hover:bg-[#E7FE29] text-white hover:text-black border border-gray-700 hover:border-[#E7FE29] px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
                                >
                                    Choose Player
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Players;