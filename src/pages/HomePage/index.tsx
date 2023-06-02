import { Card, Footer, Gallery, Header, Testimonial } from 'components'
import utils from 'components/utils'

const HomePage = () => {
	return (
		<main>
			{/* Hero. */}
			<section className='min-h-screen pt-8 bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cover bg-bottom px-6 sm:px-10 h-[400px] sm:h-[800px]'>
				<Header />

				<div className='flex flex-col items-center'>
					<h1 className='font-serif text-white text-[32px] sm:text-[48px] text-center tracking-widest mb-16 sm:mb-28 lg:mb-20'>
						WE ARE CREATIVES
					</h1>
					<img src='assets/images/icon-arrow-down.svg' alt='arrow down' />
				</div>
			</section>

			{/* Services. */}
			<section>
				<Card.WithImage
					imageFirst={false}
					title='Transform your brand'
					color={utils.Colors.yellow}
					content={{
						description:
							'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
						mobileImage: 'assets/images/mobile/image-transform.jpg',
						desktopImage: 'assets/images/desktop/image-transform.jpg',
					}}
				/>

				<Card.WithImage
					imageFirst
					title='Stand out to the right audience'
					color={utils.Colors.orange}
					content={{
						description:
							'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
						mobileImage: 'assets/images/mobile/image-stand-out.jpg',
						desktopImage: 'assets/images/desktop/image-stand-out.jpg',
					}}
				/>
			</section>

			<section className='flex flex-col sm:grid sm:grid-cols-2'>
				<Card.WithBackgroundImage
					title='Graphic Design'
					description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
					color='hsl(167, 40%, 24%)'
					bgImageUtilities={{
						mobile: 'bg-graphic-design-mobile',
						desktop: 'bg-graphic-design-desktop',
					}}
				/>

				<Card.WithBackgroundImage
					title='Photography'
					description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
					color='hsl(198, 62%, 26%)'
					bgImageUtilities={{
						mobile: 'bg-photography-mobile',
						desktop: 'bg-photography-desktop',
					}}
				/>
			</section>

			{/* Client Testimonials. */}
			<section className='flex flex-col items-center py-[72px] sm:py-20 xl:py-40'>
				<h3 className='mb-8 sm:mb-20 font-serif text-neutral-200 text-[16px] sm:tracking-[0.35em]'>
					CLIENT TESTIMONIALS
				</h3>

				<div className='flex flex-col sm:space-y-10 xl:space-y-0 xl:flex-row sm:justify-center'>
					{utils.TESTIMONIALS.map((testimonial) => {
						return (
							<Testimonial key={testimonial.id} testimonial={testimonial} />
						)
					})}
				</div>
			</section>

			<Gallery />

			<Footer />
		</main>
	)
}

export default HomePage
