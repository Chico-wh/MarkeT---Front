import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function ManifestoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const wordY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={ref} className="relative bg-[#F7F3EA] overflow-hidden">
      {/* Diagonal rule */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-[#070707]/8" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-24 items-center">

          {/* Left */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-[#FF3B30]" />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#070707]/30">Manifesto</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-[-0.035em] text-[#070707]"
              style={{ fontSize:'clamp(1.8rem,3.8vw,3.4rem)' }}
            >
              Boa comunicação não enfeita a marca.{' '}
              <em className="not-italic text-[#8A8A8A]">
                Ela muda a forma como o mercado enxerga o negócio.
              </em>
            </h2>
          </ScrollReveal>

          {/* Right */}
          <div className="flex flex-col gap-10">
            <ScrollReveal delay={0.12}>
              <p className="text-[1rem] leading-[1.8] text-[#070707]/50 max-w-[46ch]">
                Em um mercado saturado de anúncios iguais, posts descartáveis e campanhas sem direção, a diferença está em construir presença com estratégia, estética e repetição inteligente.
              </p>
            </ScrollReveal>

            {/* Big word parallax */}
            <div className="overflow-hidden">
              <motion.div style={{ y: wordY }}>
                <ScrollReveal delay={0.2} y={20}>
                  <p className="font-black leading-none tracking-[-0.04em] select-none"
                    style={{ fontSize:'clamp(3.5rem,9vw,8.5rem)', color:'#FF3B30' }}
                  >
                    PERCEPÇÃO
                    <br />
                    VENDE.
                  </p>
                </ScrollReveal>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}