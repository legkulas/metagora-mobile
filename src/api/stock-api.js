import { handle403Error } from '../helpers/error-handlers';

const basePath = 'https://finnhub.io/api/v1';

export const searchSymbols = async (query) => {
	const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);

	if (response.status === 403) {
		handle403Error();
		return;
	}

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchStockDetails = async (symbol) => {
	const url = `${basePath}/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);

	if (response.status === 403) {
		handle403Error();
		return;
	}

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchStockQuote = async (symbol) => {
	const url = `${basePath}/quote?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

// export const fetchHistoricalData = async (symbol, resolution, from, to) => {
// 	const url = `${basePath}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
// 	const response = await fetch(url);

// 	if (!response.ok) {
// 		const message = `An error has occured: ${response.status}`;
// 		throw new Error(message);
// 	}

// 	return await response.json();
// };

export const fetchBasicFinancials = async (symbol) => {
	const url = `${basePath}/stock/metric?symbol=${symbol}&metric=all&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);

	if (response.status === 403) {
		handle403Error();
		return;
	}

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

// export const fetchInsiderTransactions = async (symbol) => {
// 	const url = `${basePath}/stock/insider-transactions?symbol=${symbol}&limit=20&token=${process.env.REACT_APP_API_KEY}`;
// 	const response = await fetch(url);

// 	if (response.status === 403) {
// 		handle403Error();
// 		return;
// 	}

// 	if (!response.ok) {
// 		const message = `An error has occured: ${response.status}`;
// 		throw new Error(message);
// 	}
// 	console.log(
// 		'fetchInsiderTransactions',
// 		response.json().then((data) => console.log(data))
// 	);
// 	return await response.json();
// };
