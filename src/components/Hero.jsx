export default function Hero() {
  return (
    <header className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0B0F19] via-[#0f172a] to-[#0B0F19] text-white relative overflow-hidden">
      <div className="absolute top-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-6 inline-block border border-amber-500/30 bg-amber-950/40 px-6 py-2 rounded-full">
          ✨ The Digital Archive of Historical Epics & Fine Art
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-serif">
          Where Ink Lines Blend With <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Secrets of Lost Thrones
          </span>
        </h1>
        
        <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg mb-10 leading-relaxed font-light">
          Immerse yourself in a unique digital museum fusing historical narrative depth with mythical fantasy aesthetics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#gallery" 
            className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl shadow-lg shadow-amber-900/30 transition text-center"
          >
            Explore Gallery 📜
          </a>
          <a 
            href="#artists" 
            className="px-8 py-3.5 border border-gray-700 hover:border-amber-500/60 text-gray-300 hover:text-white rounded-xl transition text-center"
          >
            Meet Artists
          </a>
        </div>
      </div>
    </header>
  );
}