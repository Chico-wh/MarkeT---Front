import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

const BG5 = 'https://media.base44.com/images/public/69f6a57b10525393756c2a2c/c5ef2fa8e_generated_image.png';

const SERVICES = [
  'Estratégia de marca',
  'Campanhas publicitárias',
  'Mídia paga (Meta / Google / TikTok)',
  'Gestão de social media',
  'Landing page',
  'Funis & remarketing',
  'Direção criativa',
  'Identidade visual',
];

export default function ContactForm() {
  const [form, setForm]     = useState({ name:'', company:'', email:'', whatsapp:'', service:'', message:'' });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1600));
    setSending(false);
    setSent(true);
  };

  const inp = "w-full bg-transparent border-b border-white/[0.1] focus:border-[#FF3B30] py-4 text-[0.95rem] text-white placeholder:text-white/20 outline-none transition-colors duration-300";

  return (
    <section id="contato" className="relative bg-[#0f0f0f] overflow-hidden">
      {/* BG texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={BG5} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.05]"
          style={{ filter:'saturate(0.3) blur(4px)' }} />
        <div className="absolute inset-0"
          style={{ background:'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,59,48,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-start">

          {/* Left */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-[#FF3B30]" />
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/25">Contato</span>
            </div>
            <h2 className="font-black leading-[1.0] tracking-[-0.04em] text-white"
              style={{ fontSize:'clamp(2rem,4vw,3.8rem)' }}
            >
              Vamos construir
              <br />algo{' '}
              <em className="not-italic" style={{ color:'#FF3B30' }}>memorável</em>
              <br />juntos.
            </h2>
            <p className="mt-7 text-[0.95rem] leading-[1.8] text-white/35 max-w-[38ch]">
              Preencha o formulário e nossa equipe entra em contato para entender seu projeto e montar a estratégia ideal.
            </p>

            <ul className="mt-10 space-y-4">
              {['Resposta em até 24h', 'Diagnóstico sem custo', 'Sem compromisso inicial'].map(t => (
                <li key={t} className="flex items-center gap-3 text-[0.875rem] text-white/35">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.14}>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center p-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-[#FF3B30]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mensagem enviada.</h3>
                <p className="mt-2.5 text-[0.9rem] text-white/30">Falaremos em breve.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-0">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {[
                    { name:'name',     label:'Nome',       type:'text',  ph:'Seu nome'        },
                    { name:'company',  label:'Empresa',    type:'text',  ph:'Sua empresa'     },
                    { name:'email',    label:'E-mail',     type:'email', ph:'seu@email.com'   },
                    { name:'whatsapp', label:'WhatsApp',   type:'text',  ph:'(00) 00000-0000' },
                  ].map(({ name, label, type, ph }) => (
                    <div key={name} className="mb-8">
                      <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-1">
                        {label}
                      </label>
                      <input name={name} type={type} value={form[name]} onChange={set}
                        required={name === 'name' || name === 'email'}
                        placeholder={ph} className={inp} />
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-1">
                    Serviço de interesse
                  </label>
                  <select name="service" value={form.service} onChange={set}
                    className={inp + ' appearance-none cursor-pointer'}
                    style={{ WebkitAppearance:'none' }}
                  >
                    <option value="">Selecione</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mb-10">
                  <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-1">
                    Mensagem
                  </label>
                  <textarea name="message" value={form.message} onChange={set} rows={3}
                    placeholder="Conte sobre seu projeto..."
                    className={inp + ' resize-none'} />
                </div>

                <button type="submit" disabled={sending}
                  className="cta-shimmer relative overflow-hidden w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white text-[0.95rem] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,59,48,0.4)] active:translate-y-0 disabled:opacity-40"
                  style={{ background:'linear-gradient(135deg,#FF3B30,#cc2a20)' }}
                >
                  {sending
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</>
                    : <>Enviar solicitação <ArrowRight className="w-4 h-4" /></>
                  }
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}