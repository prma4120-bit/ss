export default function Timeline() {
  const events = [
    "Today ❤️",
    "Our First Adventure",
    "Mountain Escape",
    "Beach Vacation",
    "World Tour",
    "Forever Together"
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Our Journey</h2>

        <div style={{ maxWidth: 720, margin: '1rem auto' }}>
          {events.map((event, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: 14, height: 14, borderRadius: 999, background: '#F6C85F' }} />

              <div style={{ background: 'linear-gradient(180deg,var(--romance-1), rgba(255,250,250,0.95))', padding: '0.75rem', borderRadius: 12, boxShadow: 'var(--shadow)', flex: 1, color: 'var(--text-h)' }}>
                {event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}