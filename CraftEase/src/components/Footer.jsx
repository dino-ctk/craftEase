import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-craft-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-craft-gold flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">C</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Craft<span className="text-craft-gold">Ease</span>
              </span>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">
              Platforma s DIY video tutorijalima za uređenje doma. Sve na jednom mjestu – upute, alati i materijali.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-craft-gold transition-colors flex items-center justify-center text-sm">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-craft-gold transition-colors flex items-center justify-center text-xs">
                <AiOutlineInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-craft-gold transition-colors flex items-center justify-center text-xs">
                <AiFillTikTok />
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">
              Navigacija
            </h4>
            <ul className="space-y-2 text-sm font-body text-white/60">
              <li><Link to="/" className="hover:text-craft-gold transition-colors">Početna</Link></li>
              <li><a href="#tutorijali" className="hover:text-craft-gold transition-colors">Tutorijali</a></li>
              <li><a href="#o-nama" className="hover:text-craft-gold transition-colors">O nama</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm font-body text-white/60">
              <li>
                <a href="mailto:craft-ease@gmail.com" className="hover:text-craft-gold transition-colors">
                  craft-ease@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+38598123456" className="hover:text-craft-gold transition-colors">
                  +385 98 123 456
                </a>
              </li>
              <li className="text-white/40">Rijeka 51000, Hrvatska</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-body text-white/30">
          <span>© {new Date().getFullYear()} CraftEase. Sva prava pridržana.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privatnost</a>
            <a href="#" className="hover:text-white/60 transition-colors">Uvjeti korištenja</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
