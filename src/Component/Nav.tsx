
import Logo from '../assets/logo.png'

interface NavProps {
    coin: number;
}

const Nav = ({ coin }: NavProps) => {
    return (
        <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-800">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={Logo} alt="Cricket Logo" className="w-12 h-12" />
            </div>

            {/* Links & Coin */}
            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-6 text-gray-300 font-medium text-sm">
                    <a href="#home" className="hover:text-white transition">Home</a>
                    <a href="#fixture" className="hover:text-white transition">Fixture</a>
                    <a href="#teams" className="hover:text-white transition">Teams</a>
                    <a href="#schedules" className="hover:text-white transition">Schedules</a>
                </div>

                {/* Coin Button */}
                <div className="flex items-center gap-2 border border-gray-700 bg-gray-900 px-4 py-2 rounded-xl text-sm font-bold">
                    <span>{coin.toLocaleString()} Coin</span>
                    <span className="text-yellow-400">🪙</span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;