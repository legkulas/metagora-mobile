import Header from './Header';
import StockDetails from './StockDetails';
import React, { useContext, useEffect, useState } from 'react';
import StockContext from '../context/StockContext';
import {
	fetchStockDetails,
	// fetchStockQuote,
} from '../api/stock-api';
import { mockCompanyOutlook } from '../constants/mock';
import ParticlesContainer from './ParticlesContainer';

const Dashboard = () => {
	const { stockSymbol } = useContext(StockContext);
	const [stockDetails, setStockDetails] = useState({});
	// const [quote, setQuote] = useState({});

	useEffect(() => {
		const updateStockDetails = async () => {
			try {
				const response = await fetchStockDetails(stockSymbol);
				response ? setStockDetails(response) : setStockDetails({});
			} catch (error) {
				setStockDetails({});
				console.log(error);
			}
		};

		// const updateStockOverview = async () => {
		// 	try {
		// 		const response = await fetchStockQuote(stockSymbol);
		// 		setQuote(response);
		// 	} catch (error) {
		// 		setQuote({});
		// 		console.log(error);
		// 	}
		// };

		if (stockSymbol.length > 0) {
			updateStockDetails();
			// updateStockOverview();
		}
	}, [stockSymbol]);

	return (
		<div className="container xs:max-w-full sm:max-w-full mx-auto p-5 font-quicksan min-h-screen">
			<div className="relative z-50">
				<Header name={stockDetails.name} />
			</div>

			<div className="flex justify-between items-center pb-3 relative z-10">
				<StockDetails companyOutlook={mockCompanyOutlook} />
			</div>

			<div className="flex flex-row w-full pb-3 relative z-10"></div>
			<ParticlesContainer />
		</div>
	);
};

export default React.memo(Dashboard);
