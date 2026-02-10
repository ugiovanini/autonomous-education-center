import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { disciplines, sampleCourses, disciplineCourses } from "@/data/courses";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisciplineCard from "@/components/DisciplineCard";
import CourseCard from "@/components/CourseCard";

const Disciplines = () => {
  const { slug } = useParams();

  if (slug) {
    const discipline = disciplines.find((d) => d.slug === slug);
    const courses = sampleCourses.filter((c) => c.disciplineSlug === slug);
    const allCourseNames = disciplineCourses[slug] || [];

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28 pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <Link to="/disciplinas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar às disciplinas
            </Link>

            <div className="mb-10">
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                {discipline?.name || "Disciplina"}
              </h1>
              <p className="font-body text-muted-foreground">{discipline?.description}</p>
            </div>

            {courses.length > 0 && (
              <section className="mb-12">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Cursos em Destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
                Todas as Disciplinas ({allCourseNames.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allCourseNames.map((name, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-card transition-shadow">
                    <BookOpen className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
              Nossas Disciplinas
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Explore 6 linhas de disciplinas com mais de 75 cursos focados em gestão empresarial aplicada
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d) => (
              <DisciplineCard key={d.slug} discipline={d} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disciplines;
