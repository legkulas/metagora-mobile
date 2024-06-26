import React from 'react';
import {
    Area,
    AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';

const FinancialAnnualIncomeChart = ({ financialsAnnualChartData }) => {
	return (
		<div className="size-full h-72 mt-5 xs:mb-5 p-3 xs:p-0">
			<h2 className="text-xl xs:text-base font-bold p-2 xs:p-0">
				Financial Annual Income
			</h2>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					width={730}
					height={250}
					data={financialsAnnualChartData}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient
							id="colorUv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#8884d8"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#8884d8"
								stopOpacity={0}
							/>
						</linearGradient>
						<linearGradient
							id="colorPv"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="#82ca9d"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#82ca9d"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey="date" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="revenue"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
					<Area
						type="monotone"
						dataKey="costOfRevenue"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
					<Area
						type="monotone"
						dataKey="grossProfit"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
					<Area
						type="monotone"
						dataKey="grossProfitRatio"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default React.memo(FinancialAnnualIncomeChart);
