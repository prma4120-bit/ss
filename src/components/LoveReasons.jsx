const reasons = [
  "Your smile changes my day.",
  "You are kind.",
  "You are adventurous.",
  "You believe in dreams.",
  "You make me laugh.",
  "You make life beautiful.",
  "You inspire me.",
  "You are my peace."
];

export default function LoveReasons() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Reasons I Feel For You</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginTop: '1rem' }}>
          {reasons.map((reason, i) => (
            <div key={i} className="card">❤️ {reason}</div>
          ))}
        </div>
      </div>
    </section>
  );
}