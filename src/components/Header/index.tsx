import { useState } from 'react'

import Hamburger from 'assets/images/icon-hamburger.svg'
import { Button, Logo } from 'components'
import utils from 'components/utils'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	const closeMenu = () => {
		setShowMenu(false)
	}

	return (
		<header className='flex flex-row justify-between items-center mb-[104px] sm:[136px] font-black relative'>
			<Logo fill='#FFF' />

			<button
				type='button'
				aria-controls='navigation-menu'
				aria-expanded={showMenu}
				onClick={toggleMenu}
				className='lg:hidden'
			>
				{/* <img src='assets/images/icon-hamburger.svg' alt='Menu' /> */}
				<span className='sr-only'>Menu</span>
				<Hamburger />
			</button>

			<nav
				id='navigation-menu'
				className={`bg-white shadow flex flex-col items-center space-y-10 absolute top-[72px] right-0 w-full p-10
        before:w-0 before:h-0 before:absolute before:-top-[24px] before:right-0 before:border-b-[24px] before:border-b-white before:border-l-[24px] before:border-l-transparent
        lg:flex-row lg:items-center lg:space-x-12 lg:space-y-0 lg:relative lg:translate-y-0 lg:opacity-100 lg:shadow-none lg:p-0 lg:bg-transparent lg:inset-0 lg:w-auto lg:before:content-none
        ${
					showMenu
						? 'translate-y-0 opacity-100'
						: 'opacity-0 translate-y-[-100vh]'
				}
        transition duration-300 ease-in-out`}
			>
				<ul className='flex flex-col items-center space-y-10 text-neutral-200 lg:text-white lg:flex-row lg:space-y-0 lg:space-x-12'>
					{utils.LINKS.map((link) => {
						return (
							<li>
								<a
									href={link.url}
									onClick={closeMenu}
									className='inline-block transition ease duration-500 lg:hover:translate-y-[-4px]'
								>
									{link.name}
								</a>
							</li>
						)
					})}
				</ul>

				<Button
					navigationButton
					onClick={() => {
						closeMenu()
					}}
				>
					Contact
				</Button>
			</nav>
		</header>
	)
}

export default Header
