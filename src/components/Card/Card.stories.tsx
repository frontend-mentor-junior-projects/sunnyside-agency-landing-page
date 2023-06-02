import { Meta, StoryObj } from '@storybook/react'
import utils from 'components/utils'

import CardWithBackgroundImage from './CardWithBackgroundImage'
import CardWithImage from './CardWithImage'

const meta: Meta<typeof CardWithImage> = {
	title: 'Components/Card',
	component: CardWithImage,
}

export default meta

export const WithImage: StoryObj<typeof CardWithImage> = {
	render: () => {
		return (
			<CardWithImage
				imageFirst
				title='Transform your brand'
				color={utils.Colors.yellow}
				content={{
					description:
						'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
					mobileImage: 'assets/images/mobile/image-transform.jpg',
					desktopImage: 'assets/images/desktop/image-transform.jpg',
				}}
			/>
		)
	},
}

// TODO: This story is broken.
export const WithBackgroundImage: StoryObj<typeof CardWithBackgroundImage> = {
	render: () => {
		return (
			<CardWithBackgroundImage
				title='Photography'
				description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
				color='hsl(198, 62%, 26%)'
				bgImageUtilities={{
					mobile: 'bg-photography-mobile',
					desktop: 'bg-photography-desktop',
				}}
			/>
		)
	},
}
