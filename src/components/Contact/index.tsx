import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@altusbranding.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99999-9999",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-spaced text-accent mb-4 block">Contato</span>
          <h2 className="heading-section text-primary mb-6">
            Vamos construir sua marca?
          </h2>
          <p className="text-lg text-muted-foreground">
            Está pronta para elevar o nível da sua marca. Entre em contato e
            vamos conversar sobre seu projeto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome"
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Empresa
                </label>
                <Input
                  placeholder="Nome da empresa"
                  className="bg-card border-border focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                  rows={5}
                  className="bg-card border-border focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold shadow-accent"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-secondary rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">
                Atendemos empresas que buscam:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Posicionamento profissional</li>
                <li>• Autoridade no mercado</li>
                <li>• Clareza de comunicação</li>
                <li>• Crescimento sustentável</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
