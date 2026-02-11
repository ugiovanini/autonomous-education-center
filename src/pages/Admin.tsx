import { useState, useCallback } from "react";
import { disciplines } from "@/data/courses";
import { useDisciplineVisibility } from "@/hooks/use-discipline-visibility";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ShieldCheck, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

// SHA-256 hash for admin access verification
const ADMIN_HASH = "b0fd319f82ab39f8dc7635b1d83c3e3cad3bdb4573734a65dbfc1c0c00d4bfb4";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { visibility, toggle } = useDisciplineVisibility();

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      const hash = await sha256(password);
      if (hash === ADMIN_HASH) {
        setAuthenticated(true);
      } else {
        setError("Senha incorreta");
      }
      setLoading(false);
    },
    [password]
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-heading font-bold text-2xl text-foreground">Painel Administrativo</h1>
            <p className="font-body text-sm text-muted-foreground mt-1">Digite a senha para acessar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
              autoFocus
            />
            {error && <p className="text-destructive text-sm font-body">{error}</p>}
            <Button type="submit" className="w-full h-12" disabled={loading || !password}>
              {loading ? "Verificando..." : "Entrar"}
            </Button>
          </form>

          <Link to="/" className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <h1 className="font-heading font-bold text-xl text-foreground">Administração</h1>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-semibold text-lg text-foreground mb-1">Visibilidade das Áreas</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Ative ou desative a exibição de cada área e suas disciplinas no site.
          </p>

          <div className="space-y-3">
            {disciplines.map((d) => {
              const visible = visibility[d.slug] !== false;
              return (
                <div
                  key={d.slug}
                  className="flex items-center justify-between p-4 bg-card rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3">
                    {visible ? (
                      <Eye className="w-5 h-5 text-gold" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div>
                      <span className="font-body font-medium text-foreground">{d.name}</span>
                      <p className="font-body text-xs text-muted-foreground">{d.courseCount} cursos</p>
                    </div>
                  </div>
                  <Switch checked={visible} onCheckedChange={() => toggle(d.slug)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
