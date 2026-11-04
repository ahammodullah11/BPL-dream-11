import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Banner from './Component/Banner';
import Players from './Component/Players';
import SelectedPlayers from './Component/SelectedPlayers';
import Footer from './Component/Footer';
import type { Iplayer } from './Typs/PlayerType';
import WhatsAppButton from './Component/WhatsAppButton';
function App() {
  const [players, setPlayers] = useState<Iplayer[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);
  const [coin, setCoin] = useState<number>(6000000);
  const [activeTab, setActiveTab] = useState<'available' | 'selected'>('available');

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.error("Error fetching players:", err));
  }, []);

  const handleClaimCredit = () => {
    setCoin(prev => prev + 2000000);
    alert('Successfully claimed 2,000,000 Coins!');
  };

  const handleSelectPlayer = (player: Iplayer) => {
    if (selectedPlayers.length >= 6) {
      alert('You can select a maximum of 6 players!');
      return;
    }

    if (coin < player.bidingPrice) {
      alert('Not enough coins to buy this player! Claim more credits.');
      return;
    }

    setCoin(prev => prev - player.bidingPrice);
    setSelectedPlayers(prev => [...prev, player]);
  };

  const handleDeleteSelected = (id: string, price: number) => {
    const updatedSelected = selectedPlayers.filter(p => p.id !== id);
    setSelectedPlayers(updatedSelected);
    setCoin(prev => prev + price);
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Nav coin={coin} />

        {/* Banner Section */}
        <Banner onClaimCredit={handleClaimCredit} />

        {/* Tab Selection Header */}
        <div className="max-w-7xl mx-auto px-4 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">
            {activeTab === 'available' 
              ? 'Available Players' 
              : `Selected Player (${selectedPlayers.length}/6)`}
          </h2>
          
          <div className="flex bg-gray-900 p-1.5 rounded-2xl border border-gray-800">
            <button 
              onClick={() => setActiveTab('available')}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                activeTab === 'available' ? 'bg-[#E7FE29] text-black shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Available
            </button>
            <button 
              onClick={() => setActiveTab('selected')}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                activeTab === 'selected' ? 'bg-[#E7FE29] text-black shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          {activeTab === 'available' ? (
            <Players 
              players={players} 
              selectedPlayers={selectedPlayers}
              onSelectPlayer={handleSelectPlayer} 
            />
          ) : (
            <SelectedPlayers 
              selectedPlayers={selectedPlayers} 
              onDeleteSelected={handleDeleteSelected}
              onAddMore={() => setActiveTab('available')}
            />
          )}
        </div>
      </div>
      <WhatsAppButton />
      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}

export default App;