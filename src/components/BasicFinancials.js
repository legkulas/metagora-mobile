import Card from './Card';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const BasicFinancials = ({ basicFinancials }) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<Card>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</Card>
	);
};

export default BasicFinancials;
