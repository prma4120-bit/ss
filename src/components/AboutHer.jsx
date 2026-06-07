import { motion } from "framer-motion";

const cards = [
  {
  emoji: "🧸",
  title: "My Baccha",
  text: "The way you become a little kid around me melts my heart every single time."
},
{
  emoji: "📱",
  title: "My Favorite Notification",
  text: "I love hearing about your day, what you ate, what happened, and every tiny detail you choose to share with me."
},
{
  emoji: "🤍",
  title: "The Girl With A Pure Heart",
  text: "You are honest, expressive, and genuine. That's why trusting you comes so naturally."
},
{
  emoji: "🌙",
  title: "The One Who Always Understands",
  text: "Even when we misunderstand each other sometimes, love always finds its way back into our conversations."
},
{
    emoji: "❤️",
    title: "My Safe Place",
    text: "Whether we're laughing, arguing, teasing each other, or talking for hours, being with you always feels like home."
},
{
    emoji: "🥹",
    title: "Worth Every Effort",
    text: "When it comes to you, effort never feels like effort. Caring for you, loving you, and making you smile happens naturally."
},
{
    emoji: "💖",
    title: "The Person I Choose Every Day",
    text: "Every day I find another reason to appreciate you, admire you, and fall for you a little more."
  }
];

export default function AboutHer() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Why You're Special</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {cards.map((card, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="card">
              <div style={{ fontSize: '2rem' }}>{card.emoji}</div>

              <h3 style={{ fontWeight: 700, marginTop: '0.5rem' }}>{card.title}</h3>

              <p style={{ marginTop: '0.5rem', color: 'var(--text)' }}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}