import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiTarget, FiTrendingUp } from "react-icons/fi";
import { RiSparkling2Fill, RiUserSearchFill } from "react-icons/ri";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: FiTarget,
      title: "Diferenciar sua empresa",
    },
    {
      icon: RiSparkling2Fill,
      title: "Gerar percepção de valor",
    },
    {
      icon: FiTrendingUp,
      title: "Comunicar autoridade",
    },
    {
      icon: RiUserSearchFill,
      title: "Sustentar crescimento",
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-spaced text-accent mb-4 block">
              Nosso Posicionamento
            </span>
            <h2 className="heading-section text-primary mb-6">
              Não criamos apenas identidades visuais
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Criamos sistemas de marca pensados estrategicamente. Unimos
              estratégia, estética e performance para transformar ideias em
              marcas com propósito e presença forte no mercado.
            </p>
            <p className="text-foreground font-medium">
              Cada projeto nasce da estratégia e termina na experiência do
              usuário.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-lg hover-lift"
              >
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
