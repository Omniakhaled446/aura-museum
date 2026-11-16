import { artworksData } from "../data/museumData";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-16 bg-[#0f172a] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs uppercase tracking-widest mb-2 block font-semibold">Exhibition Hall</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3">Featured Artworks</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">Discover curated digital pieces bridging ancient history and modern imagination.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworksData.map((art) => (
            <div 
              key={art.id} 
              className="bg-[#1e293b] p-8 rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider bg-amber-950/50 border border-amber-500/20 px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{art.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition font-serif">
                  {art.title}
                </h3>
                <p className="text-xs text-amber-500/80 mb-3 font-medium">By {art.artist}</p>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {art.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-700/50 flex items-center justify-between text-amber-400 text-xs font-semibold">
                <span>View Artwork</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}