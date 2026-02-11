import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function OdontoDetails() {
  const container = useRef(null);

  const screens = [
    {
      title: "Dashboard de Gestão",
      tag: "01 // ANALYTICS",
      desc: "Uma visão panorâmica da clínica. O dashboard consolida dados financeiros e operacionais, permitindo que o gestor tome decisões baseadas em números reais, como ticket médio e taxa de conversão de orçamentos.",
      color: "sky"
    },
    {
      title: "Agenda Inteligente",
      tag: "02 // WORKFLOW",
      desc: "Muito além de um calendário. O sistema gerencia conflitos de horários, envia lembretes automáticos via WhatsApp e organiza a fila de espera, otimizando o tempo de cadeira do dentista.",
      color: "blue"
    },
    {
      title: "Prontuário e Odontograma",
      tag: "03 // CLINICAL",
      desc: "Registro detalhado de cada face dental. O odontograma interativo permite marcar procedimentos com um clique, anexar radiografias e manter o histórico clínico 100% digital e seguro.",
      color: "indigo"
    },
    {
      title: "Módulo Financeiro",
      tag: "04 // ECONOMY",
      desc: "Controle total de entradas e saídas. Gestão de planos de tratamento parcelados, conciliação bancária e relatórios de inadimplência integrados diretamente ao prontuário do paciente.",
      color: "sky"
    }
  ];

  useGSAP(() => {
    // Animação de entrada do Header e Imagem
    gsap.from(".header-reveal", {
      y: 50, opacity: 0, duration: 1.2, ease: "power4.out", stagger: 0.2
    });

    gsap.from(".tooth-reveal", {
      scale: 0.8, opacity: 0, duration: 1.5, ease: "back.out(1.7)", delay: 0.5
    });

    // Animação das camadas conforme o Scroll
    const layers = gsap.utils.toArray(".project-layer");
    layers.forEach((layer, i) => {
      const isEven = i % 2 === 0;
      gsap.from(layer, {
        x: isEven ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: layer,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#0b1120] text-white overflow-hidden">
      
      {/* --- SEÇÃO 1: HERO (Título + Imagem do Dente) --- */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Lado Esquerdo: Textos e Techs */}
        <div className="w-full md:w-1/2 z-10 space-y-8 mt-20 md:mt-0">
          <Link to="/" className="header-reveal inline-flex items-center gap-2 text-sky-500 font-mono text-sm tracking-widest mb-6 group">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> [ VOLTAR PORTIFOLIO]
          </Link>
          
          <h1 className="header-reveal text-6xl md:text-8xl font-black italic tracking-tighter leading-none">
            Sistema <br /> <span className="text-sky-500">Odonto</span>
          </h1>
          
          <p className="header-reveal text-gray-400 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
            Gestão completa de prontuários e agendamentos, integrada nativamente com WhatsApp.
          </p>

          <div className="header-reveal">
            <h3 className="text-sky-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">// TECNOLOGIAS UTILIZADAS</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'React.js', color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/5' },
                { name: 'Node.js', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5' },
                { name: 'PostgreSQL', color: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/5' },
                { name: 'Tailwind CSS', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/5' },
                { name: 'GSAP', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/5' }
              ].map((tech) => (
                <span 
                  key={tech.name} 
                  className={`px-5 py-2 ${tech.bg} ${tech.border} border ${tech.color} rounded-full text-xs font-mono tracking-tighter hover:scale-105 transition-transform cursor-default shadow-[0_0_15px_rgba(0,0,0,0.2)]`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lado Direito: A Imagem do Dente */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative py-20 md:py-0">
          <div className="tooth-reveal relative">
            {/* Glow de fundo da imagem */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[80px] animate-pulse" />
            
            <img caminho-da-sua-imagem
              src="/dente.png" 
              alt="Dente Holográfico" 
              className="relative z-10 w-[300px] md:w-[500px] h-auto drop-shadow-[0_0_50px_rgba(14,165,233,0.3)] animate-float"
            />
          </div>
        </div>
      </section>

      {/* CAMADAS (LAYERS) */}
      <section className="py-20 space-y-40 md:space-y-60 border-t border-white/5 bg-[#0b1120]/50">
        {screens.map((screen, index) => (
          <div 
            key={index} 
            className={`project-layer flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20 px-6 md:px-20`}
          >
            {/* Bloco de Texto */}
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-sky-500 font-mono text-sm tracking-[0.3em]">{screen.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold italic">{screen.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{screen.desc}</p>
              <div className="flex gap-4 pt-4">
                <div className="h-[1px] w-12 bg-sky-500 self-center" />
                <span className="text-xs font-mono uppercase tracking-widest text-sky-500/60">Functional Module</span>
              </div>
            </div>

            {/* Bloco de Imagem/Preview */}
            <div className="w-full md:w-1/2 group relative">
              <div className={`absolute -inset-4 bg-${screen.color}-500/10 rounded-[3rem] blur-2xl group-hover:bg-${screen.color}-500/20 transition-all duration-700`} />
              <div className="relative aspect-video bg-[#1e293b] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center">
                 <div className="text-white/10 font-black text-8xl absolute select-none">{index + 1}</div>
                 <p className="text-sky-500/40 font-mono text-xs animate-pulse tracking-widest uppercase italic">
                   [ Preview_{screen.title.replace(/\s/g, '_')} ]
                 </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER NAVEGAÇÃO */}
      <footer className="py-40 text-center border-t border-white/5">
        <p className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-[0.5em]">Próxima Engenharia</p>
        <Link to="/projeto/caros" className="group text-5xl md:text-8xl font-black italic hover:text-emerald-500 transition-all">
          CAR<span className="text-emerald-500 group-hover:text-white transition-colors">OS</span> →
        </Link>
      </footer>

      {/* Estilos CSS (pode colocar no seu arquivo .css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />

    </main>
  );
}