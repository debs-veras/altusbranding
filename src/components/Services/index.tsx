import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RiGlobeFill,
  RiLayoutMasonryFill,
  RiPaletteFill,
  RiShareBoxFill,
} from "react-icons/ri";

const services = [
  {
    icon: RiPaletteFill,
    title: "Branding Estratégico",
    subtitle: "Construção e Reposicionamento de Marcas",
    items: [
      "Diagnóstico e briefing estratégico",
      "Posicionamento de marca",
      "Propósito, missão e valores",
      "Tom de voz e personalidade",
    ],
  },
  {
    icon: RiLayoutMasonryFill,
    title: "Identidade Visual",
    subtitle: "Design Consistente e Memorável",
    items: [
      "Criação de logotipo",
      "Sistema visual completo",
      "Paleta e tipografia",
      "Manual de marca",
    ],
  },
  {
    icon: RiGlobeFill,
    title: "Web Design",
    subtitle: "Experiências Digitais",
    items: [
      "UX/UI Design",
      "Sites institucionais",
      "Landing pages",
      "Design responsivo",
    ],
  },
  {
    icon: RiShareBoxFill,
    title: "Social Media",
    subtitle: "Presença Estratégica",
    items: [
      "Planejamento de conteúdo",
      "Criação de artes",
      "Identidade para feeds",
      "Stories e anúncios",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative py-28 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="block text-xs tracking-[0.35em] uppercase text-accent mb-4">
            Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
            Soluções completas
            <br />
            para marcas que querem crescer
          </h2>
          <p className="text-lg text-muted-foreground">
            Estratégia, design e presença digital conectados em um sistema
            consistente.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover="hover"
                className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 group overflow-hidden"
              >
                <div className="relative z-10 flex gap-6">
                  {/* Ícone */}
                  <motion.div
                    variants={{
                      hover: { rotate: -6, scale: 1.1 },
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-4 rounded-xl bg-accent/10 text-accent h-fit"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-5">
                      {service.subtitle}
                    </p>

                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Linha decorativa */}
                <motion.div
                  variants={{
                    hover: { scaleX: 1 },
                  }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-accent to-transparent origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
