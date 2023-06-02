/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': 'hsl(7, 99%, 70%)',
				'primary-200': 'hsl(51, 100%, 49%)',
				'graphic-design-text': 'hsl(167, 40%, 24%)',
				'photography-text': 'hsl(198, 62%, 26%)',
				footer: 'hsl(168, 34%, 41%)',
				'neutral-400': 'hsl(212, 27%, 19%)',
				'neutral-300': 'hsl(213, 9%, 39%)',
				'neutral-200': 'hsl(232, 10%, 55%)',
				'neutral-100': 'hsl(210, 4%, 67%)',
				white: '#FFF',
				black: '#000',
			},
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
				serif: ['Fraunces', 'serif'],
			},
			backgroundImage: {
				'header-mobile': "url('assets/images/mobile/image-header.jpg')",
				'header-desktop': "url('assets/images/desktop/image-header.jpg')",
				'photography-mobile':
					"url('assets/images/mobile/image-photography.jpg')",
				'photography-desktop':
					"url('assets/images/desktop/image-photography.jpg')",
				'graphic-design-mobile':
					"url('assets/images/mobile/image-graphic-design.jpg')",
				'graphic-design-desktop':
					"url('assets/images/desktop/image-graphic-design.jpg')",
			},
		},
	},
	plugins: [],
}
