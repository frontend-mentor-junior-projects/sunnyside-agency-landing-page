import { Meta, StoryObj } from '@storybook/react'

import Gallery from '.'

const meta: Meta<typeof Gallery> = {
	title: 'Components/Gallery',
	component: Gallery,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Gallery>

export const Default: Story = {}
