"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white font-sans">
      {/* Spinning Wheel Background */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // speed of rotation
        }}
        className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] opacity-4"
      >
        <Image
          src="/images/wheels.png" // replace with a transparent wheel or rim image
          alt="Spinning wheel"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Glow Overlay */}
      <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]" />

      <main className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png" // your Mottozone logo
            alt="Mottozone logo"
            width={140}
            height={40}
            className="drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]"
          />
        </motion.div> */}

        {/* Title */}
        <motion.h1
          className="mt-10 text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-zinc-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Mottozone
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 max-w-xl text-lg text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          The <span className="text-red-500 font-semibold">automotive hub</span> 
          for enthusiasts, traders, and tinkerers.  
          <br />Join the ride — forums, classifieds, and community coming soon.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#"
            className="rounded-full bg-red-600 text-white px-8 py-3 text-sm font-semibold transition-all hover:scale-105 hover:bg-red-500 shadow-lg shadow-red-900/30"
          >
            Get Notified
          </a>
          <a
            href="#"
            className="rounded-full border border-zinc-600 px-8 py-3 text-sm font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-500"
          >
            Follow Updates
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-20 text-sm text-zinc-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          🏎️ © {new Date().getFullYear()} Mottozone — Fueled by Passion.
        </motion.p>
      </main>
    </div>
  );
}
