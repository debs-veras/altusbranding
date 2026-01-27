import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiSearch, FiTrendingUp } from "react-icons/fi";
import { RiLightbulbFill, RiRocket2Fill } from "react-icons/ri";

const Method = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: FiSearch,
      title: "Diagnóstico",
      description:
        "Entendemos o negócio, estratégia de mercado e definimos o público.",
    },
    {
      number: "02",
      icon: RiLightbulbFill,
      title: "Criação",
      description:
        "Transformamos estratégia em design. Posicionamento, mensagem e diferenciais.",
    },
    {
      number: "03",
      icon: RiRocket2Fill,
      title: "Implementação",
      description:
        "Aplicamos a marca em todos os pontos de contato com excelência.",
    },
    {
      number: "04",
      icon: FiTrendingUp,
      title: "Evolução",
      description:
        "Acompanhamos e ajustamos para crescimento contínuo da marca.",
    },
  ];

  return (
    <section
      id="metodo"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-spaced text-accent mb-4 block">
            Nosso Método
          </span>
          <h2 className="heading-section mb-6">Como trabalhamos</h2>
          <p className="text-lg text-primary-foreground/70">
            Um processo claro e profissional que garante resultados consistentes
            para sua marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <span className="text-6xl font-bold text-primary-foreground/10">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 bg-accent rounded-lg">
                      <step.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-foreground/10 transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
