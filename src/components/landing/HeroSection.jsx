import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BG = 'https://pixabay.com/pt/videos/download/video-277066_medium.mp4';

const FLOATING_TAGS = [
  { text: 'BRANDING',    top: '22%', left: '68%',  delay: 0    },
  { text: 'MIDIA PAGA',  top: '55%', left: '72%',  delay: 0.15 },
  { text: 'SOCIAL MEDIA',      top: '35%', left: '80%',  delay: 0.3  },
  { text: 'FUNIL',      top: '70%', left: '62%',  delay: 0.1  },
  { text: 'CRIATIVIDADE',    top: '15%', left: '58%',  delay: 0.22 },
];

const METRIC_CARDS = [
  { value: '+320%', label: 'Alcance qualificado', sub: 'Avg. campaign' },
  { value: '4.8x',  label: 'ROAS potencial',       sub: 'Meta Ads' },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] });
  const bgY      = useTransform(scrollYProgress, [0,1], ['0%',   '30%']);
  const contentY = useTransform(scrollYProgress, [0,1], ['0%',   '18%']);
  const opacity  = useTransform(scrollYProgress, [0,0.8], [1,0]);

  return (
    <section ref={ref} id="hero" className="has-grain relative min-h-screen flex flex-col overflow-hidden bg-[#070707]">

      {/* BG with parallax */}
<motion.div style={{ y: bgY }} className="absolute inset-0 z-0 overflow-hidden">
  <video
    src="/videos/drone.mp4"
    aria-hidden="true"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="w-full h-full object-cover"
    style={{
      opacity: 0.28,
      filter: "saturate(0.75) brightness(0.85)",
    }}
  />

  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,59,48,0.08) 0%, transparent 70%)",
    }}
  />

  <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/70 via-transparent to-[#070707]" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-[#070707]/30 to-transparent" />
</motion.div>
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {[20, 40, 60, 80].map(p => (
          <div key={p} className="absolute inset-y-0 w-px" style={{ left:`${p}%`, background:'rgba(247,243,234,0.022)' }} />
        ))}
        {[25, 50, 75].map(p => (
          <div key={p} className="absolute inset-x-0 h-px" style={{ top:`${p}%`, background:'rgba(247,243,234,0.018)' }} />
        ))}
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="drift absolute w-[600px] h-[600px] rounded-full top-[-10%] right-[-10%]"
          style={{ background:'radial-gradient(circle, rgba(255,59,48,0.09) 0%, transparent 65%)' }} />
        <div className="drift2 absolute w-[400px] h-[400px] rounded-full bottom-[5%] left-[-5%]"
          style={{ background:'radial-gradient(circle, rgba(255,106,0,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Floating tag words */}
      <div className="absolute inset-0 z-1 pointer-events-none hidden lg:block">
        {FLOATING_TAGS.map(({ text, top, left, delay }) => (
          <motion.span key={text}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay: delay + 1.5, duration:1 }}
            className="absolute text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ top, left, color:'rgba(247,243,234,0.12)' }}
          >
            {text}
          </motion.span>
        ))}
      </div>

      {/* Floating metric cards */}
      <div className="absolute right-8 lg:right-16 top-[28%] z-10 pointer-events-none hidden lg:flex flex-col gap-3">
        {METRIC_CARDS.map(({ value, label, sub }, i) => (
          <motion.div key={i}
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay: i*0.15 + 1.2, duration:0.7, ease:[0.22,1,0.36,1] }}
            className="drift3 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md"
          >
            <p className="text-[1.6rem] font-black text-white tracking-tight leading-none">{value}</p>
            <p className="text-[9px] text-white/40 font-semibold tracking-[0.15em] uppercase mt-1">{label}</p>
            <p className="text-[8px] text-white/20 mt-0.5">{sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y: contentY, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32 w-full"
      >
        <motion.div variants={stagger.container} initial="initial" animate="animate">

          {/* Label */}
          <motion.div variants={stagger.item} className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#FF3B30]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
            Marketing & Comunicação
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={stagger.item}
            className="font-black leading-[0.92] tracking-[-0.04em] text-white uppercase"
            style={{ fontSize:'clamp(3.4rem,9.5vw,9.5rem)' }}
          >
            <span className="block">Campanhas</span>
            <span className="block">que fazem</span>
            <span className="block">a marca</span>
            <span className="block" style={{ color:'rgba(255,255,255,0.4)' }}>ser lembrada.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={stagger.item}
            className="mt-8 max-w-[44ch] leading-[1.7] text-white/40 font-light"
            style={{ fontSize:'clamp(0.95rem,1.4vw,1.1rem)' }}
          >
            Estratégia, criação e mídia para transformar atenção em percepção, demanda e vendas.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="mt-10 flex flex-wrap gap-3 items-center">
            <a href="#cases"
              className="cta-shimmer relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white text-[0.9rem] tracking-[0.01em] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,59,48,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              style={{ background:'linear-gradient(135deg,#FF3B30,#cc2a20)' }}
            >
              Ver proposta de campanha <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[0.9rem] text-white/50 border border-white/[0.1] hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              Falar com especialista
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger.item} className="mt-16 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-6 max-w-[500px]">
            {[
              { n: '140+', l: 'projetos' },
              { n: '8 anos', l: 'de mercado' },
              { n: '60+', l: 'marcas' },
            ].map(({ n, l }) => (
              <div key={l}>
                <p className="text-[1.65rem] font-black text-white tracking-tight leading-none">{n}</p>
                <p className="mt-1.5 text-[10px] text-white/25 font-medium tracking-[0.12em] uppercase">{l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-white/[0.05] py-4 bg-[#070707]/60 backdrop-blur-sm ticker-root overflow-hidden">
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 z-10"
          style={{ background:'linear-gradient(to right,#070707,transparent)' }} />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 z-10"
          style={{ background:'linear-gradient(to left,#070707,transparent)' }} />
        <div className="ticker-run flex gap-0 select-none">
          {Array(8).fill(['BRANDING','PERFORMANCE','SOCIAL MEDIA','CAMPANHAS 360','LANDING PAGES','TRÁFEGO PAGO']).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 text-[11px] font-bold tracking-[0.22em] uppercase shrink-0">
              <span style={{ color:'rgba(247,243,234,0.18)' }}>{item}</span>
              <span style={{ color:'rgba(255,59,48,0.35)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}