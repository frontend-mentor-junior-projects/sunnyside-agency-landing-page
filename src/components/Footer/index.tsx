import utils from 'components/utils'

import Logo from '../Logo'
import SocialMediaIcon from './SocialMediaIcon'

const Footer = () => {
	return (
		<footer className='pt-14 bg-[#97D2C5] pb-24 flex flex-col items-center'>
			<div className='mb-12 m-auto'>
				<Logo fill='#236A5A' />
			</div>

			<ul className='flex flex-row space-x-14 mb-20'>
				{utils.LINKS.map((link) => {
					return (
						<li>
							<a
								href={link.url}
								className='text-footer hover:text-white transition ease-out duration-500'
							>
								{link.name}
							</a>
						</li>
					)
				})}
			</ul>

			<section className='flex flex-row space-x-8'>
				{utils.SOCIAL_MEDIA_LINKS.map((link) => {
					return (
						<a href={link.url}>
							<SocialMediaIcon fill='#2C7566' name={link.name} />
						</a>
					)
				})}
			</section>
		</footer>
	)
}

export default Footer
