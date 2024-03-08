/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			'linearGradient':'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
			'customRed':'hsl(0, 100%, 66%)',
			'light_grayish_violet':'hsl(270, 3%, 87%)',
			'dark_grayish_violet':'hsl(279, 6%, 55%)',
			'very_dark_violet':'hsl(278, 68%, 11%)'
			}
		},
	},
	plugins: [],
}
