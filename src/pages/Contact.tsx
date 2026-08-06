import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Contato — Autonomous Education Center (AEC)";
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const description =
      "Fale com a Autonomous Education Center (AEC): e-mail, telefone, endereço e canais oficiais para executivos e empresas.";
    setMeta("name", "description", description);
    setMeta("property", "og:title", "Contato — Autonomous Education Center (AEC)");
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", "https://autonomouseducationcenter.com.br/contato");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://autonomouseducationcenter.com.br/contato";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-navy pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-gold/20 text-gold font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-gold/30">
              Institucional
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground leading-tight mb-4">
              Fale com a <span className="text-gradient-gold">AEC</span>
            </h1>
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
              Estamos à disposição para apoiar executivos, empresários e empreendedores no desenvolvimento de
              competências mensuráveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Texto institucional + formulário */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Como podemos ajudar</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">TEXTO INSTITUCIONAL A DEFINIR</p>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">Formulário de contato</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  FORMULÁRIO A DEFINIR — placeholder aguardando definição dos campos e do destino das mensagens.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Endereço</h3>
                <p className="font-body text-sm text-muted-foreground">São Paulo, SP</p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">E-mail e telefone</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>
                    <a href="mailto:contato@aec.edu.br" className="hover:text-gold transition-colors">
                      contato@aec.edu.br
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                    <a href="tel:+551130000000" className="hover:text-gold transition-colors">
                      (11) 3000-0000
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Redes sociais</h3>
                <p className="font-body text-sm text-muted-foreground">REDES SOCIAIS A DEFINIR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Explore as linhas de disciplinas da AEC e escolha sua trilha.
          </p>
          <Link
            to="/disciplinas"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            Explorar Disciplinas <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
