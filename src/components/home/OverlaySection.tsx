"use client"
import React, { useEffect, useState, useRef } from 'react'
import Parallax from './Parallax'
import Hero from './Hero'
import { useScroll, motion, useTransform } from "framer-motion"

const OverlaySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setInnerHeight(window.innerHeight);
        }
    }, []);

    // Animaciones del Hero (opacidad y desplazamiento hacia abajo)
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const translateYHero = useTransform(scrollY, [0, 600], [10, 100]);

    // Animación de Parallax (desplazamiento hacia arriba)
    const translateYParallax = useTransform(scrollY, [300, innerHeight], [innerHeight-200, 0]);

    return (
        <div ref={containerRef} className="relative">
            {/* Hero con animación de opacidad y desplazamiento hacia abajo */}
            <motion.div 
                className="fixed inset-x-2 inset-y-32"
                style={{ opacity, translateY: translateYHero }}
            >
                <Hero opacity={opacity} translateY={translateYHero} />

            </motion.div>

            {/* Parallax con animación de desplazamiento hacia arriba */}
            <motion.div 
                className="relative z-10"
                style={{ translateY: translateYParallax }}
            >
                <Parallax />
            </motion.div>
        </div>
    )
}

export default OverlaySection;
