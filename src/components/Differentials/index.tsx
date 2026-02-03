import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiClipboard, FiEye, FiHeart, FiStar, FiTool } from "react-icons/fi";
import { RiFingerprint2Fill } from "react-icons/ri";

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: RiFingerprint2Fill,
      title: "Design Autoral Funcional",
    },
    {
      icon: FiEye,
      title: "Visão Estratégica de Marca",
    },
    {
      icon: FiClipboard,
      title: "Processo Claro e Profissional",
    },
    {
      icon: FiHeart,
      title: "Atendimento Próximo e Consultivo",
    },
    {
      icon: FiTool,
      title: "Soluções Personalizadas",
    },
    {
      icon: FiStar,
      title: "Foco em Valor, Não Apenas Estética",
    },
  ];

  return (
    <section
      id="diferenciais"
      className="py-24 md:py-32 bg-secondary"
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
            Diferenciais
          </span>
          <h2 className="heading-section text-primary mb-6">
            Por que escolher a AltusBranding?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-soft hover-lift"
            >
              <div className="p-2.5 bg-accent/10 rounded-md">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-medium text-foreground text-base m-0 p-0">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
