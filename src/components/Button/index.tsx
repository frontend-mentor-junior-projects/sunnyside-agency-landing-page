type ButtonProps = {
	children: string
	onClick: () => void
	// eslint-disable-next-line react/require-default-props
	navigationButton?: boolean
}

const Button = ({
	children,
	onClick,
	navigationButton = false,
}: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`font-serif h-14 px-8 rounded-full transition ease-out duration-500
      ${
				navigationButton
					? 'bg-primary-200 text-neutral-400 lg:bg-white lg:text-black lg:hover:bg-[#70CFFC] lg:hover:text-white'
					: 'bg-white hover:bg-[#70CFFC] hover:text-white'
			}
      `}
		>
			{children.toUpperCase()}
		</button>
	)
}

export default Button
