/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				legacydeliriumblack:"#080708",
				legacydeliriumyellow:"#fdca40",
				legacydeliriumblue:"#3772ff",
				legacydeliriumred:"#df2935",
				legacydeliriumwhite:"#e6e8e6",
				deliriumwhite:"#f1f1f2",
				deliriumblue:{DEFAULT:"#5f7f9f",
				light:"#bdcde6",
				dark:"#001639"},
				deliriumred:"#ED3237"

			}
		},
		fontFamiliy: {
			inter: [ 'Inter','Inter var', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		}


		
	},
	plugins: [],
}
