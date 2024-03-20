import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Card = ({ children }) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div
			className={`w-full h-full rounded-m relative p-3 xs:p-0 border-2 ${
				darkMode
					? 'bg-gray-900 border-gray-800'
					: 'bg-white border-neutral-200'
			}`}
		>
			{children}
		</div>
	);
};

export default Card;
