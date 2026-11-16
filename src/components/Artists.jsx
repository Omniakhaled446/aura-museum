import { artistsData } from "../data/museumData";

export default function Artists() {
  return (
    <section id="artists" className="py-24 px-6 md:px-16 bg-[#0B0F19] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs uppercase tracking-widest mb-2 block font-semibold">Master Creators</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3">Featured Artists</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">Meet the visionary minds behind the museum's digital masterpieces.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artistsData.map((artist) => (
            <div 
              key={artist.id} 
              className="bg-[#111827] p-8 rounded-xl border border-gray-800 flex flex-col justify-between group hover:border-amber-500/40 transition shadow-xl"
            >
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-1 font-serif">{artist.name}</h3>
                <p className="text-xs text-gray-400 font-medium mb-4">{artist.specialty}</p>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {artist.bio}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-amber-500 font-medium">
                Explore Profile →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}