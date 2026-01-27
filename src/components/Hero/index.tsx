import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* =========================
     BACKGROUND LAYERS
  ========================= */

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["hsl(210, 20%, 98%)", "hsl(210, 29%, 8%)"],
  );

  const glowY = useTransform(scrollYProgress, [0, 1], ["-30%", "40%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.45, 0]);

  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.25]);

  /* =========================
     PARALLAX CAMADAS
  ========================= */

  const layerSlow = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const layerMid = useTransform(scrollYProgress, [0, 1], [0, -90]);

  /* =========================
     TEXTO
  ========================= */

  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);

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
      className="relative h-[260vh] overflow-hidden"
    >
      {/* =========================
          BACKGROUND IMERSIVO
      ========================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Glow principal */}
        <motion.div
          style={{ top: glowY, opacity: glowOpacity }}
          className="absolute left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full
          bg-[radial-gradient(circle,rgba(45,62,80,0.25),transparent_65%)]"
        />

        {/* Sombra de profundidade */}
        <motion.div
          style={{ opacity: shadowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/80"
        />

        {/* Noise premium */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>\')',
          }}
        />
      </div>

      {/* =========================
          HERO STICKY
      ========================= */}

      <div className="sticky top-0 h-screen flex items-center">
        <motion.div
          style={{ color: textColor }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6"
        >
          {/* EYEBROW */}
          <motion.span
            style={{ y: layerSlow }}
            className="block mb-8 text-xs tracking-[0.35em] uppercase opacity-60"
          >
            Design com propósito
          </motion.span>

          {/* TÍTULO (mask reveal) */}
          <div className="overflow-hidden">
            <motion.h1
              style={{ y: titleY }}
              className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-light leading-[1.06] tracking-tight"
            >
              Não criamos apenas
              <br />
              identidades visuais.
              <br />
              <span className="font-semibold">Criamos sistemas de marca.</span>
            </motion.h1>
          </div>

          {/* Linha accent */}
          <motion.div
            style={{ y: layerMid }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-accent mt-10"
          />

          {/* TEXTO */}
          <motion.p
            style={{ y: subtitleY }}
            className="mt-10 max-w-xl text-lg opacity-70 leading-relaxed"
          >
            Estratégia, design e experiência digital para marcas que buscam
            autoridade, clareza e crescimento sustentável.
          </motion.p>
        </motion.div>
      </div>

      {/* =========================
          ATO 2 — TRANSIÇÃO
      ========================= */}

      <section className="relative h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-background"
        >
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-tight">
            Estratégia antes da estética.
            <br />
            <span className="font-semibold">Clareza antes do ruído.</span>
          </h2>

          <div className="mt-8 flex flex-wrap gap-8 md:gap-12">
            {[
              "BRANDING ESTRATÉGICO",
              "DESIGN DE ALTO IMPACTO",
              "EXPERIÊNCIAS DIGITAIS",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[0.25em] uppercase opacity-60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.section>
  );
};

export default Hero;
