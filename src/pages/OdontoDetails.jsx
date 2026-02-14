// src/pages/OdontoDetails.jsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OdontoDetails() {
  const container = useRef(null);

  /**
   * ✅ AGORA: TODAS as imagens ocupam o quadrado inteiro (cover)
   * ✅ HOVER: o card “vem pra frente”, aumenta e mostra a imagem inteira (contain)
   */

  // ---- CONFIG DOS BLOCOS (controla espaçamento do BLOCO inteiro) ----
  const blocoAtendimentoCfg = {
    sectionPy: "py-14",
    gap: "space-y-40 md:space-y-60",
  };
  const blocoDentistaCfg = {
    sectionPy: "py-14",
    gap: "space-y-40 md:space-y-60",
  };
  const blocoGerenciaCfg = {
    sectionPy: "py-14",
    gap: "space-y-40 md:space-y-60",
  };

  // ---- BLOCO 01: ATENDIMENTO ----
  const blocoAtendimento = [
    {
      title: "Login & Acesso",
      tag: "01 // AUTH",
      desc:
        "Acesso rápido e seguro ao sistema. Tela de login com experiência fluida e foco em usabilidade, garantindo que a recepção e a equipe entrem no fluxo de trabalho sem fricção.",
      color: "sky",
      img: "/odonto/Login.png",
      fit: "cover",
      imgPad: "p-0",
    },
    {
      title: "Agenda Inteligente",
      tag: "02 // WORKFLOW",
      desc:
        "Muito além de um calendário. O sistema gerencia conflitos de horários, envia lembretes automáticos via WhatsApp e organiza a fila de espera, otimizando o tempo de cadeira do dentista.",
      color: "indigo",
      img: "/odonto/agendamento.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[20/10]",
      frameHeight: "max-h-[420px]",
    },
  ];

  // ---- BLOCO 02: DENTISTA ----
  const blocoDentista = [
    {
      title: "Dashboard Dentista",
      tag: "03 // CLINICAL FLOW",
      desc:
        "Visão prática do dia a dia do consultório. Acompanhe atendimentos do dia, status dos pacientes e atalhos para o prontuário, reduzindo cliques e acelerando o fluxo clínico.",
      color: "blue",
      img: "/odonto/dashboarddentista.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[20/10]",
      frameHeight: "max-h-[420px]",
    },
    {
      title: "Prontuário Digital",
      tag: "04 // RECORDS",
      desc:
        "Histórico completo do paciente em um só lugar. Anotações clínicas, evolução, anexos e informações organizadas para consulta rápida durante o atendimento.",
      color: "sky",
      img: "/odonto/prontuario.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[4/3]",
      frameHeight: "max-h-[490px]",
    },
    {
      title: "Receitas & Prescrições",
      tag: "05 // RX",
      desc:
        "Geração de receitas e prescrições com poucos cliques. Padronização de modelos, dados do paciente já preenchidos e emissão pronta para impressão ou compartilhamento.",
      color: "indigo",
      img: "/odonto/receitas.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[16/10]",
      frameHeight: "max-h-[420px]",
    },
    {
      title: "Orçamentos & Plano de Tratamento",
      tag: "06 // BUDGET",
      desc:
        "Criação e gestão de orçamentos por procedimento. Valores, condições e status do plano de tratamento ficam claros para a equipe e para o paciente.",
      color: "blue",
      img: "/odonto/orcamentos.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[16/10]",
      frameHeight: "max-h-[420px]",
    },
  ];

  // ---- BLOCO 03: GERÊNCIA ----
  const blocoGerencia = [
    {
      title: "Dashboard Gerência",
      tag: "07 // MANAGEMENT",
      desc:
        "Visão geral da operação. Indicadores de performance, agendamentos, faturamento e status dos atendimentos em um painel único para tomada de decisão rápida.",
      color: "blue",
      img: "/odonto/dashboardgerente.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-video",
      frameHeight: "max-h-[480px]",
    },
    {
      title: "Cadastro de Médicos",
      tag: "08 // STAFF",
      desc:
        "Gestão de profissionais da clínica. Cadastro e edição de médicos/dentistas com especialidades, permissões e disponibilidade.",
      color: "sky",
      img: "/odonto/cadastrodent.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[16/10]",
      frameHeight: "max-h-[420px]",
    },
    {
      title: "Cadastro de Atendimentos",
      tag: "09 // FRONTDESK",
      desc:
        "Controle do fluxo da recepção. Cadastro de atendimentos, triagem e organização do histórico por paciente com rapidez e padronização.",
      color: "indigo",
      img: "/odonto/cadastroaten.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[16/10]",
      frameHeight: "max-h-[420px]",
    },
    {
      title: "Usuários & Acessos",
      tag: "10 // USERS",
      desc:
        "Controle de permissões e acessos ao sistema. Perfis de usuário, níveis, bloqueios e auditoria básica para segurança operacional.",
      color: "blue",
      img: "/odonto/usuarios.png",
      fit: "cover",
      imgPad: "p-0",
      frameAspect: "aspect-[16/10]",
      frameHeight: "max-h-[420px]",
    },
  ];

  const glowClassByColor = {
    sky: "bg-sky-500/10 group-hover:bg-sky-500/20",
    blue: "bg-blue-500/10 group-hover:bg-blue-500/20",
    indigo: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
  };

  useGSAP(
    () => {
      gsap.from(".header-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
      });

      gsap.from(".tooth-reveal", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

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
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: container }
  );

  const SectionTitle = ({ number, title }) => (
    <div className="px-6 md:px-20 pt-10">
      <div className="flex items-center gap-4">
        <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase italic">
          // BLOCO {number}
        </span>
        <div className="h-[1px] flex-1 bg-white/5" />
      </div>
      <h3 className="mt-4 text-3xl md:text-5xl font-black italic tracking-tighter">
        {title}
      </h3>
    </div>
  );

  // ✅ CORRIGIDO: só existe UM RenderScreen (sem duplicação)
  const RenderScreen = ({ screen, index, globalIndex }) => {
    const frameAspect = screen.frameAspect || "aspect-video";
    const frameHeight = screen.frameHeight || "";
    const frameWidth = screen.frameWidth || "";
    const frameClass = `${frameAspect} ${frameHeight} ${frameWidth}`.trim();

    return (
      <div
        className={`project-layer flex flex-col ${
          globalIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10 md:gap-20 px-6 md:px-20`}
      >
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-sky-500 font-mono text-sm tracking-[0.3em]">
            {screen.tag}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold italic">
            {screen.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">{screen.desc}</p>
          <div className="flex gap-4 pt-4">
            <div className="h-[1px] w-12 bg-sky-500 self-center" />
            <span className="text-xs font-mono uppercase tracking-widest text-sky-500/60">
              Functional Module
            </span>
          </div>
        </div>

        {/* ✅ HOVER: “vem pra frente” + no hover mostra a imagem inteira */}
        <div className="w-full md:w-1/2 group relative z-0 hover:z-50">
          <div
            className={`absolute -inset-4 ${
              glowClassByColor[screen.color] || glowClassByColor.sky
            } rounded-[3rem] blur-2xl transition-all duration-700`}
          />

          <div
            className={`relative ${frameClass} bg-[#1e293b] rounded-[2rem] border border-white/5 overflow-hidden
            transition-all duration-500 ease-out
            group-hover:scale-[1.10] group-hover:-translate-y-6 group-hover:shadow-2xl
            `}
          >
            {/* ✅ normal: ocupa tudo (cover) */}
            <img
              src={screen.img}
              alt={screen.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"
            />

            {/* ✅ hover: mostra tudo (contain) */}
            <img
              src={screen.img}
              alt={screen.title}
              className="absolute inset-0 w-full h-full object-contain bg-[#1e293b] transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
            />

            {/* brilho/reveal */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/5" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 to-transparent pointer-events-none" />

            <div className="text-white/10 font-black text-8xl absolute left-6 bottom-4 select-none">
              {index}
            </div>
          </div>
        </div>
      </div>
    );
  };

  let counter = 1;

  return (
    <main ref={container} className="bg-[#0b1120] text-white overflow-hidden">
      {/* --- HERO --- */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full md:w-1/2 z-10 space-y-8 mt-20 md:mt-0">
          <Link
            to="/"
            className="header-reveal inline-flex items-center gap-2 text-sky-500 font-mono text-sm tracking-widest mb-6 group"
          >
            <span className="group-hover:-translate-x-2 transition-transform">
              ←
            </span>{" "}
            [ VOLTAR PORTIFOLIO]
          </Link>

          <h1 className="header-reveal text-6xl md:text-8xl font-black italic tracking-tighter leading-none">
            Sistema <br /> <span className="text-sky-500">Odonto</span>
          </h1>

          <p className="header-reveal text-gray-400 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
            Gestão completa de prontuários e agendamentos, integrada nativamente
            com WhatsApp.
          </p>

          <div className="header-reveal">
            <h3 className="text-sky-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
              // TECNOLOGIAS UTILIZADAS
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  name: "React.js",
                  color: "text-sky-400",
                  border: "border-sky-500/30",
                  bg: "bg-sky-500/5",
                },
                {
                  name: "Node.js",
                  color: "text-emerald-400",
                  border: "border-emerald-500/30",
                  bg: "bg-emerald-500/5",
                },
                {
                  name: "PostgreSQL",
                  color: "text-indigo-400",
                  border: "border-indigo-500/30",
                  bg: "bg-indigo-500/5",
                },
                {
                  name: "Tailwind CSS",
                  color: "text-cyan-400",
                  border: "border-cyan-500/30",
                  bg: "bg-cyan-500/5",
                },
                {
                  name: "GSAP",
                  color: "text-yellow-400",
                  border: "border-yellow-500/30",
                  bg: "bg-yellow-500/5",
                },
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

        <div className="w-full md:w-1/2 flex justify-center items-center relative py-20 md:py-0">
          <div className="tooth-reveal relative">
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[80px] animate-pulse" />
            <img
              src="/odonto/dente.png"
              alt="Dente Holográfico"
              className="relative z-10 w-[300px] md:w-[500px] h-auto drop-shadow-[0_0_50px_rgba(14,165,233,0.3)] animate-float"
            />
          </div>
        </div>
      </section>

      {/* --- RESUMO (ANTES DO BLOCO 01) --- */}
      <section className="py-20 border-t border-white/5 bg-[#0b1120]/50">
        <div className="px-6 md:px-20">
          <div className="max-w-4xl">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase italic">
              // RESUMO
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-black italic tracking-tighter">
              Visão Geral do Sistema
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                O sistema foi pensado para ser usado em ambientes odontológicos,
                oferecendo controle de pacientes e organização do fluxo de
                atendimentos, reduzindo faltas e melhorando a rotina da clínica.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Ele facilita a confirmação ou ausência em diferentes tipos de
                agendamentos, trazendo mais previsibilidade para a agenda e
                otimizando o tempo da equipe.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Além disso, conta com integração com o WhatsApp, permitindo
                comunicação rápida com os pacientes por meio de lembretes e
                confirmações automáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BLOCO 01: ATENDIMENTO --- */}
      <section
        className={`${blocoAtendimentoCfg.sectionPy} border-t border-white/5 bg-[#0b1120]/50`}
      >
        <SectionTitle number="01" title="Atendimento" />
        <div className={`mt-14 ${blocoAtendimentoCfg.gap}`}>
          {blocoAtendimento.map((screen, i) => {
            const localIndex = counter;
            counter += 1;
            return (
              <RenderScreen
                key={`at-${i}`}
                screen={screen}
                index={localIndex}
                globalIndex={localIndex - 1}
              />
            );
          })}
        </div>
      </section>

      {/* --- BLOCO 02: DENTISTA --- */}
      <section
        className={`${blocoDentistaCfg.sectionPy} border-t border-white/5 bg-[#0b1120]/50`}
      >
        <SectionTitle number="02" title="Dentista" />
        <div className={`mt-14 ${blocoDentistaCfg.gap}`}>
          {blocoDentista.map((screen, i) => {
            const localIndex = counter;
            counter += 1;
            return (
              <RenderScreen
                key={`den-${i}`}
                screen={screen}
                index={localIndex}
                globalIndex={localIndex - 1}
              />
            );
          })}
        </div>
      </section>

      {/* --- BLOCO 03: GERÊNCIA --- */}
      <section
        className={`${blocoGerenciaCfg.sectionPy} border-t border-white/5 bg-[#0b1120]/50`}
      >
        <SectionTitle number="03" title="Gerência" />
        <div className={`mt-14 ${blocoGerenciaCfg.gap}`}>
          {blocoGerencia.map((screen, i) => {
            const localIndex = counter;
            counter += 1;
            return (
              <RenderScreen
                key={`ge-${i}`}
                screen={screen}
                index={localIndex}
                globalIndex={localIndex - 1}
              />
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 text-center border-t border-white/5">
        <p className="text-gray-500 font-mono text-sm mb-6 uppercase tracking-[0.5em]">
          Próxima Engenharia
        </p>
        <Link
          to="/projeto/caros"
          className="group text-5xl md:text-8xl font-black italic hover:text-emerald-500 transition-all"
        >
          CAR
          <span className="text-emerald-500 group-hover:text-white transition-colors">
            OS
          </span>{" "}
          →
        </Link>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
        `,
        }}
      />
    </main>
  );
}
