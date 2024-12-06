import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			first: 'moveVertical 30s ease infinite',
  			second: 'moveInCircle 20s reverse infinite',
  			third: 'moveInCircle 40s linear infinite',
  			fourth: 'moveHorizontal 40s ease infinite',
  			fifth: 'moveInCircle 20s ease infinite'
  		},
  		keyframes: {
  			moveHorizontal: {
  				'0%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				},
  				'50%': {
  					transform: 'translateX(50%) translateY(10%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%) translateY(-10%)'
  				}
  			},
  			moveInCircle: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			moveVertical: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'50%': {
  					transform: 'translateY(50%)'
  				},
  				'100%': {
  					transform: 'translateY(-50%)'
  				}
  			}
  		},
  		colors: {
  			// background: 'rgb(14, 20, 23)',
  			background: '#F3F3F3',
  			foreground: 'var(--foreground)',
  			purple: '#4D3685',
			// textColor: "rgb(157, 170, 179)",
			textColor: "#1D1D1D",
			textRed: "#B14B4B"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			inter: ["var(--font-inter)"],
			frank: ["var(--font-frank)"],
			dm: ["var(--font-dm)"],
		},
		backgroundImage: {
			'noise': "url('https://www.transparenttextures.com/patterns/noise.png')",
		},
		screens: {
			// 'xs': '480px',  // puedes añadir breakpoints adicionales
			'3xl': '1800px',  // ejemplo para pantallas muy grandes
		  }
  	}
  },
} satisfies Config;
