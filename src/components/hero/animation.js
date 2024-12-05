export const slideUp = {
    initial: {
        y: 150,
        opacity: 0,  // Empezamos con opacidad en 0
    },
    enter: {
        y: 0,
        opacity: 1,  // La opacidad sube a 1
        transition: {
            duration: 1.3,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.2
        }
    }
}
