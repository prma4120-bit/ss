import { useState, useEffect } from "react";

export default function LoveJar() {
	const [notes, setNotes] = useState(() => {
		try {
			const raw = localStorage.getItem("love-jar-notes");
			return raw ? JSON.parse(raw) : ["You are my sunshine."];
		} catch {
			return ["You are my sunshine."];
		}
	});

	const [text, setText] = useState("");

	useEffect(() => {
		localStorage.setItem("love-jar-notes", JSON.stringify(notes));
	}, [notes]);

	const add = () => {
		if (!text.trim()) return;
		setNotes((s) => [text.trim(), ...s]);
		setText("");
	};

	return (
		<section className="section">
			<div className="container card" style={{ maxWidth: 560, margin: "0 auto" }}>
				<h3 className="title">Love Jar</h3>

				<div style={{ marginTop: "0.75rem" }}>
					<input className="" style={{ width: "100%", padding: "0.6rem", borderRadius: "8px", border: "1px solid var(--border)" }} placeholder="Write a note ...." value={text} onChange={(e) => setText(e.target.value)} />
					<div style={{ marginTop: "0.6rem", textAlign: "right" }}>
						<button className="btn btn-primary" onClick={add}>Add</button>
					</div>
				</div>

				<div style={{ textAlign: "left", maxHeight: "12rem", overflowY: "auto", marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
					{notes.map((n, i) => (
						<div key={i} style={{ background: 'linear-gradient(180deg,var(--romance-1), rgba(255,250,250,0.95))', borderRadius: 8, padding: "0.6rem", color: 'var(--text-h)' }}>{n}</div>
					))}
				</div>
			</div>
		</section>
	);
}
