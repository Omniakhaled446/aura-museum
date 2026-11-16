export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#06090e] text-gray-500 text-center text-xs border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Aura Virtual Museum. All rights reserved.</p>
        <div className="flex gap-6 text-gray-400">
          <a href="#gallery" className="hover:text-amber-400 transition">Privacy Policy</a>
          <a href="#artists" className="hover:text-amber-400 transition">Terms of Exhibit</a>
          <a href="#gallery" className="hover:text-amber-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}