import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// overview
import Profile from './Overview/Profile';
import KeyExecutives from './Overview/KeyExecutives';
import HistoricalPricesChart from './Overview/HistoricalPricesChart';
import FinancialAnnualIncomeChart from './Overview/FinancialAnnualIncomeChart';

// financial statements
import FinancialStatements from './FinancialStatements/FinancialStatements';

// financial ratio
import FinancialRatio from './FinancialRatio/FinancialRation';

import ThemeContext from '../context/ThemeContext';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function LabTabs({ companyData }) {
	const { darkMode } = useContext(ThemeContext);

	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<motion.div
			variants={fadeIn('right', 0.1)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className=""
		>
			<Box
				sx={{
					width: '100%',
					typography: 'body1',
					'.MuiTabPanel-root': {
						'@media (min-width: 320px) and (max-width: 639px)': {
							paddingX: '10px',
							paddingY: '10px',
						},
					},
				}}
			>
				<TabContext value={value}>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: 'divider',
						}}
					>
						<TabList
							onChange={handleChange}
							aria-label="lab API tabs example"
							sx={{
								'& .MuiTabs-flexContainer': {
									'@media (min-width: 320px) and (max-width: 639px)':
										{
											flexDirection: 'column',
										},
								},
								'& .MuiButtonBase-root': {
									'@media (min-width: 320px) and (max-width: 639px)':
										{
											paddingX: '5px',
											paddingY: '5px',
											minHeight: '25px',
											width: '100%',
											maxWidth: '100%',
											minWidth: '100%',
										},
								},
								'& .MuiButtonBase-root.MuiTab-root:not(.Mui-selected)':
									{
										color: darkMode && 'white',
									},
							}}
						>
							<Tab label="Overview" value="1" />
							<Tab label="Financial Statements" value="2" />
							<Tab label="Financial Ratio" value="3" />
						</TabList>
					</Box>

					{/* Overview */}
					<TabPanel value="1">
						<Profile profile={companyData.profile} />
						<KeyExecutives
							keyExecutives={companyData.keyExecutives}
						/>
						<div className="flex flex-row xs:flex-col sm:flex-col justify-around w-full">
							<HistoricalPricesChart
								historicalPrices={companyData.historical}
							/>
							<FinancialAnnualIncomeChart
								financialsAnnualChartData={
									companyData.financialsAnnual.income
								}
							/>
						</div>
					</TabPanel>

					<TabPanel value="2">
						<FinancialStatements />
					</TabPanel>

					<TabPanel value="3">
						<FinancialRatio />
					</TabPanel>
				</TabContext>
			</Box>
		</motion.div>
	);
}
