type CardWithBackgroundImageProps = {
	title: string
	description: string
	color: string
	bgImageUtilities: {
		mobile: string
		desktop: string
	}
}

const CardWithBackgroundImage = ({
	title,
	description,
	color,
	bgImageUtilities,
}: CardWithBackgroundImageProps) => {
	return (
		<div
			className={`h-[600px] relative ${bgImageUtilities.desktop} bg-no-repeat bg-cover bg-center`}
		>
			<div
				className='absolute top-[380px] text-center flex flex-col items-center'
				style={{ color }}
			>
				<h2 className='font-serif font-black mb-8 text-[24px]'>{title}</h2>
				<p className='px-4 sm:px-6 lg:px-10 xl:px-0 xl:w-7/12'>{description}</p>
			</div>
		</div>
	)
}

export default CardWithBackgroundImage
