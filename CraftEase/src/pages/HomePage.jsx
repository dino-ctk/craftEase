import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import TutorialCard from '../components/TutorialCard'
import data from '../data/tutorijali.json'

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const aktivnaKat = searchParams.get('kategorija') || 'sve'

  const filtrirani = aktivnaKat === 'sve'
    ? data.tutorijali
    : data.tutorijali.filter((t) => t.kategorija === aktivnaKat)

  const setKategorija = (id) => {
    if (id === 'sve') {
      setSearchParams({})
    } else {
      setSearchParams({ kategorija: id })
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-craft-gold/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-craft-navy/5 blur-3xl" />
          {/* Decorative diagonal lines */}
          <svg className="absolute right-10 top-32 opacity-10" width="300" height="300" viewBox="0 0 300 300">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C9963A" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="300" height="300" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-craft-gold/10 border border-craft-gold/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-craft-gold animate-pulse" />
              <span className="text-craft-gold text-xs font-body font-medium tracking-wide uppercase">
                DIY tutorijali za dom
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-craft-dark leading-[1.05] mb-6 animate-fade-up stagger-1">
              Ideje koje
              <span className="block text-craft-gold italic">pretvaraš</span>
              u stvarnost.
            </h1>

            <p className="font-body text-craft-dark/60 text-lg leading-relaxed mb-8 max-w-md animate-fade-up stagger-2">
              Jasni video vodiči, popis alata i materijala – sve na jednom mjestu. 
              Za početnike i napredne majstore.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up stagger-3">
              <a
                href="#tutorijali"
                className="btn-primary-craft btn"
              >
                Istraži tutorijale →
              </a>
              <a
                href="#o-nama"
                className="btn btn-ghost rounded-full px-6 font-body font-medium text-craft-dark border border-craft-dark/20 hover:bg-craft-dark/5"
              >
                O nama
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-fade-up stagger-4">
              {[
                { broj: '8+', label: 'Tutorijala' },
                { broj: '6',  label: 'Kategorija' },
                { broj: '100%', label: 'Besplatno' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-craft-dark">{s.broj}</div>
                  <div className="text-xs font-body text-craft-dark/50 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured card stack */}
          <div className="hidden md:block relative h-[480px]">
            <div className="absolute top-8 right-8 w-64 h-44 rounded-2xl overflow-hidden shadow-xl rotate-3 opacity-70">
              <img src={data.tutorijali[4].thumbnailUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-24 right-24 w-72 h-52 rounded-2xl overflow-hidden shadow-xl -rotate-2 opacity-85">
              <img src={data.tutorijali[1].thumbnailUrl} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-40 right-4 w-80 h-56 rounded-2xl overflow-hidden shadow-2xl rotate-1">
              <img src={data.tutorijali[0].thumbnailUrl} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <span className="font-display text-white text-sm font-medium">{data.tutorijali[0].naslov}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-5">
          <span className="text-xs font-body text-craft-dark/30 uppercase tracking-widest">Skrolaj</span>
          <div className="w-px h-8 bg-craft-dark/20 animate-pulse" />
        </div>
      </section>

      {/* ── O NAMA ── */}
      <section id="o-nama" className="py-24 bg-craft-navy">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-craft-gold text-xs font-body uppercase tracking-widest mb-3 block">Tko smo mi?</span>
            <h2 className="font-display text-4xl font-semibold text-white mb-6 leading-snug">
              Sve što trebaš za tvoj sljedeći DIY projekt
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-5">
              CraftEase je moderna platforma za tutorijale sastavljanja namještaja i uređenja doma. 
              Naša misija je pomoći korisnicima da jednostavno i brzo urede vlastiti dom.
            </p>
            <p className="font-body text-white/60 leading-relaxed mb-8">
              Svaki vodič sadrži jasne korake, popis potrebnih alata i materijala s direktnim 
              vezama na Bauhaus webshop – jer vjerujemo da dobre upute trebaju i dobre alate.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-display font-semibold text-white mb-1">Vizija</h4>
                <p className="text-white/50 text-sm font-body">Postati vodeća platforma za DIY tutorijale u regiji.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-display font-semibold text-white mb-1">Misija</h4>
                <p className="text-white/50 text-sm font-body">Omogućiti korisnicima vrsne video upute i jednostavno slaganje namještaja.</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {[
              { ikona: '📚', naslov: 'Strukturirani vodiči', opis: 'Jasni koraci, razumljivi i početnicima i naprednim korisnicima.' },
              { ikona: '🔧', naslov: 'Popis alata i materijala', opis: 'Uz svaki video – točno što trebaš i u kojim količinama.' },
              { ikona: '🛒', naslov: 'Direktne veze na Bauhaus', opis: 'Klikni na alat ili materijal i odmah naruči online.' },
              { ikona: '⭐', naslov: 'Provjerena kvaliteta', opis: 'Vodiči su testirani i ocijenjeni prema razini težine.' },
            ].map((v, i) => (
              <div key={v.naslov} className="flex gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-craft-gold/30 transition-colors">
                <div className="text-2xl flex-shrink-0">{v.ikona}</div>
                <div>
                  <h4 className="font-body font-semibold text-white text-sm mb-0.5">{v.naslov}</h4>
                  <p className="font-body text-white/50 text-sm">{v.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TUTORIJALI ── */}
      <section id="tutorijali" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-craft-gold text-xs font-body uppercase tracking-widest mb-3 block">Vodiči</span>
            <h2 className="section-title mb-4">Najgledaniji tutorijali</h2>
            <p className="font-body text-craft-dark/60 max-w-lg mx-auto leading-relaxed">
              Odaberi kategoriju i pronađi vodič koji odgovara tvom projektu i razini znanja.
            </p>
          </div>

          {/* Kategorija filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setKategorija('sve')}
              className={`btn btn-sm rounded-full font-body font-medium transition-all ${
                aktivnaKat === 'sve'
                  ? 'bg-craft-gold text-white border-none shadow-sm'
                  : 'btn-ghost text-craft-dark/60 hover:text-craft-dark border border-craft-dark/15'
              }`}
            >
              Sve kategorije
            </button>
            {data.kategorije.map((kat) => (
              <button
                key={kat.id}
                onClick={() => setKategorija(kat.id)}
                className={`btn btn-sm rounded-full font-body font-medium transition-all ${
                  aktivnaKat === kat.id
                    ? 'bg-craft-gold text-white border-none shadow-sm'
                    : 'btn-ghost text-craft-dark/60 hover:text-craft-dark border border-craft-dark/15'
                }`}
              >
                {kat.ikona} {kat.naziv}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtrirani.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtrirani.map((t, i) => (
                <TutorialCard key={t.id} tutorial={t} delay={i * 80} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-craft-dark/40 font-body">
              <div className="text-5xl mb-4">🔍</div>
              <p>Nema tutorijala u ovoj kategoriji.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
