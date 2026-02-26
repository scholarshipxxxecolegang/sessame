import { motion } from "framer-motion";
import { ClipboardList, Bot, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Gestion Simple",
    description: "Ajoute un projet en 30 secondes. Titre, description, deadline, photos — tout est là.",
    emoji: "📝",
  },
  {
    icon: Bot,
    title: "Coach IA Intelligent",
    description: "Des conseils contextuels inspirants adaptés à TES projets. Gratuit via OpenRouter.",
    emoji: "🤖",
  },
  {
    icon: Bell,
    title: "Rappels Intelligents",
    description: "Reste motivé sans être spammé. Configure de 1 à 14 jours, l'app te demande ton avancement.",
    emoji: "🔔",
  },
  {
    icon: BarChart3,
    title: "Statistiques Visuelles",
    description: "Vois ton succès s'accumuler avec des graphiques clairs et des stats en temps réel.",
    emoji: "📊",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tout ce qu'il te faut pour <span className="text-gradient">réussir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SESSAME combine gestion de projet et intelligence artificielle pour t'aider à atteindre tes objectifs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.emoji} {feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
