import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Appel a la Netlify Function
      const response = await fetch("/.netlify/functions/send-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type") || "";
        let errorMessage = "Erreur lors de l'envoi";

        if (contentType.includes("application/json")) {
          const errorData = await response.json().catch(() => null);
          if (errorData?.error) errorMessage = errorData.error;
        } else {
          const rawText = await response.text().catch(() => "");
          if (response.status === 404) {
            errorMessage = "Fonction Netlify introuvable (404). Verifie le deploiement des Functions.";
          } else if (rawText) {
            errorMessage = rawText;
          } else {
            errorMessage = `Erreur HTTP ${response.status}`;
          }
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setName("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue";
      setError(errorMessage);
      console.error("Erreur:", err);
      setTimeout(() => setError(null), 4000);
    } finally {
      setLoading(false);
    }
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
            Un avis ? Un <span className="text-gradient">mot sympa</span> ? ðŸ’¬
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
              Ton prÃ©nom
            </label>
            <input
              id="comment-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 50))}
              placeholder="Ex: Sarah"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
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
              disabled={loading}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none disabled:opacity-50"
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">{message.length}/500</p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600"
            >
              <AlertCircle className="w-4 h-4" />
              <p className="text-sm">{error}</p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading || submitted}
            whileHover={{ scale: loading || submitted ? 1 : 1.03 }}
            whileTap={{ scale: loading || submitted ? 1 : 0.97 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-cta text-primary-foreground font-semibold text-lg shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Merci pour ton retour ! ðŸŽ‰
              </>
            ) : loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
                Envoi en cours...
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
