import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CarDetails() {
  const container = useRef(null);

  const layers = [
    {
      title: "Telemetria em Tempo Real",
      tag: "01 // PERFORMANCE",
      desc: "Captura de dados diretamente do barramento CAN do veículo. Monitoramento de RPM, temperatura do óleo, pressão de turbo e lambda com atualização de 10ms.",
      color: "emerald"
    },
    {
      title: "Hardware Customizado",
      tag: "02 // EMBEDDED",
      desc: "Desenvolvimento de PCB própria baseada em ESP32, com isolamento galvânico para proteção contra picos de tensão do alternador e ruidos eletromagnéticos.",
      color: "cyan"
    },
    {
      title: "Interface de Pilotagem",
      tag: "03 // UI_UX",
      desc: "Dashboard focado em legibilidade sob luz solar intensa. Alertas visuais progressivos (Shift-light) para troca de marchas e avisos de segurança críticos.",
      color: "teal"
    },
    {
      title: "Log de Dados IoT",
      tag: "04 // CONNECTIVITY",
      desc: "Sincronização automática via Wi-Fi/4G com servidor remoto. Análise de histórico de voltas e comportamento do motor através de uma plataforma web dedicada.",
      color: "emerald"
    }
  ];

  useGSAP(() => {
    // Animação de entrada do Header e Imagem do Carro
    gsap.from(".header-reveal", {
      y: 50, opacity: 0, duration: 1.2, ease: "power4.out", stagger: 0.2
    });

    gsap.from(".car-reveal", {
      scale: 0.9, opacity: 0, duration: 1.5, ease: "power2.out", delay: 0.5
    });

    // Animação das camadas no Scroll
    const projectLayers = gsap.utils.toArray(".project-layer");
    projectLayers.forEach((layer, i) => {
      const isEven = i % 2 === 0;
      gsap.from(layer, {
        x: isEven ? -80 : 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: layer,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#0b1120] text-white overflow-hidden">
      
      {/* --- SEÇÃO 1: HERO (Título + Imagem do Carro/Motor) --- */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative">
        {/* Glow de fundo temático */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Lado Esquerdo: Textos e Techs */}
        <div className="w-full md:w-1/2 z-10 space-y-8 mt-20 md:mt-0">
          <Link to="/" className="header-reveal inline-flex items-center gap-2 text-emerald-500 font-mono text-sm tracking-widest mb-6 group">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> [ VOLTAR PORTFOLIO ]
          </Link>
          
          <h1 className="header-reveal text-6xl md:text-8xl font-black italic tracking-tighter leading-none">
            Sistema <br /> <span className="text-emerald-500">CarOs</span>
          </h1>
          
          <p className="header-reveal text-gray-400 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
            Inteligência embarcada e telemetria avançada para monitoramento veicular de alta performance.
          </p>

          <div className="header-reveal">
            <h3 className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">// TECH_STACK_EMBEDDED</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'C++', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/5' },
                { name: 'ESP32', color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/5' },
                { name: 'CAN-Bus', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5' },
                { name: 'React Dash', color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/5' },
                { name: 'MQTT', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/5' }
              ].map((tech) => (
                <span 
                  key={tech.name} 
                  className={`px-5 py-2 ${tech.bg} ${tech.border} border ${tech.color} rounded-full text-xs font-mono tracking-tighter hover:scale-105 transition-transform cursor-default shadow-[0_0_15px_rgba(16,185,129,0.1)]`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lado Direito: A Imagem Tech do Carro */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative py-20 md:py-0">
          <div className="car-reveal relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse" />
            <img 
              src="/carro_tech.png" 
              alt="CarOs Telemetry Concept" 
              className="relative z-10 w-[350px] md:w-[600px] h-auto drop-shadow-[0_0_50px_rgba(16,185,129,0.3)] animate-float-slow"
            />
          </div>
        </div>
      </section>

      {/* CAMADAS (LAYERS) */}
      <section className="py-20 space-y-40 md:space-y-60 border-t border-white/5 bg-[#0b1120]/50">
        {layers.map((layer, index) => (
          <div 
            key={index} 
            className={`project-layer flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20 px-6 md:px-20`}
          >
            {/* Bloco de Texto */}
            <div className="w-full md:w-1/2 space-y-6">
              <span className={`text-${layer.color}-500 font-mono text-sm tracking-[0.3em]`}>{layer.tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold italic">{layer.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{layer.desc}</p>
              <div className="flex gap-4 pt-4">
                <div className={`h-[1px] w-12 bg-${layer.color}-500 self-center`} />
                <span className={`text-xs font-mono uppercase tracking-widest text-${layer.color}-500/60`}>System Layer</span>
              </div>
            </div>

            {/* Bloco de Imagem/Preview */}
            <div className="w-full md:w-1/2 group relative">
              <div className={`absolute -inset-4 bg-${layer.color}-500/10 rounded-[3rem] blur-2xl group-hover:bg-${layer.color}-500/20 transition-all duration-700`} />
              <div className="relative aspect-video bg-[#1e293b] rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center">
                 <div className="text-white/5 font-black text-8xl absolute select-none">{index + 1}</div>
                 <p className="text-emerald-500/40 font-mono text-[10px] animate-pulse tracking-[0.3em] uppercase italic px-10 text-center">
                   [ {layer.title.replace(/\s/g, '_')}_VIEW_ENGAGED ]
                 </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER NAVEGAÇÃO - VOLTA PARA ODONTO OU HOME */}
      <footer className="py-40 text-center border-t border-white/5">
        <p className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-[0.5em]">Explorar Outro Projeto</p>
        <Link to="/projeto/odonto" className="group text-5xl md:text-8xl font-black italic hover:text-sky-500 transition-all">
          SISTEMA <span className="text-sky-500 group-hover:text-white transition-colors">ODONTO</span> →
        </Link>
      </footer>

      {/* Animação Personalizada */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}} />

    </main>
  );
}