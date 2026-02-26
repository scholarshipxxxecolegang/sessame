import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Freelance Designer",
    text: "Enfin un truc qui me motive vraiment ! Le coach IA me donne des conseils tellement pertinents que j'ai l'impression d'avoir un vrai mentor.",
    avatar: "🎨",
  },
  {
    name: "Thomas K.",
    role: "Étudiant en informatique",
    text: "J'arrive à rester focus sur mes projets persos grâce aux rappels intelligents. Plus d'excuses pour procrastiner !",
    avatar: "💻",
  },
  {
    name: "Nadia L.",
    role: "Entrepreneur",
    text: "Parfait pour tracker l'avancement de mes idées. Les statistiques visuelles me montrent concrètement ma progression.",
    avatar: "🚀",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-accent/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ils adorent <span className="text-gradient">SESSAME</span> 💜
          </h2>
          <p className="text-muted-foreground text-lg">
            Rejoins une communauté de gens motivés qui passent à l'action.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border/50"
            >
              <div className="text-4xl mb-4">{t.avatar}</div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
