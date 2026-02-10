import { Link } from "react-router-dom";
import { Star, Clock, BookOpen, Users } from "lucide-react";
import type { Course } from "@/data/courses";

import courseAdmin from "@/assets/course-admin.jpg";
import courseContabil from "@/assets/course-contabil.jpg";
import courseEconomia from "@/assets/course-economia.jpg";
import courseProjetos from "@/assets/course-projetos.jpg";
import courseServicos from "@/assets/course-servicos.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";

const imageMap: Record<string, string> = {
  admin: courseAdmin,
  contabil: courseContabil,
  economia: courseEconomia,
  projetos: courseProjetos,
  servicos: courseServicos,
  marketing: courseMarketing,
};

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      to={`/curso/${course.id}`}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageMap[course.image] || courseAdmin}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 space-y-3">
        <span className="text-xs font-body font-semibold text-gold-dark uppercase tracking-wide">
          {course.discipline}
        </span>

        <h3 className="font-heading font-semibold text-card-foreground text-lg leading-snug line-clamp-2">
          {course.title}
        </h3>

        <p className="font-body text-sm text-muted-foreground">
          {course.instructor}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> {course.lessons} aulas
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-body font-semibold text-sm text-card-foreground">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-3.5 h-3.5" />
            <span className="text-xs font-body">{course.students.toLocaleString("pt-BR")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
