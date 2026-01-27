import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useToast } from "../../hooks/use-toast";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { RiMailFill } from "react-icons/ri";

/* ---------------- schema ---------------- */
const contactSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  empresa: z.string().optional(),
  mensagem: z.string().min(1, "Mensagem obrigatória"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (
    _: ContactFormData,
    e?: React.BaseSyntheticEvent,
  ) => {
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e?.target,
        import.meta.env.VITE_EMAILJS_USER_ID,
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      reset();
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: RiMailFill, label: "Email", value: "contato@altusbranding.com" },
    { icon: FiPhone, label: "Telefone", value: "(11) 99999-9999" },
    { icon: FiMapPin, label: "Localização", value: "Fortaleza, CE" },
  ];

  return (
    <section id="contato" ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent tracking-widest uppercase text-sm block mb-4">
            Contato
          </span>
          <h2 className="heading-section text-primary mb-6">
            Vamos construir sua marca?
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Nome</label>
                <Input {...register("nome")} placeholder="Seu nome" />
                {errors.nome && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Email</label>
                <Input {...register("email")} placeholder="seu@email.com" />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Empresa</label>
              <Input {...register("empresa")} placeholder="Nome da empresa" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Mensagem</label>
              <Textarea
                {...register("mensagem")}
                rows={5}
                placeholder="Conte-nos sobre seu projeto..."
                className="resize-none"
              />
              {errors.mensagem && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold shadow-accent cursor-pointer"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar Mensagem
                  <FiSend className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.form>

          {/* info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-muted rounded-xl">
              <h3 className="font-semibold mb-2">
                Trabalhamos com marcas que buscam:
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
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
