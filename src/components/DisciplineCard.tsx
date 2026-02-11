import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Discipline } from "@/data/courses";

import courseAdmin from "@/assets/course-admin.jpg";
import courseContabil from "@/assets/course-contabil.jpg";
import courseEconomia from "@/assets/course-economia.jpg";
import courseProjetos from "@/assets/course-projetos.jpg";
import courseServicos from "@/assets/course-servicos.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDireito from "@/assets/course-direito.jpg";
import courseMatematica from "@/assets/course-matematica.jpg";
import coursePlanejamento from "@/assets/course-planejamento.jpg";
import courseFinancas from "@/assets/course-financas.jpg";

const imageMap: Record<string, string> = {
  administracao: courseAdmin,
  contabilidade: courseContabil,
  economia: courseEconomia,
  projetos: courseProjetos,
  servicos: courseServicos,
  marketing: courseMarketing,
  direito: courseDireito,
  matematica: courseMatematica,
  "planejamento-financeiro": coursePlanejamento,
  financas: courseFinancas,
};

interface DisciplineCardProps {
  discipline: Discipline;
}

const DisciplineCard = ({ discipline }: DisciplineCardProps) => {
  return (
    <Link
      to={`/disciplinas/${discipline.slug}`}
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={imageMap[discipline.slug] || courseAdmin}
          alt={discipline.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
        <h3 className="font-heading font-bold text-xl mb-1">{discipline.name}</h3>
        <p className="font-body text-xs text-primary-foreground/70 mb-3 line-clamp-2">{discipline.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-body text-xs font-medium text-gold">{discipline.courseCount} cursos</span>
          <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default DisciplineCard;
