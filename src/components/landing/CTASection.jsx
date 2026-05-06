import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

const BG4 = 'https://media.base44.com/images/public/69f6a57b10525393756c2a2c/52066910c_generated_image.png';

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] });
  const bgY    = useTransform(scrollYProgress, [0,1], ['-15%','15%']);
  const textY  = useTransform(scrollYProgress, [0,1], ['0%','6%']);

  return (
    <section ref={ref} className="relative has-grain overflow-hidden" style={{ background:'#FF3B30' }}>
      {/* Parallax dark bg image on top */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] z-0">
        <img src={BG4} alt="" aria-hidden className="w-full h-full object-cover"
          style={{ opacity:0.08, filter:'saturate(0) brightness(0.5)', mixBlendMode:'multiply' }} />
      </motion.div>

      {/* Grain overlay and gradient */}
      <div className="absolute inset-0 z-0"
        style={{ background:'linear-gradient(135deg,#FF3B30 0%,#cc2a20 50%,#FF6A00 100%)' }} />

      {/* Top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.15] z-10" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">
        <motion.div style={{ y: textY }} className="max-w-[860px]">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-white/50" />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/50">Próximo passo</span>
            </div>

            <h2 className="font-black leading-[0.95] tracking-[-0.04em] text-white uppercase"
              style={{ fontSize:'clamp(2.6rem,7vw,7rem)' }}
            >
              Se a marca já é boa,
              <br />a comunicação precisa
              <br />
              <span style={{ WebkitTextStroke:'2px rgba(255,255,255,0.4)', color:'transparent' }}>
                SER CERTEIRA.
              </span>
            </h2>

            <p className="mt-8 text-[1rem] leading-[1.7] text-white/60 max-w-[44ch]">
              Uma proposta visual para transformar presença digital em autoridade, desejo e contato comercial.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contato"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-[0.95rem] text-[#FF3B30] bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Solicitar diagnóstico <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-[0.95rem] text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}