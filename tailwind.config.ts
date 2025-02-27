import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
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
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		gridTemplateColumns: {
    			'13': 'repeat(13, minmax(0, 1fr))',
    			'14': 'repeat(14, minmax(0, 1fr))',
    			'15': 'repeat(15, minmax(0, 1fr))',
    			'16': 'repeat(16, minmax(0, 1fr))',
    			'17': 'repeat(17, minmax(0, 1fr))',
    			'18': 'repeat(18, minmax(0, 1fr))'
    		},
    		gridColumn: {
    			'span-13': 'span 13 / span 13',
    			'span-14': 'span 14 / span 14',
    			'span-15': 'span 15 / span 15',
    			'span-16': 'span 16 / span 16',
    			'span-17': 'span 17 / span 17',
    			'span-18': 'span 18 / span 18'
    		},
    		screens: {
    			'4xl': '2560px',
    			'3xl': '1920px',
    			xxl: '1440px'
    		},
    		aspectRatio: {
    			'8/3': '8 / 3',
    			'5/6': '5 / 6',
    			'5/4': '5 / 4',
    			'5/3': '5 / 3',
    			'3/4': '3 / 4',
    			'4/3': '4 / 3',
    			'4/2': '4 / 2',
    			'3/2': '3 / 2',
    			'3/1': '3 / 1',
    			'2/1': '2 / 1',
    			'2.57/1': '2.57 / 1',
    			'2.4/1': '2.4 / 1',
    			'3.29/1': '3.29 / 1',
    			'7/4': '7 / 4',
    			'1/2': '1 / 2',
    			'1.89/1': '1.89 / 1',
    			'1.5/1': '1.5 / 1',
    			'1.36/1': '1.36 / 1',
    			'1.18/1': '1.18 / 1',
    			'1.08/1': '1.08 / 1',
    			'0.87/1': '0.87 / 1',
    			'0.78/1': '0.78 / 1',
    			'0.715/1': '0.715 / 1'
    		}
    	}
    },
	plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;
