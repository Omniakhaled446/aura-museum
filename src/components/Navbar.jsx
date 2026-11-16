export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-5 bg-[#0B0F19] text-white border-b border-amber-500/25 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="text-2xl font-bold tracking-wider text-amber-400 flex items-center gap-3">
        <span className="text-3xl">🏛️</span>
        <span className="font-serif">Aura Museum</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
        <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
        <a href="#artists" className="hover:text-amber-400 transition">Artists</a>
        <a href="#about" className="hover:text-amber-400 transition">About</a>
      </div>
      <a 
        href="#gallery" 
        className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm rounded-lg transition font-semibold shadow-lg shadow-amber-900/30"
      >
        Explore Gallery
      </a>
    </nav>
  );
}