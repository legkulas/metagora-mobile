import React from 'react';

const IncomeStatementsTH = ({ title, data, incomeStatements }) => {
	const income = incomeStatements;

	const convertMillionToBillion = (number) => {
		const numberLength = number.toString().length;

		if (numberLength > 10 && typeof number === 'number') {
			return (number / 1000000000).toFixed(2) + ' B';
		} else if (numberLength > 7 && typeof number === 'number') {
			return (number / 1000000).toFixed(2) + ' M';
		}

		return number;
	};

	return (
		<tr>
			<th>
				<h2 className="text-left text-base font-bold">{title}</h2>
			</th>

			{Object.entries(income).map(([key, value], index) => (
				<th
					key={key}
					className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
				>
					{console.log(value[JSON.stringify(data)])}
					{convertMillionToBillion(value)}
				</th>
			))}
		</tr>
	);
};

export default IncomeStatementsTH;
