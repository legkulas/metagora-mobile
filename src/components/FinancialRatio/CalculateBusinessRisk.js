import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mockIncomeStatements } from '../../constants/mock';

const CalculateBusinessRisk = () => {
	const [stocksData, setStocksData] = useState([]);

	useEffect(() => {
		const demo = 'enter your api key';
		const stocks = ['AAPL', 'MSFT', 'GOOG'];

		const fetchData = async () => {
			const data = [];

			for (const stock of stocks) {
				// const incomeStatement = await axios.get(
				// 	`https://financialmodelingprep.com/api/v3/income-statement/${stock}?apikey=${demo}`
				// );
				const incomeData = mockIncomeStatements.slice(0, 5);

				const revenues = incomeData.map((item) => item.revenue);
				const link = incomeData.map((item) => item.finalLink);

				const operatingIncome = incomeData.map(
					(item) => item.operatingIncome
				);
				const netIncome = incomeData.map((item) => item.netIncome);

				const revenuesArray = revenues;
				const operatingIncomeArray = operatingIncome;
				const netIncomeArray = netIncome;

				const CV_Sales = calculateCoefficientOfVariation(revenuesArray);
				const CV_OI =
					calculateCoefficientOfVariation(operatingIncomeArray);
				const CV_Net_Income =
					calculateCoefficientOfVariation(netIncomeArray);

				data.push({
					stock: stock,
					CV_Sales: CV_Sales,
					CV_OI: CV_OI,
					CV_Net_Income: CV_Net_Income,
					link: link,
				});
			}

			setStocksData(data);
		};

		fetchData();
	}, []);

	const calculateCoefficientOfVariation = (array) => {
		const mean = array.reduce((acc, val) => acc + val, 0) / array.length;
		const variance =
			array.reduce((acc, val) => acc + (val - mean) ** 2, 0) /
			array.length;
		const standardDeviation = Math.sqrt(variance);
		return standardDeviation / mean;
	};

	return (
		<div>
			{stocksData.map((stockData, index) => (
				<div
					key={index}
					className="flex flex-row xs:flex-col sm:flex-col justify-between items-baseline py-5 divide-y divide-blackCurrant-100/25"
				>
					<div className="flex flex-col py-3 px-5 xs:p-1 sm:p-1 w-1/2 xs:w-full sm:w-full">
						<h2 className="text-xl xs:text-base font-bold xs:p-0 divide-y divide-gray-200 pb-3">
							<span className="text-sm mr-3 font-normal text-doveGray-300">
								Stock Symbol:
							</span>
							<span>{stockData.stock}</span>
						</h2>
					</div>

					<div className="flex flex-col py-3 px-5 xs:p-1 sm:p-1 w-1/2 xs:w-full sm:w-full">
						<p className="flex flex-row justify-between items-baseline py-2">
							<span className="text-sm">
								Revenue Coefficient of Variation:{' '}
							</span>
							<span className="font-bold">
								{stockData.CV_Sales.toFixed(2)}
							</span>
						</p>
						<p className="flex flex-row justify-between items-baseline py-2">
							<span className="text-sm">
								Operating Income Coefficient of Variation:{' '}
							</span>
							<span className="font-bold">
								{stockData.CV_OI.toFixed(2)}
							</span>
						</p>
						<p className="flex flex-row justify-between items-baseline py-2">
							<span className="text-sm">
								Net Income Coefficient of Variation:{' '}
							</span>
							<span className="font-bold">
								{stockData.CV_Net_Income.toFixed(2)}
							</span>
						</p>
						<p className='relative pt-5 pb-3'>
							<a
								href={stockData.link[index]}
								target="_blank"
								className="absolute right-0 inline-block font-bold px-6 py-2 text-xs leading-6 text-center text-white uppercase  bg-denim-400 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none transition-all duration-300"
								rel="noreferrer"
							>
								Read more
							</a>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CalculateBusinessRisk;
