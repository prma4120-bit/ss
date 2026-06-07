import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sunflower from "./Sunflower";

export default function EasterEgg() {
	const [open, setOpen] = useState(false);

	const petals = useMemo(() => {
		return Array.from({ length: 14 }).map((_, i) => ({
			id: i,
			left: 5 + Math.random() * 90,
			delay: Math.random() * 0.8,
			duration: 1.6 + Math.random() * 1.6,
			scale: 0.9 + Math.random() * 0.8,
		}));
	}, []);

	return (
		<div>
			<button aria-label="Surprise" onClick={() => setOpen((s) => !s)} className="easter-button">
				🌻
			</button>

			<AnimatePresence>
				{open && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-backdrop">
						<motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="modal">
							<h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>For My Shreyu</h2>

							<p style={{ marginBottom: '1rem', color: 'var(--text)' }}>
								You make every day brighter. This little surprise is just a reminder that I Feel For You — always and forever.
							</p>

							<div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
								<button className="btn btn-primary" onClick={() => setOpen(false)}>Close</button>
							</div>

							<div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)' }}>
								<Sunflower size="2.25rem" />
							</div>
						</motion.div>

						<div className="floating-petals">
							{petals.map((p) => (
								<motion.span key={p.id} initial={{ y: -40, opacity: 0, scale: p.scale }} animate={{ y: 700, opacity: 1 }} transition={{ duration: p.duration, delay: p.delay, ease: "linear" }} style={{ left: `${p.left}%`, position: 'absolute', fontSize: '1.25rem' }}>
									🌸
								</motion.span>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

