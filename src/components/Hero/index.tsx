import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* =========================
     BACKGROUND
  ========================= */

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["hsl(210, 20%, 98%)", "hsl(210, 29%, 8%)"],
  );

  const glowY = useTransform(scrollYProgress, [0, 1], ["-30%", "40%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.45, 0]);

  /* =========================
     PARALLAX
  ========================= */

  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["hsl(210, 29%, 24%)", "hsl(210, 20%, 98%)"],
  );

  return (
    <motion.section
      id="home"
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="relative max-h-[220vh] overflow-hidden"
    >
      {/* =========================
          BACKGROUND FX
      ========================= */}

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ top: glowY, opacity: glowOpacity }}
          className="absolute left-1/2 -translate-x-1/2
          w-[clamp(18rem,40vw,32rem)]
          h-[clamp(18rem,40vw,32rem)]
          rounded-full
          bg-[radial-gradient(circle,rgba(45,62,80,0.25),transparent_65%)]"
        />
      </div>

      {/* =========================
          HERO — STICKY
      ========================= */}

      <div className="sticky top-0 h-screen flex items-center">
        <motion.div
          style={{ color: textColor }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6"
        >
          <span className="block mb-8 text-xs tracking-[0.35em] uppercase opacity-60">
            Design com propósito
          </span>

          <motion.h1
            style={{ y: titleY }}
            className="text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.05]"
          >
            Não criamos apenas
            <br />
            identidades visuais.
            <br />
            <span className="font-semibold">Criamos sistemas de marca.</span>
          </motion.h1>

          <motion.p
            style={{ y: subtitleY }}
            className="mt-10 max-w-xl text-base md:text-lg opacity-70"
          >
            Estratégia, design e experiência digital para marcas que querem
            autoridade e crescimento real.
          </motion.p>
        </motion.div>
      </div>

      {/* =========================
          ATO 2
      ========================= */}

      <section className="relative h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ESQUERDA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-tight text-white/90">
              Estratégia antes da estética.
              <br />
              <span className="font-light text-white/60">
                Clareza antes do ruído.
              </span>
            </h2>

            <div className="h-1 w-24 bg-accent/50 my-8 rounded-full" />

            <p className="text-base md:text-lg text-white/70 max-w-md">
              Construímos marcas como sistemas vivos: coerentes, escaláveis e
              feitas para durar.
            </p>
          </motion.div>

          {/* DIREITA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12
            border-t lg:border-t-0 lg:border-l border-white/10
            pt-12 lg:pt-0 lg:pl-12"
          >
            {[
              ["BRANDING ESTRATÉGICO", "Posicionamento e diferenciação"],
              ["DESIGN DE ALTO IMPACTO", "Identidade visual e design systems"],
              ["EXPERIÊNCIAS DIGITAIS", "Interfaces claras e humanas"],
            ].map(([title, desc], i) => (
              <div key={title}>
                <span className="text-xs text-white/30 font-mono mr-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="inline text-xs tracking-[0.25em] uppercase text-white/80">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/60 ml-10 border-l border-white/10 pl-4">
                  {desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =========================
            SCROLL INDICATOR — RESPONSIVO
        ========================= */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center md:bottom-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 md:mb-3">
            Scroll
          </span>

          <div className="h-[2.5rem] md:h-[clamp(3rem,6vh,4.5rem)] overflow-hidden">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
                ease: "easeInOut",
              }}
              className="w-px h-6 md:h-8 bg-linear-to-b from-accent to-transparent"
            />
          </div>
        </motion.div>
      </section>
    </motion.section>
  );
};

export default Hero;
