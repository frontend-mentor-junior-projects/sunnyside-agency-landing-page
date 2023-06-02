import { Meta, StoryObj } from '@storybook/react'
import utils from 'components/utils'

import Testimonial from '.'

const meta: Meta<typeof Testimonial> = {
	title: 'Components/Testimonial',
	component: Testimonial,
	args: {
		testimonial: utils.TESTIMONIALS[0],
	},
}

export default meta
type Story = StoryObj<typeof Testimonial>

export const Default: Story = {}

export const ClientTestimonials: Story = {
	render: () => {
		return (
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
		)
	},
}
