import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import DisciplineCard from "@/components/DisciplineCard";
import CourseCard from "@/components/CourseCard";
import { disciplines, sampleCourses } from "@/data/courses";
import { Target, Brain, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Competências Mensuráveis",
    description: "Progressão por domínio demonstrado com evidências concretas (OBE/CBE).",
  },
  {
    icon: Brain,
    title: "IA Agentica na ALP",
    description: "Tutor, avaliador e orquestrador inteligente que adapta o ensino ao seu nível.",
  },
  {
    icon: TrendingUp,
    title: "Trilhas Stackáveis",
    description: "Do operacional ao estratégico — cada trilha é autônoma mas encadeável.",
  },
  {
    icon: Sparkles,
    title: "Aprendizagem por Projetos",
    description: "PBL/CBL com entregas reais e feedback imediato e acionável.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      {/* Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
              Por que a <span className="text-gradient-gold">AEC</span>?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Metodologia de ponta conectando práticas consolidadas por Harvard, MIT Sloan e FGV
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                Linhas de Disciplinas
              </h2>
              <p className="font-body text-muted-foreground">10 áreas de conhecimento essenciais</p>
            </div>
            <Link to="/disciplinas" className="hidden md:inline-flex font-body text-sm font-medium text-gold hover:text-gold-dark transition-colors">
              Ver todas →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <DisciplineCard discipline={d} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
              Cursos em Destaque
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Comece sua jornada com nossos cursos mais populares
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Pronto para transformar sua gestão?
            </h2>
            <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Junte-se a milhares de profissionais que já estão desenvolvendo competências empresariais mensuráveis.
            </p>
            <Link
              to="/disciplinas"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Começar Agora
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
