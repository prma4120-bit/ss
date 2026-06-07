const favorites = [
  {
    emoji: "🏖️",
    title: "Beaches",
    desc: "Your happy place"
  },
  {
    emoji: "⛰️",
    title: "Mountains",
    desc: "Closer to the sky"
  },
  {
    emoji: "🏎️",
    title: "Go Karting",
    desc: "Where competition begins"
  },
  {
    emoji: "📚",
    title: "Romantic Novels",
    desc: "Stories that touch the heart"
  }
];

export default function Favorites() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Things You Love</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginTop: '1rem' }}>
          {favorites.map((item, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem' }}>{item.emoji}</div>

              <h3 style={{ fontWeight: 700, marginTop: '0.75rem' }}>{item.title}</h3>

              <p style={{ color: 'var(--text)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}