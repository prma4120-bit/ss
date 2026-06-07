// const samples = [
// 	{ title: "First Date", desc: "That coffee shop where we laughed for hours." },
// 	{ title: "Road Trip", desc: "Windows down, music up." },
// 	{ title: "Sunset", desc: "Hand in hand on the beach." },
// 	{ title: "Snow Day", desc: "Hot chocolate and blankets." }
// ];
const samples = [
{
title: "📞 The First 'Hi'",
desc: "The moment a simple greeting turned into one of my favorite conversations."
},
{
title: "😂 First Time We Laughed Together",
desc: "The moment the conversation stopped feeling formal and started feeling fun."
},
{
title: "🍳 The Cooking Debate",
desc: "An innocent question that accidentally became a serious discussion."
},
{
title: "📱 Daily Check-ins",
desc: "When hearing about your day quietly became part of mine."
},
{
title: "☕ Deloitte Talks",
desc: "Two Deloitte people pretending to discuss work and somehow talking about everything else."
},
{
title: "🎭 The First Argument",
desc: "Proof that even misunderstandings can bring people closer."
},
{
title: "😤 Ego vs Clarification",
desc: "A case that required multiple explanations and a lot of patience."
},
{
title: "🙄 Certified Troublemaker",
desc: "The day I realized teasing me is one of your favorite hobbies."
},
{
title: "🧸 Baccha Mode Activated",
desc: "One of the many moments that made me smile for no reason."
},
{
title: "🌍 Travel Stories",
desc: "Listening to your adventures and secretly wishing I was there too."
},
{
title: "🍻 Party Chronicles",
desc: "The stories that made me laugh despite not being part of them."
},
{
title: "✨ Same Vibes",
desc: "The moment we both realized conversations between us just felt easy."
},
{
title: "❤️ 'I Enjoy Your Company'",
desc: "A sentence I'll probably remember for a very long time."
},
{
title: "📖 Chapter One",
desc: "Just the beginning of something that already feels special."
}
];


export default function MemoryWall() {
	return (
		<section className="section">
			<div className="container">
				<h2 className="title">Memory Wall</h2>

				<div className="grid-2" style={{ maxWidth: 900, margin: "1rem auto 0" }}>
					{samples.map((s, i) => (
						<div key={i} className="card">
							<div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{s.title}</div>
							<div style={{ marginTop: "0.5rem", color: "var(--text)" }}>{s.desc}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
