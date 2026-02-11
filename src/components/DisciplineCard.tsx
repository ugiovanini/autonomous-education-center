import { Link } from "react-router-dom";
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
      className="group block"
    >
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
        <img
          src={imageMap[discipline.slug] || courseAdmin}
          alt={discipline.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-wider">
        {discipline.name}
      </span>
      <h3 className="font-heading font-bold text-foreground text-lg mt-1 group-hover:text-gold transition-colors">
        {discipline.description}
      </h3>
    </Link>
  );
};

export default DisciplineCard;
