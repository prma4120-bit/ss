import { motion } from "framer-motion";

export default function BeachSection() {
	return (
		<section className="section">
			<div className="container text-center">
				<h2 className="title">Beach Days</h2>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="card">
					<p className="lead">You and the sea — salt in our hair, sand between our toes.</p>

					<div style={{ marginTop: "1rem", fontSize: "2.5rem" }}>🏖️🌊🌅</div>
				</motion.div>
			</div>
		</section>
	);
}
