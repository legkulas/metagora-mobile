import Card from './Card';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext'; // Replace '../path/to/ThemeContext' with the actual path to the ThemeContext file.

const Details = ({ details }) => {
	const { darkMode } = useContext(ThemeContext);
	const detailList = {
		name: 'Name',
		country: 'Country',
		currency: 'Currency',
		exchange: 'XXchange',
		ipo: 'IPO Date',
		marketCapitalization: 'Market Cap',
		finnhubIndustry: 'Industry',
	};
	const convertMillionToBillion = (number) => {
		return (number / 1000).toFixed(2);
	};

	return (
		<Card>
			<ul
				className={`w-full h-full flex flex-col justify-between divide-y-1 ${darkMode ? 'divided-gray-50' : 'null'}`}
			>
				{Object.keys(detailList).map((item, index) => {
					return (
						<li
							key={index}
							className="flex justify-between items-center flex-1"
						>
							<span>{detailList[item]}:</span>
							<span
								className={`text-right ${
									item === 'exchange'
										? 'w-1/2 whitespace-normal'
										: ''
								}`}
							>
								{item === 'marketCapitalization' &&
								!isNaN(details[item])
									? `${convertMillionToBillion(
											details[item]
									  )}B`
									: details[item]}
							</span>
						</li>
					);
				})}
			</ul>
		</Card>
	);
};

export default Details;
