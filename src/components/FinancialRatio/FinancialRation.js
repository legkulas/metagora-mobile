import React from 'react'
import CalculateBusinessRisk from './CalculateBusinessRisk';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const FinancialRation = () => {
  return (
		<motion.div
			variants={fadeIn('up', 0.1)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className=""
		>
			<CalculateBusinessRisk />
		</motion.div>
  );
}

export default FinancialRation
