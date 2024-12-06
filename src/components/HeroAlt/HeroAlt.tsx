'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

export default function RestructuredHero() {
  return (
    <section className="min-h-screen bg-white px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="space-y-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              <span className="text-3xl md:text-4xl">✱</span> WHAT WE DO <span className="text-3xl md:text-4xl">✱</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl font-light leading-relaxed tracking-wide text-gray-700 md:text-2xl"
            >
              We position and rebrand high-growth tech companies for the future by aligning their vision, culture, and brand to drive innovation, differentiation, and sustainable growth.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                href="#contact"
                className="group inline-flex items-center space-x-2 text-lg font-medium text-black transition-colors hover:text-gray-600"
              >
                <span className="underline decoration-2 underline-offset-4">Book a discovery call</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gray-100" />
            <div className="absolute inset-4 rounded-full bg-gray-200" />
            <div className="absolute inset-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">GROW</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-gray-500 md:text-xl"
          >
            (SCROLL TO LEARN MORE)
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

