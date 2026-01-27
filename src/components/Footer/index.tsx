import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-[#232b36] via-[#232b36]/95 to-[#181e25] text-white overflow-hidden pt-24 pb-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Logo centralizada com fundo e contorno */}
        <div className="relative flex items-center justify-center mb-2">
          <div
            className="absolute w-24 h-24 rounded-full bg-white shadow-xl shadow-black/30 border border-white/30"
            style={{ zIndex: 1 }}
          />
          <motion.img
            src={logo}
            alt="AltusBranding"
            className="w-20 h-20 object-contain z-10 rounded-full"
            loading="lazy"
            whileHover={{ scale: 1.06, opacity: 1 }}
            initial={{ opacity: 0.92 }}
            style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)" }}
          />
        </div>
        {/* Frase */}
        <p className="max-w-2xl text-center text-white/70 text-lg leading-relaxed font-light">
          Criamos sistemas de marca que unem estratégia, estética e experiência
          para posicionar empresas com clareza, autoridade e crescimento
          sustentável.
        </p>
        {/* Social links com ícones */}
        <div className="flex gap-6 mt-2 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 hover:bg-accent/80 transition-colors p-3"
          >
            <RiInstagramFill size={22} className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 hover:bg-accent/80 transition-colors p-3"
          >
            <RiLinkedinFill size={22} className="text-white" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 hover:bg-accent/80 transition-colors p-3"
          >
            <RiWhatsappFill size={22} className="text-white" />
          </a>
        </div>
        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-xs tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} AltusBranding
          </p>
          <p className="text-xs tracking-widest uppercase text-white/30">
            Branding · Design · Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
