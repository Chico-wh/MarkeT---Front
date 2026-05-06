import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const BG2 = 'background.png';

const METRICS = [
  { value: 320, suffix: '%', prefix: '+', label: 'alcance qualificado',      sublabel: 'média em campanhas otimizadas' },
  { value: 4.8, suffix: 'x', prefix: '',  label: 'retorno potencial (ROAS)', sublabel: 'campanhas Meta + Google'       },
  { value: 37,  suffix: '%', prefix: '-', label: 'desperdício em mídia',     sublabel: 'com segmentação correta'       },
  { value: 24,  suffix: '/7', prefix:'',  label: 'presença digital ativa',   sublabel: 'monitoramento contínuo'        },
];

function Counter({ value, suffix, prefix, inView }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const duration = 1400;
    const steps = 50;
    const inc = value / steps;
    let i = 0;
    const t = setInterval(() => {
      i++;
      const v = Math.min(inc * i, value);
      setCurrent(isDecimal ? parseFloat(v.toFixed(1)) : Math.floor(v));
      if (i >= steps) clearInterval(t);
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, value]);

  return (
    <span className="font-black text-white tracking-[-0.04em]" style={{ fontSize:'clamp(2.8rem,5.5vw,5rem)', lineHeight:1 }}>
      {prefix}{current}{suffix}
    </span>
  );
}

export default function PerformanceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] });
  const bgY = useTransform(scrollYProgress, [0,1], ['-15%','15%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#070707]">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] z-0">
        <img src={BG2} alt="" aria-hidden className="w-full h-full object-cover"
          style={{ opacity:0.12, filter:'saturate(0.5) brightness(0.8)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-transparent to-[#070707]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/60 to-[#070707]/60" />
      </motion.div>

      {/* Red accent top */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background:'linear-gradient(to right,transparent,#FF3B30,transparent)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">

        {/* Headline */}
        <ScrollReveal className="mb-20 lg:mb-28 max-w-[800px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-[#FF3B30]" />
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/25">Performance</span>
          </div>
          <h2 className="font-black leading-[1.0] tracking-[-0.04em] text-white"
            style={{ fontSize:'clamp(1.8rem,4vw,3.5rem)' }}
          >
            Criatividade sem distribuição vira arquivo bonito.{' '}
            <em className="not-italic text-white/30">Mídia sem criação vira dinheiro queimado.</em>
          </h2>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
          {METRICS.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-[#070707] hover:bg-[#0f0f0f] transition-colors duration-400 p-8 lg:p-10 flex flex-col gap-3 h-full relative overflow-hidden">
                <Counter value={m.value} suffix={m.suffix} prefix={m.prefix} inView={inView} />
                <p className="text-[0.8rem] font-semibold text-white/50 leading-snug">{m.label}</p>
                <p className="text-[0.72rem] text-white/20">{m.sublabel}</p>
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#FF3B30]/20 group-hover:bg-[#FF3B30]/50 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-[10px] text-white/15 italic">
          * Métricas ilustrativas para demonstração visual. Resultados reais dependem de setor, investimento e estratégia.
        </p>
      </div>
    </section>
  );
}