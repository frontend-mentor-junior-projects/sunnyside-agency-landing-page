import utils from 'components/utils'

const Gallery = () => {
	return (
		<>
			<section className='grid grid-cols-2 sm:hidden'>
				{utils.GALLERY.map((image) => {
					return (
						<div
							key={image.id}
							// className={`col-span-1 bg-[url('${image.src.mobile}')]`}
							className='col-span-1'
						>
							<img src={image.src.mobile} alt='' />
						</div>
					)
				})}
			</section>
			<section className='hidden sm:grid sm:grid-cols-4'>
				{utils.GALLERY.map((image) => {
					return (
						<div key={image.id} className={`col-span-1 `}>
							<img src={image.src.desktop} alt='' />
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Gallery
