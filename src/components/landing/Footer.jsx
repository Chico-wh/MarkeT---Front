import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const QUICK  = [
  { label:'Serviços', href:'#servicos' },
  { label:'Método',   href:'#metodo'   },
  { label:'Cases',    href:'#cases'    },
  { label:'Contato',  href:'#contato'  },
];
const SOCIAL = [
  { label:'Instagram', href:'#' },
  { label:'LinkedIn',  href:'#' },
  { label:'Behance',   href:'#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-white/[0.04]">
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background:'linear-gradient(to right,transparent,rgba(255,59,48,0.15),transparent)' }} />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
               <a href="#hero" className="flex items-end gap-0.5 group select-none">
  <img
    src="Logo.png"
    alt="Front"
    className="h-[120px] w-auto object-contain"
  />
</a>
            <p className="text-[0.85rem] text-white/25 leading-relaxed max-w-[30ch]">
              Comunicação, estratégia e performance.
            </p>
            <a href="#contato"
              className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#FF3B30]/50 hover:text-[#FF3B30] transition-colors"
            >
              Iniciar projeto <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/15 mb-5">Navegação</p>
            <ul className="space-y-3">
              {QUICK.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-[0.85rem] text-white/30 hover:text-white transition-colors duration-250">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/15 mb-5">Redes sociais</p>
            <ul className="space-y-3">
              {SOCIAL.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="group inline-flex items-center gap-1.5 text-[0.85rem] text-white/30 hover:text-white transition-colors duration-250">
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] text-white/15">
            © {new Date().getFullYear()} Front Publicidade. Todos os direitos reservados.
          </p>
          <p className="text-[9px] text-white/8 italic">
            Conceito visual não oficial criado como proposta de redesign.
          </p>
        </div>
      </div>
    </footer>
  );
}