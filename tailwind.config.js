// @ts-check
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    "./node_modules/pliny/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./layouts/**/*.{js,ts,tsx}",
    "./data/**/*.mdx",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		animation: {
  			hey: 'hey 2.4s infinite',
  			'infinite-scroll': 'infinite-scroll 25s ease-in-out infinite',
  			shine: 'shine var(--duration) infinite linear',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
  		},
  		keyframes: {
  			hey: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'10%': {
  					transform: 'rotate(16deg)'
  				},
  				'20%': {
  					transform: 'rotate(-10deg)'
  				},
  				'30%': {
  					transform: 'rotate(16deg)'
  				},
  				'40%': {
  					transform: 'rotate(-10deg)'
  				},
  				'50%': {
  					transform: 'rotate(12deg)'
  				},
  				'60%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(0deg)'
  				}
  			},
  			'infinite-scroll': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'50%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			}
  		},
  		lineHeight: {
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem'
  		},
  		fontFamily: {
  			sans: ["var(--font-space-grotesk)", ...fontFamily.sans]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			gray: 'colors.gray',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		typography: '({ theme }) => ({\\\\n        DEFAULT: {\\\\n          css: {\\\\n            a: {\\\\n              color: theme("colors.primary.500"),\\\\n              "&:hover": {\\\\n                color: `${theme("colors.primary.600")}`,\\\\n              },\\\\n              code: { color: theme("colors.primary.400") },\\\\n            },\\\\n            "h1,h2": {\\\\n              fontWeight: "700",\\\\n              letterSpacing: theme("letterSpacing.tight"),\\\\n            },\\\\n            h3: {\\\\n              fontWeight: "600",\\\\n            },\\\\n            code: {\\\\n              color: theme("colors.indigo.500"),\\\\n            },\\\\n          },\\\\n        },\\\\n        invert: {\\\\n          css: {\\\\n            a: {\\\\n              color: theme("colors.primary.500"),\\\\n              "&:hover": {\\\\n                color: `${theme("colors.primary.400")}`,\\\\n              },\\\\n              code: { color: theme("colors.primary.400") },\\\\n            },\\\\n            "h1,h2,h3,h4,h5,h6": {\\\\n              color: theme("colors.gray.100"),\\\\n            },\\\\n          },\\\\n        },\\\\n      })',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
