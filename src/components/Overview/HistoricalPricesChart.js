import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import {
	mockDailyChartEOD,
	mockHistoricalData,
	mockStockQuote,
} from '../../constants/mock';
import {
	BarChart,
	Bar,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

const HistoricalPricesChart = ({ historicalPrices }) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div className="size-full h-72 mt-5 xs:mb-5 p-3 xs:p-0">
			<h2 className="text-xl xs:text-base font-bold p-2 xs:p-0">
				Historical Prices
			</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={730}
					height={250}
					data={mockDailyChartEOD.historical}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis type="number" domain={['auto', 'auto']} />
					<Tooltip />
					<Legend />
					<Bar type="monotone" dataKey="low" fill="#8884d8" />
					<Bar type="monotone" dataKey="high" fill="#82ca9d" />
					<Bar type="monotone" dataKey="open" fill="#8884d8" />
					<Bar type="monotone" dataKey="close" fill="#82ca9d" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default React.memo(HistoricalPricesChart);
