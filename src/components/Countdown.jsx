import { useState, useEffect } from "react";

function getTimeLeft(target) {
	const now = new Date();
	const diff = Math.max(0, target - now);
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const seconds = Math.floor((diff / 1000) % 60);
	return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }) {
	// default target: next year Jan 1
	const defaultTarget = new Date();
	defaultTarget.setFullYear(defaultTarget.getFullYear() + 1);
	defaultTarget.setMonth(0, 1);

	const target = targetDate ? new Date(targetDate) : defaultTarget;

	const [timeLeft, setTimeLeft] = useState(getTimeLeft(target));

	useEffect(() => {
		const t = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
		return () => clearInterval(t);
	}, [target]);

	return (
		<section className="section">
			<div className="container card" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
				<h3 className="title">Countdown to Our Next Adventure</h3>

				<div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", marginTop: "0.75rem" }}>
					<div>
						<div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{timeLeft.days}</div>
						<div style={{ color: "var(--text)", fontSize: "0.9rem" }}>Days</div>
					</div>

					<div>
						<div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{timeLeft.hours}</div>
						<div style={{ color: "var(--text)", fontSize: "0.9rem" }}>Hours</div>
					</div>

					<div>
						<div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{timeLeft.minutes}</div>
						<div style={{ color: "var(--text)", fontSize: "0.9rem" }}>Minutes</div>
					</div>

					<div>
						<div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{timeLeft.seconds}</div>
						<div style={{ color: "var(--text)", fontSize: "0.9rem" }}>Seconds</div>
					</div>
				</div>
			</div>
		</section>
	);
}
