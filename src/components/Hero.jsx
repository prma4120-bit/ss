import { motion } from "framer-motion";
import Sunflower from "./Sunflower";

export default function Hero() {
  return (
    <section className="section" style={{ background: "linear-gradient(180deg,var(--romance-1),var(--romance-2))", minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="container">
        <div style={{ marginBottom: '0.5rem' }}>
          <Sunflower size="3rem" />
        </div>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          For My Shreyu
        </h1>

        <p className="lead" style={{ maxWidth: '56ch', margin: '0 auto' }}>
          Every sunflower follows the sun. Somehow my heart always finds you.
        </p>

        {/* <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Enter Your World ✨
        </button> */}
      </motion.div>
    </section>
  );
}