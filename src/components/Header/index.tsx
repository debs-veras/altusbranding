import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { RiLinkedinFill, RiInstagramFill, RiBehanceFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useMemo } from "react";

// Cores da marca
const COLORS = {
  primary: "#2C3746",
  accent: "#FF1B1B",
  secondary: "#3A506B",
  light: "#F7F8FA",
  dark: "#1A202C",
  gradient: "linear-gradient(135deg, #2C3746 0%, #FF1B1B 100%)",
  gradientReverse: "linear-gradient(135deg, #FF1B1B 0%, #2C3746 100%)",
};

// Componente de Link com Animações Complexas
type DesignNavLinkProps = {
  href: string;
  label: string;
  index: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  active?: boolean;
};

// Social Media Icons com efeitos
type SocialIconProps = {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  href: string;
  color: string;
};

const DesignNavLink = ({
  href,
  label,
  index,
  onClick,
  active = false,
}: DesignNavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  // Precompute random offsets for particles
  const generateParticleOffsets = () =>
    Array.from({ length: 8 }, () => ({
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 80,
    }));
  const particleOffsets = useMemo(() => generateParticleOffsets(), []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const xVal = e.clientX - rect.left - rect.width / 2;
      const yVal = e.clientY - rect.top - rect.height / 2;
      x.set(xVal);
      y.set(yVal);
      setMousePosition({ x: xVal, y: yVal });
    }
  };

  return (
    <motion.a
      ref={linkRef}
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      title={active ? `${label} (ativo)` : label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      onMouseMove={handleMouseMove}
      className="relative px-2 py-3 overflow-hidden rounded-2xl group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 100,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Texto com gradiente animado */}
      <motion.span
        className="relative z-10 font-semibold tracking-wider flex items-center justify-between"
        animate={{
          backgroundImage:
            isHovered || active
              ? COLORS.gradientReverse
              : `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
          backgroundSize: isHovered || active ? "200% 100%" : "100% 100%",
          backgroundPosition: isHovered || active ? "100% 0" : "0 0",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {label}
        <motion.span
          animate={{
            opacity: isHovered || active ? 1 : 0,
            x: isHovered || active ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronRight className="ml-2" />
        </motion.span>
      </motion.span>

      {/* Underline animado (ativo/hover) */}
      <motion.div
        className="absolute left-4 right-4 bottom-1 h-[2px] rounded-full"
        initial={false}
        animate={{
          scaleX: isHovered || active ? 1 : 0,
          opacity: isHovered || active ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          background: COLORS.accent,
          transformOrigin: "left",
        }}
      />

      {/* Efeito de partículas no hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {particleOffsets.map((offset, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                initial={{
                  x: mousePosition.x + 25,
                  y: mousePosition.y + 15,
                  scale: 0,
                }}
                animate={{
                  x: mousePosition.x + offset.x,
                  y: mousePosition.y + offset.y,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                style={{
                  background: COLORS.accent,
                  filter: "blur(1px)",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sombra projetada 3D */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          filter: "blur(20px)",
          background: COLORS.accent,
          opacity: isHovered ? 0.1 : 0,
        }}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
      />
    </motion.a>
  );
};
// Botão de CTA Premium
const PremiumCTAButton = ({ onClick }: { onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    onClick?.();
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-6 py-2 rounded-full overflow-hidden group cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background com gradiente animado */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isHovered ? COLORS.gradientReverse : COLORS.gradient,
          rotate: isHovered ? 180 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Efeito de onda no clique */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: "rgba(255, 255, 255, 0.3)" }}
        />
      )}

      {/* Texto com efeito */}
      <motion.span
        className="relative z-10 font-bold tracking-widest text-white flex items-center"
        animate={{
          textShadow: isHovered
            ? "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 27, 27, 0.6)"
            : "0 0 20px rgba(255, 255, 255, 0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        <h2>Começar Projeto</h2>
        <motion.span
          animate={{
            x: isHovered ? 5 : 0,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <FiChevronRight size={20} />
        </motion.span>
      </motion.span>

      {/* Partículas que emanam do botão */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                animate={{
                  x: `${50 + Math.cos(i * 0.5) * 100}%`,
                  y: `${50 + Math.sin(i * 0.5) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                style={{
                  background: "white",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const SocialIcon = ({ icon: Icon, href, color }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-10 h-10 rounded-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background animado */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isHovered
            ? `radial-gradient(circle, ${color} 0%, transparent 70%)`
            : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border animado */}
      <motion.div
        className="absolute inset-0 rounded-full border"
        animate={{
          borderColor: isHovered ? color : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ícone */}
      <Icon
        className="relative z-10"
        size={18}
        color={isHovered ? "white" : COLORS.primary}
      />

      {/* Efeito de brilho */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle, ${color}40, transparent 70%)`,
            filter: "blur(8px)",
          }}
        />
      )}
    </motion.a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Início" },
      { id: "servicos", label: "Serviços" },
      { id: "metodo", label: "Método" },
      { id: "portfolio", label: "Portfólio" },
      { id: "clientes", label: "Clientes" },
      { id: "contato", label: "Contato" },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header Principal */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.2,
        }}
      >
        {/* Background com efeitos */}
        <motion.div
          className="absolute inset-0 backdrop-blur-xl"
          animate={{
            background: isScrolled
              ? `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(255, 255, 255, 0.98) 100%)`
              : `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.88) 0%,
                  rgba(255, 255, 255, 0.92) 100%)`,
            borderBottom: isScrolled
              ? `1px solid rgba(44, 55, 70, 0.15)`
              : `1px solid rgba(44, 55, 70, 0.08)`,
            boxShadow: isScrolled
              ? `0 10px 40px rgba(44, 55, 70, 0.12),
                 0 0 0 1px rgba(255, 255, 255, 0.6)`
              : `0 5px 30px rgba(44, 55, 70, 0.08)`,
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <motion.div
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("home")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <a href="#home" aria-label="Ir para o início">
                <img
                  src={logo}
                  alt="Logo AltusBranding"
                  className="w-48 h-auto object-contain"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <DesignNavLink
                  key={item.id}
                  href={`#${item.id}`}
                  label={item.label}
                  index={index}
                  active={activeSection === item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                />
              ))}

              {/* Botão CTA */}
              <div className="ml-4">
                <PremiumCTAButton onClick={() => scrollToSection("contato")} />
              </div>

              {/* Social Media */}
              <div className="ml-6 flex items-center space-x-2">
                <SocialIcon
                  icon={RiLinkedinFill}
                  href="https://linkedin.com"
                  color="#0077B5"
                />
                <SocialIcon
                  icon={RiInstagramFill}
                  href="https://instagram.com"
                  color="#E4405F"
                />
                <SocialIcon
                  icon={RiBehanceFill}
                  href="https://behance.net"
                  color="#0057FF"
                />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-12 h-12 flex items-center justify-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {/* Animated hamburger icon */}
              <div className="relative w-6 h-6">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute left-0 w-6 h-0.5 rounded-full"
                    style={{ background: COLORS.primary }}
                    animate={{
                      top: isMenuOpen ? "50%" : `${i * 7}px`,
                      rotate: isMenuOpen
                        ? i === 0
                          ? 45
                          : i === 2
                            ? -45
                            : 0
                        : 0,
                      opacity: isMenuOpen && i === 1 ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                ))}
              </div>

              {/* Button glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  background: `radial-gradient(circle at center, ${COLORS.accent}20, transparent 70%)`,
                }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="lg:hidden fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.dark}DD, ${COLORS.primary}DD)`,
                }}
              />

              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-full z-50"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {/* Menu content */}
                <div className="h-full bg-white/95 backdrop-blur-xl border-l border-gray-100 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C3746' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "30px",
                      }}
                    />
                  </div>

                  {/* Menu header */}
                  <div className="relative p-8 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <img
                        src={logo}
                        alt="ALTUSBRANDING"
                        className="h-10 w-auto"
                      />
                      <div className="text-sm font-medium text-gray-500">
                        Navegação
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="relative p-6 space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.id;
                      return (
                        <motion.button
                          key={item.id}
                          className="w-full text-left"
                          onClick={() => scrollToSection(item.id)}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <div
                            className={`p-4 rounded-xl transition-colors group relative overflow-hidden ${
                              isActive
                                ? "bg-linear-to-r from-white/95 to-gray-50 shadow-md"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {/* Background effect */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${COLORS.accent}10, transparent)`,
                              }}
                            />

                            <div className="flex items-center justify-between relative z-10">
                              <span
                                className={`font-semibold ${isActive ? "text-gray-900" : "text-gray-800"}`}
                              >
                                {item.label}
                              </span>
                              <motion.div
                                className="w-2 h-2 rounded-full"
                                whileHover={{ scale: 1.5 }}
                                animate={{ scale: isActive ? 1.4 : 1 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                  background: isActive
                                    ? COLORS.accent
                                    : COLORS.accent,
                                }}
                              />
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Menu footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <PremiumCTAButton
                      onClick={() => {
                        scrollToSection("contato");
                        setIsMenuOpen(false);
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
