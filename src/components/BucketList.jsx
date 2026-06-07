const list = [
  "Watch sunrise on a mountain",
  "Visit Switzerland",
  "Road trip together",
  "Scuba diving",
  "Stargazing",
  "Build our dream home"
];

export default function BucketList() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Our Future Adventures</h2>

        <div className="card" style={{ maxWidth: 720, margin: '1rem auto' }}>
          {list.map((item, i) => (
            <div key={i} style={{ marginBottom: '0.6rem' }}>☐ {item}</div>
          ))}

          <div style={{ fontWeight: 700, color: '#166534', marginTop: '1rem' }}>☑ Found each other ❤️</div>
        </div>
      </div>
    </section>
  );
}