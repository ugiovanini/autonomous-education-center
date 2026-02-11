import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="AEC Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-gold/20 text-gold font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6 mt-16 border border-gold/30">
              Educação Executiva de Excelência
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Transforme sua{" "}
            <span className="text-gradient-gold">carreira</span>{" "}
            com gestão empresarial aplicada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Competências mensuráveis, aprendizagem por projetos reais e apoiada por IA agentica. 
            Trilhas stackáveis para executivos, empresários e estudantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="/disciplinas"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary font-body font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Explorar Cursos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-body font-medium px-8 py-3.5 rounded-lg hover:bg-primary-foreground/5 transition-colors"
            >
              Conhecer a AEC
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-8 text-primary-foreground/60 font-body text-sm"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold" />
              <span><strong className="text-primary-foreground">75+</strong> disciplinas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              <span><strong className="text-primary-foreground">10.000+</strong> alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span><strong className="text-primary-foreground">6</strong> linhas de disciplinas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
