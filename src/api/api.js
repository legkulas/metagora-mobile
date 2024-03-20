import axios from 'axios';

const API_BASE_URL = 'https://financialmodelingprep.com/api/v3';
const API_KEY = process.env.REACT_APP_API_KEY_FMP;

export const getIntradayChart = async (symbol) => {
	// try {
	// 	const response = await axios.get(
	// 		`${API_BASE_URL}/historical-chart/5min/${symbol}?from=2023-08-10&to=2023-09-10&apikey=${API_KEY}&limit=12`
	// 	);
	// 	return response.data;
	// } catch (error) {
	// 	console.error('Error getIntradayChart:', error);
	// 	throw error;
	// }
};
