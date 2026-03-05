import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 sm:p-16 rounded-3xl gradient-hero relative overflow-hidden"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/10 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à transformer tes projets en réussite ? 🏆
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Zéro pub, zéro tracking, juste de l'IA motivante pour t'aider à avancer.
            </p>
            <motion.a
              href="/sessame.apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-card text-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Download className="w-6 h-6" />
              Télécharger Gratuitement
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
