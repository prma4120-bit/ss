import { useState } from "react";

const defaultMessage = `My dearest,

Every moment with you feels like sunshine. You are my laughter, my calm, and my greatest adventure. I Feel For You more than words can hold.

Forever and always,`;

export default function LoveLetter() {
	const [text, setText] = useState(defaultMessage);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			alert("Letter copied to clipboard ✨");
		} catch (e) {
			alert("Copy failed — please select and copy manually.");
		}
	};

	return (
		<section className="section">
			<div className="container card" style={{ maxWidth: 720, margin: "0 auto" }}>
				<h3 className="title">A Little Letter</h3>

				<textarea style={{ width: "100%", height: 180, padding: 12, borderRadius: 8, border: "1px solid var(--border)" }} value={text} onChange={(e) => setText(e.target.value)} />

				<div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
					<button className="btn btn-primary" onClick={copy}>Copy</button>
				</div>
			</div>
		</section>
	);
}
