import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-xl text-gradient">
          SESSAME
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Fonctionnalités
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-accent text-primary-foreground font-semibold text-sm"
          >
            <Download className="w-4 h-4" />
            Télécharger
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="sm:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden bg-background border-b border-border px-6 py-4 space-y-3"
        >
          <a href="#features" onClick={() => setOpen(false)} className="block text-foreground font-medium">
            Fonctionnalités
          </a>
          <a href="#" className="block text-foreground font-medium">
            GitHub
          </a>
          <a href="#" className="block gradient-accent text-primary-foreground font-semibold text-center py-3 rounded-lg">
            Télécharger
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
