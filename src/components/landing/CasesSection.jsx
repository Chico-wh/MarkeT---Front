import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

// Unsplash photos chosen specifically for each case category
const IMAGES = [
  // 01 Branding — moodboard/brand identity flat lay, color palettes, typography
  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=85&fit=crop',
  // 02 Performance — laptop with ads dashboard / data analytics dark
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&fit=crop',
  // 03 Social Media — person filming content, ring light, creative setup
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&fit=crop',
  // 04 Web / Landing page — designer working on UI wireframe on screen
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=85&fit=crop',
  // 05 Institucional — modern office team meeting / corporate communication
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85&fit=crop',
  // 06 Campanha 360 — multichannel creative production / film set lighting
  'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=900&q=85&fit=crop',
];

const CASES = [
  { cat: 'Branding',      title: 'Reposicionamento de marca',   desc: 'Identidade, tom de voz e sistema visual completo.',  layout: 'tall'   },
  { cat: 'Performance',   title: 'Campanha de performance',     desc: 'Meta Ads + Google com foco em custo por lead.',      layout: 'wide'   },
  { cat: 'Social Media',  title: 'Social media estratégico',    desc: 'Conteúdo com narrativa e consistência visual.',      layout: 'normal' },
  { cat: 'Web',           title: 'Landing page de conversão',   desc: 'Alta velocidade, copy forte e CTA otimizado.',       layout: 'normal' },
  { cat: 'Institucional', title: 'Comunicação institucional',   desc: 'Posicionamento, campanha e presença unificados.',    layout: 'wide'   },
  { cat: '360°',          title: 'Campanha 360',                desc: 'Conceito único em todos os canais e formatos.',      layout: 'tall'   },
];

function CaseCard({ c, img, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Alternating parallax direction for depth
  const imgY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? '-8%' : '8%', index % 2 === 0 ? '8%' : '-8%']);

  const isWide = c.layout === 'wide';
  const isTall = c.layout === 'tall';

  return (
    <ScrollReveal delay={index * 0.07} className={isWide ? 'sm:col-span-2' : ''}>
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative overflow-hidden rounded-xl bg-[#0f0f0f] cursor-pointer ${isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
      >
        {/* Parallax image */}
        <motion.div style={{ y: imgY }} className="absolute inset-[-8%] z-0">
          <img src={img} alt={c.title} loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ filter: 'saturate(0.75) brightness(0.65)' }} />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#070707]/95 via-[#070707]/20 to-transparent" />
        <div className="absolute inset-0 z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top,rgba(255,59,48,0.18),transparent)' }} />

        {/* Top badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.1] text-[9px] font-bold text-white/40 tracking-[0.2em] uppercase">
            {c.cat}
          </span>
        </div>

        {/* Arrow button */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 group-hover:border-[#FF3B30]/40">
          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
          <h3 className="font-bold text-white leading-tight mb-2" style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)' }}>
            {c.title}
          </h3>
          <p className="text-[0.78rem] text-white/35">{c.desc}</p>
          <div className="mt-4 flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/25 group-hover:text-[#FF3B30] transition-colors duration-300">
            Ver direção <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

        {/* Hover border */}
        <div className="absolute inset-0 z-10 rounded-xl border border-[#FF3B30]/0 group-hover:border-[#FF3B30]/20 transition-colors duration-500" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function CasesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const headlineX = useTransform(scrollYProgress, [0, 1], ['2%', '-2%']);

  return (
    <section id="cases" ref={ref} className="relative bg-[#F7F3EA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">

        {/* Header */}
        <div className="overflow-hidden mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-5 h-px bg-[#FF3B30]" />
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#070707]/30">Portfólio</span>
          </div>
          <motion.h2
            style={{ x: headlineX, fontSize: 'clamp(2rem,5vw,4.5rem)' }}
            className="font-black leading-[1.0] tracking-[-0.04em] text-[#070707]"
          >
            <motion.span style={{ x: headlineX }}>
              Projetos que parecem campanha,
              <br className="hidden lg:block" />{' '}
              <em className="not-italic text-[#FF3B30]">não preenchimento de feed.</em>
            </motion.span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASES.map((c, i) => (
            <CaseCard key={i} c={c} img={IMAGES[i % IMAGES.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}