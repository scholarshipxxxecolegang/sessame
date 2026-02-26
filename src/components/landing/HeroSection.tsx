import { motion } from "framer-motion";
import { Download, Github, ChevronDown } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              ✨ Gratuit • Open-Source • Sans Pub
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Tes projets +{" "}
              <span className="text-gradient">Un coach IA</span>
              <br />
              = Succès garanti 🚀
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Gère tes projets et reçois des conseils IA intelligents pour rester motivé. Simple, gratuit, et 100% hors-ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-cta text-primary-foreground font-semibold text-lg shadow-glow animate-pulse-glow transition-all"
              >
                <Download className="w-5 h-5" />
                Télécharger SESSAME
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/20 text-foreground font-semibold text-lg hover:bg-accent transition-colors"
              >
                En savoir plus
                <ChevronDown className="w-5 h-5" />
              </motion.a>
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Voir sur GitHub
            </motion.a>
          </motion.div>

          {/* Hero mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.img
              src={heroMockup}
              alt="SESSAME - Application de gestion de projets avec IA"
              className="w-full max-w-md drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
