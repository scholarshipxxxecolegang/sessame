import { motion } from "framer-motion";

const problems = [
  { emoji: "😵", text: "Trop de projets, pas assez de focus" },
  { emoji: "🤷", text: "Tu ne sais pas par où commencer" },
  { emoji: "😩", text: "Manque de motivation et de progression visible" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Tu commences plein de projets
          <br />
          mais tu les <span className="text-gradient">abandonnes</span> ? 😬
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12"
        >
          On est tous passés par là. Le problème, c'est pas toi — c'est les outils.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-shadow duration-300"
            >
              <span className="text-5xl mb-4 block">{problem.emoji}</span>
              <p className="text-foreground font-semibold text-lg">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
