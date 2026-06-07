import { motion } from "framer-motion";

export default function FloatingPetals({ count = 12 }) {
	const petals = Array.from({ length: count }).map((_, i) => ({
		id: i,
		left: `${5 + Math.random() * 90}%`,
		delay: Math.random() * 6,
		scale: 0.8 + Math.random() * 0.8
	}));

	return (
		<div className="floating-petals">
			{petals.map((p) => (
				<motion.span
					key={p.id}
					initial={{
						y: 700,
						opacity: 0,
						scale: p.scale
					}}
					animate={{
						y: -100,
						x: [-10, 15, -15, 10],
						rotate: [0, 180, 360],
						opacity: [0, 0.8, 0.4, 0]
					}}
					transition={{
						duration: 8 + Math.random() * 6,
						delay: p.delay,
						repeat: Infinity,
						ease: "linear"
					}}
					style={{
						left: p.left,
						position: "absolute",
						fontSize: "1.5rem"
					}}
				>
					🌻
				</motion.span>
			))}
		</div>
	);
}