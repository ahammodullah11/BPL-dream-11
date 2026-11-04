
import type { Iplayer } from '../Typs/PlayerType';

interface SelectedProps {
    selectedPlayers: Iplayer[];
    onDeleteSelected: (id: string, price: number) => void;
    onAddMore: () => void;
}

const SelectedPlayers = ({ selectedPlayers, onDeleteSelected, onAddMore }: SelectedProps) => {
    return (
        <div className="space-y-4">
            {selectedPlayers.length === 0 ? (
                <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
                    <p className="text-gray-400 text-lg mb-4">No players selected yet!</p>
                    <button 
                        onClick={onAddMore}
                        className="bg-[#E7FE29] text-black px-6 py-3 rounded-xl font-bold hover:bg-lime-400 transition"
                    >
                        Choose Players
                    </button>
                </div>
            ) : (
                <>
                    {selectedPlayers.map((player) => (
                        <div key={player.id} className="flex justify-between items-center bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-md">
                            <div className="flex items-center gap-4">
                                <img src={player.image} alt={player.name} className="w-16 h-16 object-cover rounded-xl" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">{player.name}</h4>
                                    <p className="text-gray-400 text-sm">{player.battingType}</p>
                                    <p className="text-gray-500 text-xs mt-1">Price: ${player.bidingPrice.toLocaleString()}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => onDeleteSelected(player.id, player.bidingPrice)}
                                className="text-red-500 hover:text-red-400 p-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl transition"
                                title="Remove Player"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}

                    <div className="mt-8">
                        <button 
                            onClick={onAddMore}
                            className="bg-[#E7FE29] text-black font-bold px-6 py-3 rounded-xl hover:bg-lime-400 transition shadow-lg"
                        >
                            Add More Player
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SelectedPlayers;