import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const BLOCKS = [
  {
    num: '01',
    title: 'Marca sem posicionamento',
    body: 'A empresa comunica, mas não ocupa um lugar claro na cabeça do público. Volume sem direção é ruído.',
  },
  {
    num: '02',
    title: 'Campanha sem narrativa',
    body: 'As peças aparecem, mas não constroem uma mensagem contínua. Cada campanha começa do zero.',
  },
  {
    num: '03',
    title: 'Tráfego sem conversão',
    body: 'O anúncio leva clique, mas a experiência não sustenta desejo. Mídia investida, resultado esquecido.',
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleX = useTransform(scrollYProgress, [0,1], ['-3%','3%']);

  return (
    <section ref={ref} className="relative bg-[#171717] overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:'radial-gradient(rgba(247,243,234,0.07) 1px, transparent 1px)',
          backgroundSize:'28px 28px',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">

        {/* Section label */}
        <ScrollReveal className="mb-4">
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-[#FF3B30]" />
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/25">O problema</span>
          </div>
        </ScrollReveal>

        {/* Headline with horizontal parallax */}
        <div className="overflow-hidden mb-20 lg:mb-28">
          <motion.h2 style={{ x: titleX }}
            className="font-black leading-[1.0] tracking-[-0.04em] text-white"
            style={{ fontSize:'clamp(2rem,5vw,4.5rem)' }}
          >
            <motion.span style={{ x: titleX }}>
              O problema raramente é falta
              <br className="hidden lg:block" /> de conteúdo.{' '}
              <em className="not-italic" style={{ color:'#FF3B30' }}>É falta de direção.</em>
            </motion.span>
          </motion.h2>
        </div>

        {/* 3 big blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {BLOCKS.map(({ num, title, body }, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4, backgroundColor: 'rgba(255,59,48,0.04)' }}
                transition={{ duration: 0.35, ease: [0.22,1,0.36,1] }}
                className="group relative p-10 lg:p-12 cursor-default border border-transparent hover:border-[#FF3B30]/15 transition-colors duration-500 rounded-sm"
              >
                {/* Huge number watermark */}
                <span
                  className="block font-black leading-none select-none mb-8 transition-colors duration-500 group-hover:text-[#FF3B30]/10"
                  style={{ fontSize:'5.5rem', color:'rgba(247,243,234,0.04)', lineHeight:0.9 }}
                >
                  {num}
                </span>

                <h3 className="font-bold text-white/85 group-hover:text-white transition-colors duration-300 leading-snug"
                  style={{ fontSize:'clamp(1.05rem,1.5vw,1.25rem)' }}
                >
                  {title}
                </h3>
                <p className="mt-4 text-[0.875rem] leading-[1.75] text-white/30">{body}</p>

                {/* Bottom reveal line */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-[#FF3B30]/0 group-hover:bg-[#FF3B30]/40 transition-all duration-700" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}