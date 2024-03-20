import React from 'react';
import IncomeStatements from './IncomeStatements';
import { mockCompanyOutlook } from '../../constants/mock';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const FinancialStatements = () => {
	return (
		<motion.div
			variants={fadeIn('up', 0.1)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className=""
		>
			<IncomeStatements
				incomeStatements={mockCompanyOutlook.financialsAnnual.income}
			/>
		</motion.div>
	);
};

export default FinancialStatements;
