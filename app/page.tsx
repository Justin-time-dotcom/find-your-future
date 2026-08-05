import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Find Your Future
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          A global platform for education and career guidance with country and curriculum discovery.
        </p>
      </motion.div>
    </section>
  );
}
