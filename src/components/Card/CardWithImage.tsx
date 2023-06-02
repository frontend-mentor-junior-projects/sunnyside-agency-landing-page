type CardWithImageProps = {
	imageFirst: boolean
	title: string | React.ReactNode
	color: string
	content: {
		description: string
		mobileImage: string
		desktopImage: string
	}
}

const CardWithImage = ({
	imageFirst = false,
	content,
	color,
	title,
}: CardWithImageProps) => {
	return (
		<div className='sm:grid sm:grid-cols-2 flex flex-col-reverse'>
			<div
				className={`text-center sm:text-left h-[440px] sm:h-auto xl:h-[600px] flex flex-col justify-center items-center sm:items-start sm:pl-[48px] sm:pr-[24px] lg:pl-[64px] xl:pl-[160px] xl:pr-[112px] ${
					imageFirst ? 'sm:order-last' : 'order-first'
				} px-6`}
			>
				<div />
				<h2 className='font-serif font-black text-[24px] sm:text-[32px] mb-10 sm:mb-12 text-neutral-400'>
					{title}
				</h2>
				<p className='mb-10 sm:mb-12 text-neutral-200 px-2 sm:px-0'>
					{content.description}
				</p>

				<div className='relative group hover:cursor-pointer flex flex-col items-center'>
					<p className='font-serif text-neutral-400 font-[14px] z-10'>
						LEARN MORE
					</p>
					<div
						className='absolute top-3 bg-primary-200 opacity-50 group-hover:opacity-100 transition ease-out duration-500 h-2 rounded-full w-[128px]'
						style={{ backgroundColor: color }}
					/>
				</div>
			</div>

			<img src={content.mobileImage} alt='' className='sm:hidden block' />
			<img
				src={content.desktopImage}
				alt=''
				className='sm:block hidden xl:h-[600px] sm:h-[500px] sm:w-full'
			/>
		</div>
	)
}

export default CardWithImage
