import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importação essencial para as rotas
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const textRef = useRef(null);
  const scrollIconRef = useRef(null);
  const bgCircleRef = useRef(null);
  const canvasRef = useRef(null); 
  
  const aboutSectionRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // LÓGICA DO WALLPAPER INTERATIVO (NETWORKS) - DENSIDADE ALTA
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Velocidade levemente aumentada para dar mais vida
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = 1.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0ea5e9'; 
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Quantidade aumentada para preencher bem a tela
      const particleCount = window.innerWidth < 768 ? 70 : 180; 
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 130) { // Distância de conexão
            ctx.strokeStyle = `rgba(14, 165, 233, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useGSAP(() => {
    // Hero Animation
    gsap.from(textRef.current, { x: -100, opacity: 0, duration: 1.5, ease: "power4.out" });

    // Floating Background
    gsap.to(bgCircleRef.current, { 
      x: "25%", y: "20%", duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" 
    });

    // Scroll Animations
    gsap.from(".about-content", {
      y: 100, opacity: 0,
      scrollTrigger: { trigger: aboutSectionRef.current, start: "top 85%", end: "top 20%", scrub: 1.5 }
    });

    gsap.from(".proj-1", {
      x: -100, opacity: 0, duration: 1,
      scrollTrigger: { trigger: ".proj-1", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".proj-2", {
      x: 100, opacity: 0, duration: 1,
      scrollTrigger: { trigger: ".proj-2", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".contact-content", {
      scale: 0.9, opacity: 0, duration: 1,
      scrollTrigger: { trigger: contactRef.current, start: "top 80%" }
    });

    gsap.to(".mouse-dot", { y: 12, repeat: -1, yoyo: true, duration: 0.8, ease: "power1.inOut" });

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#0b1120] text-white overflow-x-hidden relative">
      
      {/* GLOW DE FUNDO */}
      <div ref={bgCircleRef} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- SEÇÃO 1: HERO --- */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
        
        {/* WALLPAPER INTERATIVO */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{ background: 'transparent' }}
        />

        <div ref={textRef} className="w-full md:w-1/2 px-10 md:px-20 z-10 relative pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            Guilherme <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic">Gouveia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-6 font-light tracking-[0.2em] uppercase">Fullstack Developer</p>
        </div>
        
        <div className="w-full md:w-1/2 h-full bg-[#0f172a]/50 border-l border-white/5 flex items-center justify-center relative overflow-hidden group z-10">
          <img 
            src="/minha-foto.png" 
            alt="Guilherme Gouveia" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent" />
        </div>
      </section>

      {/* --- SEÇÃO 2: SOBRE MIM --- */}
      <section ref={aboutSectionRef} className="min-h-screen flex items-center justify-center py-40">
        <div className="about-content max-w-4xl px-10">
          <h2 className="text-sky-500 font-mono text-sm tracking-[0.4em] uppercase mb-6 italic">// SOBRE MIM</h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight italic">
            Engenheiro de Software com foco em desenvolvimento <span className="text-sky-400">Full Stack</span> e fissurado por <span className="text-emerald-400">IoT</span>. 
          </p>
          <p className="text-gray-400 text-xl mt-8 leading-relaxed">
            Tenho experiência prática integrando hardware e software, conectando o mundo físico ao digital.
          </p>
          <div className="mt-12 space-y-4 font-mono text-sm">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              <span>REACT • NODE.JS • TYPESCRIPT</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span>FIRMWARE • ESP32 • C++</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: PROJETOS --- */}
      <section ref={projectRef} className="min-h-screen flex flex-col gap-40 items-center px-10 md:px-20 py-20 bg-[#0b1120] relative z-10 border-t border-white/5">
        
        {/* PROJETO 1 */}
        <div className="proj-1 flex flex-col md:flex-row w-full gap-20 items-center">
          <div className="project-details w-full md:w-1/2">
            <h2 className="text-sky-500 font-mono text-sm tracking-widest mb-4 italic">// PROJETOS EM DESTAQUE</h2>
            <h3 className="text-5xl font-bold mb-6 italic text-white">Sistema Odontológico</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Gestão completa de prontuários, agendamentos e fluxo financeiro para clínicas. 
            </p>
            <Link 
              to="/projeto/odonto" 
              className="inline-block border-b-2 border-sky-500 pb-1 font-bold hover:text-sky-400 hover:border-white transition-all group"
            >
              VER DETALHES COMPLETOS <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
                  <div className="w-full md:w-1/2 aspect-video bg-[#1e293b] rounded-[2.5rem] border-[12px] border-[#334155] overflow-hidden">
            <div className="w-full h-full relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BOwwKeFOkuc?autoplay=1&mute=1&loop=1&playlist=BOwwKeFOkuc"
                title="Demo - Sistema Odontológico"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>


             </div>

        {/* PROJETO 2 */}
        <div className="proj-2 flex flex-col md:flex-row-reverse w-full gap-20 items-center">
          <div className="project-details w-full md:w-1/2">
            <h2 className="text-sky-500 font-mono text-sm tracking-widest mb-4 italic">// SISTEMAS EMBARCADOS</h2>
            <h3 className="text-5xl font-bold mb-6 italic text-white">CarOs</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sistema operacional inteligente para monitoramento automotivo em tempo real. 
            </p>
            <Link 
              to="/projeto/caros" 
              className="inline-block border-b-2 border-sky-500 pb-1 font-bold hover:text-sky-400 hover:border-white transition-all group"
            >
              VER DETALHES COMPLETOS <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-[450px] bg-[#1e293b] rounded-[2.5rem] border-[12px] border-[#334155] flex items-center justify-center">
             <p className="text-emerald-500 font-mono text-[10px] animate-pulse uppercase italic tracking-widest">Aguardando Conexão...</p>
          </div>
        </div>
      </section>

     {/* --- SEÇÃO 5: CONTATO --- */}
<section ref={contactRef} className="min-h-screen flex items-center justify-center px-6 md:px-10 relative bg-[#0b1120] overflow-hidden">
  {/* Efeito de luz de fundo */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="contact-content max-w-5xl w-full text-center relative z-10">
    <header className="mb-16">
      <h2 className="text-sky-500 font-mono text-sm tracking-[0.4em] uppercase mb-6 italic">// DISPONÍVEL PARA PROJETOS</h2>
      <h3 className="text-5xl md:text-8xl font-black mb-6 italic tracking-tighter">
        VAMOS <span className="text-sky-500">CONVERSAR?</span>
      </h3>
      
      {/* LINHA INFORMATIVA DE REDIRECIONAMENTO */}
      <div className="flex items-center justify-center gap-4 text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase">
        <div className="h-[1px] w-8 bg-gray-800" />
        <span className="animate-pulse">Ao clicar, você será redirecionado para o serviço externo</span>
        <div className="h-[1px] w-8 bg-gray-800" />
      </div>
    </header>

    {/* Grid de Contatos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* CARD: E-MAIL */}
      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-sky-500 transition-all duration-500 group">
        <p className="text-gray-500 font-mono text-xs mb-4 tracking-widest uppercase group-hover:text-sky-500 transition-colors">E-mail</p>
        <a href="mailto:gulhermetechdev@gmail.com" className="text-lg md:text-xl font-bold text-white break-all flex flex-col gap-2">
          gulhermetechdev@gmail.com
          <span className="text-[10px] text-sky-500/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Abrir app de e-mail ↗</span>
        </a>
      </div>

      {/* CARD: LINKEDIN */}
      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-600 transition-all duration-500 group">
        <p className="text-gray-500 font-mono text-xs mb-4 tracking-widest uppercase group-hover:text-blue-500 transition-colors">LinkedIn</p>
        <a 
          href="https://www.linkedin.com/in/guilherme-gouveia-campos-40b26437b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex flex-col gap-2"
        >
          Guilherme Gouveia Campos
          <span className="text-[10px] text-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Ver Perfil Profissional ↗</span>
        </a>
      </div>

      {/* CARD: WHATSAPP */}
      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-emerald-500 transition-all duration-500 group">
        <p className="text-gray-500 font-mono text-xs mb-4 tracking-widest uppercase group-hover:text-emerald-500 transition-colors">WhatsApp</p>
        <a href="https://wa.me/5564999535250" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors flex flex-col gap-2">
          (64) 9 9953-5250
          <span className="text-[10px] text-emerald-500/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Iniciar conversa ↗</span>
        </a>
      </div>

    </div>

    {/* Footer simples */}
    <footer className="mt-32 opacity-30 group">
      <p className="text-gray-500 font-mono text-[9px] tracking-[0.8em] uppercase">
        Guilherme Tech • Fullstack Developer • 2026
      </p>
    </footer>
  </div>
</section>
      {/* INDICADOR DE SCROLL */}
      <div ref={scrollIconRef} className="fixed bottom-10 right-10 z-[100] flex flex-col items-center gap-4">
        <div className="w-[28px] h-[48px] border-2 border-sky-500/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <div className="mouse-dot w-1.5 h-1.5 bg-sky-500 rounded-full" />
        </div>
      </div>

    </main>
  );
}