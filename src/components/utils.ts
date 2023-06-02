const Colors = {
	yellow: 'hsl(51, 100%, 49%)',
	orange: 'hsl(7, 99%, 70%)',
}

export type Testimonial = {
	id: number
	comment: string
	name: string
	position: string
	image: string
}

const TESTIMONIALS = [
	{
		id: 0,
		comment:
			'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
		name: 'Emily R.',
		position: 'Marketing Director',
		image: 'assets/images/image-emily.jpg',
	},
	{
		id: 1,
		comment:
			'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
		name: 'Thomas S.',
		position: 'Chief Operating Officer',
		image: 'assets/images/image-thomas.jpg',
	},
	{
		id: 2,
		comment:
			'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
		name: 'Jennie F.',
		position: 'Business Owner',
		image: 'assets/images/image-jennie.jpg',
	},
]

const GALLERY = [
	{
		id: 0,
		src: {
			mobile: 'assets/images/mobile/image-gallery-milkbottles.jpg',
			desktop: 'assets/images/desktop/image-gallery-milkbottles.jpg',
		},
		alt: 'milk bottles',
	},
	{
		id: 1,
		src: {
			mobile: 'assets/images/mobile/image-gallery-orange.jpg',
			desktop: 'assets/images/desktop/image-gallery-orange.jpg',
		},
		alt: 'orange',
	},
	{
		id: 2,
		src: {
			mobile: 'assets/images/mobile/image-gallery-cone.jpg',
			desktop: 'assets/images/desktop/image-gallery-cone.jpg',
		},
		alt: 'cone',
	},
	{
		id: 3,
		src: {
			mobile: 'assets/images/mobile/image-gallery-sugar-cubes.jpg',
			desktop: 'assets/images/desktop/image-gallery-sugar-cubes.jpg',
		},
		ornage: 'sugar cubes',
	},
]

const LINKS = [
	{ name: 'About', url: '/#' },
	{ name: 'Services', url: '/#' },
	{ name: 'Projects', url: '/#' },
]

const SOCIAL_MEDIA_LINKS = [
	{ name: 'facebook', url: '/#', image: 'assets/images/icon-facebook.svg' },
	{ name: 'instagram', url: '/#', image: 'assets/images/icon-instagram.svg' },
	{ name: 'twitter', url: '/#', image: 'assets/images/icon-twitter.svg' },
	{ name: 'pinterest', url: '/#', image: 'assets/images/icon-pinterest.svg' },
]

export default {
	TESTIMONIALS,
	GALLERY,
	LINKS,
	SOCIAL_MEDIA_LINKS,
	Colors,
}
