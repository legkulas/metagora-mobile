import { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

const ThemeIcon = () => {
	const {darkMode, setDarkMode} = useContext(ThemeContext);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		const root = document.getElementById('root');

		if (darkMode) {
			root.classList.add('bg-gray-900', 'text-gray-300');
			root.classList.remove('bg-neutral-100');
		} else {
			root.classList.add('bg-neutral-100');
			root.classList.remove('bg-gray-900', 'text-gray-300');
		}
	}, [darkMode]);

	return (
		<button
			className={`rounded-lg border-1 p-2 shadow-lg border-neutral-400 ${
				darkMode ? 'shadow-gray-800' : null
			} transition duration-300 hover:scale-125`}
			onClick={toggleDarkMode}
		>
			{darkMode ? (
				<MoonIcon
					className={`h-8 w-auto xs:h-4 sm:h-4 cursor-pointer stroke-1 ${
						darkMode
							? 'fill-yellow-400 stroke-yellow-400'
							: 'fill-none stroke-neutral-400'
					} `}
				/>
			) : (
				<SunIcon
					className={`h-8 w-auto xs:h-4 sm:h-4 cursor-pointer stroke-1 ${
						darkMode
							? 'fill-none stroke-neutral-400'
							: 'fill-yellow-400 stroke-yellow-400'
					} `}
				/>
			)}
		</button>
	);
};

export default ThemeIcon;
