import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Ajoute ton projet",
    description: "Donne un nom, une description et une deadline. C'est tout!",
    emoji: "📱",
  },
  {
    number: "2",
    title: "Coche tes tâches",
    description: "Découpe ton projet en étapes et suis ta progression en temps réel.",
    emoji: "✅",
  },
  {
    number: "3",
    title: "Reçois tes conseils IA",
    description: "Ton coach IA analyse ton projet et te motive avec des conseils personnalisés.",
    emoji: "🧠",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple comme <span className="text-gradient">1, 2, 3</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pas de setup compliqué. Installe, crée, avance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full gradient-hero flex items-center justify-center text-3xl mb-6 shadow-glow">
                  {step.emoji}
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-primary-foreground text-sm font-bold -mt-2 -ml-8 z-20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
