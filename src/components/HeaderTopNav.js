import ThemeIcon from './ThemeIcon';
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const HeaderTopNav = () => {
	const { darkMode } = useContext(ThemeContext);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* web menu */}
			<ul className="xs:hidden sm:hidden flex justify-end items-center w-full text-sm absolute -top-8 right-0">
				<li>
					<a href="#home" className="p-3">
						Dashboard
					</a>
				</li>
				<li>
					<a href="#news" className="p-3">
						Profile
					</a>
				</li>
				<li>
					<a href="#contact" className="p-3">
						Logout
					</a>
				</li>
				<li>
					<ThemeIcon className="p-3" />
				</li>
			</ul>

			{/* mobile menu */}
			<nav className="flex md:hidden lg:hidden xl:hidden">
				<div
					className={`flex justify-between items-center fixed top-0 left-0 w-full h-14 z-10 ${
						darkMode ? 'bg-gray-800' : 'bg-white'
					}`}
				>
					<div>
						{darkMode ? (
							<img
								src="metagora-logo-white.png"
								alt="Metagora Logo"
								className="w-auto h-9 sm:h-9 ml-4"
							/>
						) : (
							<img
								src="metagora-logo.png"
								alt="Metagora Logo"
								className="w-auto h-9 sm:h-9 ml-4"
							/>
						)}
					</div>
					<button
						onClick={toggleMobileMenu}
						className={`flex items-center justify-center w-12 h-12 fixed top-1 right-1 z-10 transition duration-300 transform hover:scale-110 ${
							darkMode ? ' fill-white' : 'fill-gray-800'
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="#a1a1a1"
							className="w-12 h-12"
						>
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>

				<div
					className={`fixed top-0 z-10 w-full h-full ${
						darkMode ? 'bg-gray-500' : 'bg-white'
					} transition-all duration-300 ${
						isMobileMenuOpen ? 'left-0' : '-left-full'
					}`}
				>
					<button
						onClick={toggleMobileMenu}
						className={`flex items-center justify-center w-12 h-12 relative top-1 left-1 z-10 transition duration-300 transform hover:scale-110 ${
							darkMode ? ' fill-white' : 'fill-gray-800'
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<ul className="relative flex flex-col justify-top items-start w-full h-full text-2xl xs:text-3xl sm:text-3xl divide-y-1 divided-gray-50">
						<li className="w-full">
							<div className="absolute -top-11 right-3">
								<ThemeIcon />
							</div>
						</li>
						<li className="w-full">
							<a
								href="#Dashboard"
								className="flex flex-row justify-start items-center py-3 px-8"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									fillOpacity={0.8}
									className="w-6 h-6 mx-9"
								>
									<path
										fillRule="evenodd"
										d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
										clipRule="evenodd"
									/>
								</svg>

								<span className="font-bold">Dashboard</span>
							</a>
						</li>
						<li className="w-full">
							<a
								href="Profile"
								className="flex items-center py-3 px-8"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 mx-9"
								>
									<path
										fillRule="evenodd"
										d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
										clipRule="evenodd"
									/>
								</svg>

								<span className="font-bold">Profile</span>
							</a>
						</li>
						<li className="w-full">
							<a
								href="#Logout"
								className="flex items-center py-3 px-8"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 mx-9"
								>
									<path
										fillRule="evenodd"
										d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
										clipRule="evenodd"
									/>
								</svg>

								<span className="font-bold">Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default HeaderTopNav;
