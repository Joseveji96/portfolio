'use client'

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-12 md:p-16">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white/20 blur-3xl" />
      
      <div className="relative grid gap-8 md:grid-cols-[1fr,2fr]">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl"
        >
          About
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-700 md:text-xl"
        >
          I&apos;m a software developer, specialized on web and mobile development with a focus on building innovative technology solutions. I&apos;m passionate about solving complex problems using modern technologies like JavaScript, React, Node.js, and Flutter. I&apos;m always looking for ways to streamline development and improve user experience.
        </motion.p>
      </div>

      {/* Technology badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative mt-8 flex flex-wrap gap-3"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#61DAFB]">
            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
            <path d="M12 21.9c-.3 0-.6-.2-.8-.5-.2-.2-4.3-5.1-6.5-8.9-1.8-3.1-2-5.5-.6-7.2 1.1-1.3 3-1.9 5.4-1.9s4.3.6 5.4 1.9c1.4 1.7 1.2 4.1-.6 7.2-2.2 3.8-6.3 8.7-6.5 8.9-.2.3-.5.5-.8.5Zm-2.5-16.5c-1.8 0-3.1.4-3.8 1.2-.8 1-.7 2.7.5 4.9 1.7 3 4.7 6.8 5.8 8.1 1.1-1.3 4.1-5.1 5.8-8.1 1.2-2.2 1.3-3.9.5-4.9-.7-.8-2-1.2-3.8-1.2-1.4 0-2.8.3-3.5.8-.3.2-.7.2-1 0-.7-.5-2.1-.8-3.5-.8Z" />
          </svg>
          React
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#38BDF8]">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
          </svg>
          Tailwind
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#3178C6]">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
          TypeScript
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#61DAFB]">
            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
            <path d="M12 21.9c-.3 0-.6-.2-.8-.5-.2-.2-4.3-5.1-6.5-8.9-1.8-3.1-2-5.5-.6-7.2 1.1-1.3 3-1.9 5.4-1.9s4.3.6 5.4 1.9c1.4 1.7 1.2 4.1-.6 7.2-2.2 3.8-6.3 8.7-6.5 8.9-.2.3-.5.5-.8.5Zm-2.5-16.5c-1.8 0-3.1.4-3.8 1.2-.8 1-.7 2.7.5 4.9 1.7 3 4.7 6.8 5.8 8.1 1.1-1.3 4.1-5.1 5.8-8.1 1.2-2.2 1.3-3.9.5-4.9-.7-.8-2-1.2-3.8-1.2-1.4 0-2.8.3-3.5.8-.3.2-.7.2-1 0-.7-.5-2.1-.8-3.5-.8Z" />
          </svg>
          React Native
        </span>
      </motion.div>

      {/* Decorative icon */}
      <div className="absolute bottom-12 left-12 text-gray-400 md:bottom-16 md:left-16">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C16 8.83656 8.83656 16 0 16C8.83656 16 16 23.1634 16 32C16 23.1634 23.1634 16 32 16C23.1634 16 16 8.83656 16 0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}

