import { Github, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg text-gradient">SESSAME</p>
            <p className="text-sm text-muted-foreground">
              Suivi Et Suivi Simple avec IA pour l'Avancement Et la Motivation
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm">
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm">
              <Shield className="w-4 h-4" /> Confidentialité
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SESSAME. Open-source avec 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
