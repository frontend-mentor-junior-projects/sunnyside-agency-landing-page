import { Testimonial as TestimonialType } from 'components/utils'

type TestimonialProps = {
	testimonial: TestimonialType
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
	return (
		<div className='flex flex-col items-center m-6 xl:w-1/4 my-[36px] sm:my-0'>
			<img
				src={testimonial.image}
				alt={testimonial.name}
				className='mb-10 sm:mb-14 rounded-full w-[72px]'
			/>

			<p className='text-center text-neutral-300 mb-10 sm:mb-[72px] font-sans xl:px-2 px-4 sm:px-40'>
				{testimonial.comment}
			</p>

			<p className='font-serif text-neutral-400 mb-2 font-black text-[16px]'>
				{testimonial.name}
			</p>
			<p className='text-[14px] text-neutral-100'>{testimonial.position}</p>
		</div>
	)
}

export default Testimonial
