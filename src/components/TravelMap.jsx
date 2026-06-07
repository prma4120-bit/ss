import { useState } from "react";

const places = [
	{ name: "Switzerland", emoji: "🇨🇭" },
	{ name: "Maldives", emoji: "🏝️" },
	{ name: "Japan", emoji: "🗾" },
	{ name: "Iceland", emoji: "🧊" }
];

export default function TravelMap() {
	const [visited, setVisited] = useState([]);

	const toggle = (name) => {
		setVisited((s) => (s.includes(name) ? s.filter((x) => x !== name) : [name, ...s]));
	};

	return (
		<section className="section">
			<div className="container">
				<h2 className="title">Places to Go</h2>

				<div className="grid-2" style={{ maxWidth: 720, margin: "1rem auto 0" }}>
					{places.map((p) => (
						<div key={p.name} className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
							<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
								<div style={{ fontSize: "1.5rem" }}>{p.emoji}</div>
								<div>{p.name}</div>
							</div>

							<button onClick={() => toggle(p.name)} className={`btn ${visited.includes(p.name) ? "" : ""}`}>
								{visited.includes(p.name) ? "Visited" : "Visit"}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
