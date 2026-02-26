import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitted(true);
    setName("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Un avis ? Un <span className="text-gradient">mot sympa</span> ? 💬
          </h2>
          <p className="text-muted-foreground text-lg">
            Dis-nous ce que tu penses de SESSAME, on adore lire vos retours !
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border/50 space-y-5"
        >
          <div>
            <label htmlFor="comment-name" className="block text-sm font-semibold text-foreground mb-2">
              Ton prénom
            </label>
            <input
              id="comment-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 50))}
              placeholder="Ex: Sarah"
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="comment-message" className="block text-sm font-semibold text-foreground mb-2">
              Ton message
            </label>
            <textarea
              id="comment-message"
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 500))}
              placeholder="Ce que tu penses de SESSAME..."
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">{message.length}/500</p>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-cta text-primary-foreground font-semibold text-lg shadow-glow transition-all"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Merci pour ton retour ! 🎉
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer mon avis
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default CommentSection;
