import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Users, Clock, BookOpen, CheckCircle2, PlayCircle, Lock, MessageSquare, Download, FileText, Image, Film, X, Send, Paperclip } from "lucide-react";
import { sampleCourses, materials } from "@/data/courses";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const fileTypeIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  doc: FileText,
  image: Image,
  video: Film,
};

const fileTypeColors: Record<string, string> = {
  pdf: "text-destructive",
  doc: "text-blue-500",
  image: "text-green-500",
  video: "text-orange-500",
};

const chatMessages = [
  { sender: "professor", name: "Prof. Ricardo Almeida", time: "10:30", text: "Olá! Estou aqui para ajudar com suas dúvidas sobre o curso." },
  { sender: "student", time: "10:32", text: "Tenho uma dúvida sobre a Aula 3." },
  { sender: "professor", name: "Prof. Ricardo Almeida", time: "10:33", text: "Claro! Qual parte específica você gostaria que eu explicasse melhor?" },
  { sender: "professor", name: "Prof. Ricardo Almeida", time: "11:00", text: "Nota importante: Não esqueçam de completar o exercício prático antes da próxima aula!", isNote: true },
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState<"content" | "chat" | "materials">("content");
  const [chatOpen, setChatOpen] = useState(false);

  const course = sampleCourses.find((c) => c.id === courseId) || sampleCourses[0];
  const completedCount = course.content.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / course.content.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-16 md:pt-20">
        <div className="relative h-64 md:h-80">
          <img src={imageMap[course.image] || courseAdmin} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="text-xs font-body font-semibold text-gold uppercase tracking-wide">{course.discipline}</span>
            <h1 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mt-1">{course.title}</h1>
            <p className="font-body text-sm text-primary-foreground/70 mt-1">{course.instructor}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-4 py-4 text-sm font-body text-muted-foreground border-b border-border">
          <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-gold text-gold" /> <strong className="text-foreground">{course.rating}</strong></span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students.toLocaleString("pt-BR")} alunos</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
          <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.lessons} aulas</span>
        </div>

        {/* Progress */}
        <div className="py-5 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm font-medium text-foreground">Seu Progresso</span>
            <span className="font-body text-sm font-semibold text-foreground">{progress}%</span>
          </div>
          <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-gold rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-border mt-2">
          <button
            onClick={() => setActiveTab("content")}
            className={`font-body text-sm font-medium px-5 py-3 border-b-2 transition-colors ${activeTab === "content" ? "border-gold text-gold" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            Conteúdo do Curso
          </button>
          <button
            onClick={() => { setActiveTab("chat"); setChatOpen(true); }}
            className={`font-body text-sm font-medium px-5 py-3 border-b-2 transition-colors flex items-center gap-2 ${activeTab === "chat" ? "border-gold text-gold" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <MessageSquare className="w-4 h-4" /> Chat e Notas
          </button>
          <button
            onClick={() => setActiveTab("materials")}
            className={`font-body text-sm font-medium px-5 py-3 border-b-2 transition-colors flex items-center gap-2 ${activeTab === "materials" ? "border-gold text-gold" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <Download className="w-4 h-4" /> Materiais
          </button>
        </div>

        {/* Content */}
        <div className="py-6 pb-20">
          {activeTab === "content" && (
            <div className="space-y-3">
              {course.content.map((lesson) => (
                <div
                  key={lesson.number}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:shadow-card transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : lesson.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <PlayCircle className="w-5 h-5 text-gold" />
                    )}
                    <div>
                      <span className="font-body text-xs text-muted-foreground">Aula {lesson.number}</span>
                      <p className={`font-body text-sm font-medium ${lesson.locked ? "text-muted-foreground" : "text-foreground"}`}>
                        {lesson.title}
                      </p>
                    </div>
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{lesson.duration}</span>
                </div>
              ))}

              <div className="mt-8 p-5 bg-card rounded-lg border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-2">Sobre o Curso</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{course.description}</p>
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Chat e Notas</h3>
                  <p className="font-body text-xs text-muted-foreground">{course.title}</p>
                </div>
                <button onClick={() => setActiveTab("content")}><X className="w-5 h-5 text-muted-foreground" /></button>
              </div>

              <div className="p-4 space-y-4 min-h-[400px]">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "student" ? "justify-end" : "justify-start"}`}>
                    {msg.sender === "professor" && (
                      <div className="max-w-[80%]">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                            <Users className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <span className="font-body text-xs font-medium text-foreground">{msg.name}</span>
                          <span className="font-body text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <div className={`p-3 rounded-lg font-body text-sm ${msg.isNote ? "bg-gold/10 border border-gold/20" : "bg-muted"}`}>
                          {msg.isNote && <span className="text-xs font-semibold text-gold block mb-1">📌 Nota importante:</span>}
                          {msg.text}
                        </div>
                      </div>
                    )}
                    {msg.sender === "student" && (
                      <div className="max-w-[80%]">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                          <span className="font-body text-xs text-muted-foreground">{msg.time}</span>
                          <span className="font-body text-xs font-medium text-foreground">Você</span>
                          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                            <Users className="w-3 h-3 text-gold" />
                          </div>
                        </div>
                        <div className="p-3 rounded-lg font-body text-sm bg-gold/10 text-foreground">
                          {msg.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border flex items-center gap-3">
                <button className="text-muted-foreground hover:text-foreground">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-muted rounded-full px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-gold/30"
                />
                <button className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "materials" && (
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="font-heading font-semibold text-foreground mb-1 flex items-center gap-2">
                  <Download className="w-5 h-5" /> Materiais para Download
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Acesse os arquivos e materiais complementares do curso "{course.title}"
                </p>
              </div>

              {materials.map((mat, i) => {
                const Icon = fileTypeIcons[mat.type] || FileText;
                const color = fileTypeColors[mat.type] || "text-muted-foreground";
                return (
                  <div key={i} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:shadow-card transition-shadow">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${color}`} />
                      <div>
                        <p className="font-body text-sm font-medium text-foreground">{mat.name}</p>
                        <p className="font-body text-xs text-muted-foreground">{mat.size} • {mat.date}</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}

              <button className="w-full py-3 border border-border rounded-lg font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                Solicitar Material Adicional
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
