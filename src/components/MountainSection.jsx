import { motion } from "framer-motion";

export default function MountainSection() {
	return (
		<section className="section">
			<div className="container text-center">
				<h2 className="title">Mountain Escapes</h2>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="card">
					<p className="lead">Breathe the cool air and chase the horizon together.</p>

					<div style={{ marginTop: "1rem", fontSize: "2.5rem" }}>🏔️🌲🔥</div>
				</motion.div>
			</div>
		</section>
	);
}
