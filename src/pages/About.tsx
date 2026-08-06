import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Gem, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Competências Mensuráveis", description: "Progressão por domínio demonstrado com evidências concretas (OBE/CBE)." },
  { icon: Sparkles, title: "Aprendizagem por Projetos", description: "Entregas reais e feedback imediato e acionável." },
  { icon: Gem, title: "Excelência Executiva", description: "TEXTO INSTITUCIONAL A DEFINIR" },
  { icon: Eye, title: "IA Agentica Ativa", description: "Tutor, avaliador e orquestrador inteligente que adapta o ensino ao seu nível." },
];

const About = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Sobre a AEC — Autonomous Education Center";
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
      "Conheça a Autonomous Education Center (AEC): missão, visão, valores, diferenciais e metodologia de educação executiva por competências.";
    setMeta("name", "description", description);
    setMeta("property", "og:title", "Sobre a AEC — Autonomous Education Center");
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", "https://autonomouseducationcenter.com.br/sobre");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://autonomouseducationcenter.com.br/sobre";
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
              Sobre a <span className="text-gradient-gold">AEC</span>
            </h1>
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
              Treinamento e desenvolvimento de executivos, empresários e empreendedores com competências mensuráveis e
              aprendizagem por projetos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Quem somos</h2>
          <p className="font-body text-muted-foreground leading-relaxed">TEXTO INSTITUCIONAL A DEFINIR</p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-2">Missão</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">TEXTO INSTITUCIONAL A DEFINIR</p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-2">Visão</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">TEXTO INSTITUCIONAL A DEFINIR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Diferenciais */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">Valores e diferenciais</h2>
          <p className="font-body text-muted-foreground mb-10">
            Metodologia de ponta conectando práticas e guias em projetos reais e dinâmicos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nossa metodologia</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Competências mensuráveis, aprendizagem por projetos reais e apoiada por IA agentica. Trilhas stackáveis para
            executivos, empresários e estudantes.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Do operacional ao estratégico, cada trilha é autônoma mas encadeável.
          </p>
        </div>
      </section>

      {/* Trilhas + CTA Contato */}
      <section className="py-16 md:py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Conheça nossas trilhas
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Explore as linhas de disciplinas e comece a desenvolver competências empresariais mensuráveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/disciplinas"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Explorar Disciplinas <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-body font-medium px-8 py-3.5 rounded-lg hover:bg-primary-foreground/5 transition-colors"
            >
              Falar com a AEC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
