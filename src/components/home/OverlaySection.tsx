"use client"
import React, { useEffect, useState, useRef } from 'react'
import Parallax from './Parallax'
import Hero from './Hero'
import { useScroll, motion, useTransform } from "framer-motion"

const OverlaySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportHeight(window.innerHeight);
        }
    }, []);

    // Hero animations
    const opacity = useTransform(scrollY, [0, viewportHeight * 0.6], [1, 0]);
    const translateYHero = useTransform(scrollY, [0, viewportHeight * 0.6], [0, 100]);

    // Hero z-index control
    const heroZIndex = useTransform(scrollY, 
        [0, viewportHeight * 0.3, viewportHeight * 0.31],
        [2, 2, -1]
    );

    // Parallax animations
    const translateYParallax = useTransform(
        scrollY,
        [300, viewportHeight],
        [viewportHeight - 200, 0]
    );

    // Parallax z-index control
    const parallaxZIndex = useTransform(scrollY,
        [0, 0, 0],
        [1, 1, 2]
    );

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* Hero Section */}
            <motion.div
                className="fixed inset-0 flex items-center justify-center"
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
                className="relative w-full mt-[calc(100vh-660px)]  lg:mt-[calc(100vh-700px)]"
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