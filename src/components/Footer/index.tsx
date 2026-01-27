import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(210,29%,8%)]">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Brand */}
          <div>
            <motion.img
              src={logo}
              alt="AltusBranding"
              className="w-20 h-20 object-contain mb-10 opacity-90"
              loading="lazy"
              whileHover={{ opacity: 1 }}
            />

            <p className="max-w-xl text-white/60 text-lg leading-relaxed">
              Criamos sistemas de marca que unem estratégia, estética e
              experiência para posicionar empresas com clareza, autoridade e
              crescimento sustentável.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 lg:items-end">
            <span className="text-xs tracking-[0.35em] uppercase text-white/30">
              Conecte-se
            </span>

            <div className="flex gap-8 text-sm uppercase tracking-wider">
              {["Instagram", "LinkedIn", "WhatsApp"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
