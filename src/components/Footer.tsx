import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary-foreground">AEC</p>
                <p className="text-[10px] tracking-wider uppercase">Autonomous Education Center</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Treinamento e desenvolvimento de executivos, empresários e empreendedores com competências mensuráveis e aprendizagem por projetos.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Disciplinas</h4>
            <ul className="space-y-2 text-sm">
              {["Administração", "Contabilidade", "Economia", "Projetos", "Serviços", "Marketing"].map((d) => (
                <li key={d}>
                  <Link to="/disciplinas" className="hover:text-gold transition-colors">{d}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre a AEC</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Metodologia</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> contato@aec.edu.br</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> (11) 3000-0000</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs">
          © 2026 Autonomous Education Center. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
