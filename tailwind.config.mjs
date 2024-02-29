/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				deliriumblack:"#080708",
				deliriumyellow:"#fdca40",
				deliriumblue:"#3772ff",
				deliriumred:"#df2935",
				deliriumwhite:"#e6e8e6",

			}
		},
		fontFamiliy: {
			inter: [ 'Inter','Inter var', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		}


		
	},
	plugins: [],
}
