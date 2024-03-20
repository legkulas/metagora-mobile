import React, {useContext} from 'react';
import HeaderTopNav from './HeaderTopNav';
import Search from './Search';

import ThemeContext from '../context/ThemeContext';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Header = React.memo(() => {
	const { darkMode } = useContext(ThemeContext);
	
	return (
		<div className="flex flex-row xs:flex-col sm:flex-col justify-between xs:justify-center xs:mt-8 sm:mt-8 py-6 xs:pb-3 sm:pb-3 px-3 xs:px-0 sm:px-0">
			<motion.div
				variants={fadeIn('down', 0.1)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="w-4/5 xs:w-full sm:w-full"
			>
				
					{darkMode ? (
						<img
							src="metagora-logo-white.png"
							alt="Metagora Logo"
							className="w-auto h-auto sm:h-9 md:h-10 xl:h-12 mb-3 xs:hidden sm:hidden flex"
						/>
					) : (
						<img
							src="metagora-logo.png"
							alt="Metagora Logo"
							className="w-auto h-auto sm:h-9 md:h-10 xl:h-12 mb-3 xs:hidden sm:hidden flex"
						/>
					)}

					<Search />
				
			</motion.div>

			<motion.div
				variants={fadeIn('down', 0.1)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="relative w-full h-full"
			>
				<HeaderTopNav />
			</motion.div>
		</div>
	);
});

export default Header;
