import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Contact',
	},
	decorators: [
		(Story) => {
			return (
				<div style={{ backgroundColor: '#71C1EA' }} className='p-10'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
