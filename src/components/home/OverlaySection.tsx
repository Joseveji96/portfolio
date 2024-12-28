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

    // Animaciones del Hero
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const translateYHero = useTransform(scrollY, [0, 600], [10, 100]);
    
    // Control de z-index para el Hero
    const heroZIndex = useTransform(scrollY, 
        [0, 300, 301], // valores de scroll
        [2, 2, -1]     // valores de z-index correspondientes
    );

    // Animación de Parallax
    const translateYParallax = useTransform(
        scrollY, 
        [300, innerHeight], 
        [innerHeight - 200, 0]
    );

    // Control de z-index para Parallax
    const parallaxZIndex = useTransform(scrollY,
        [0, 0, 0],
        [1, 1, 2]
    );

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* Hero Section */}
            <motion.div 
                className="fixed inset-x-2 inset-y-32"
                style={{ 
                    opacity, 
                    translateY: translateYHero,
                    zIndex: heroZIndex,
                    pointerEvents: useTransform(opacity, value => value <= 0.1 ? 'none' : 'auto')
                }}
            >
                <Hero opacity={opacity} translateY={translateYHero} />
            </motion.div>

            {/* Parallax Section */}
            <motion.div 
                className="relative"
                style={{ 
                    translateY: translateYParallax,
                    zIndex: parallaxZIndex
                }}
            >
                <Parallax />
            </motion.div>
        </div>
    )
}

export default OverlaySection;