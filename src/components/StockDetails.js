import React from 'react';
import Card from './Card';
import Tabs from './Tabs';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CountUp from 'react-countup';

const StockDetails = ({ companyOutlook }) => {
	return (
		<Card>
			<div className="flex flex-row xs:flex-col justify-start items-center p-5">
				<motion.div
					variants={fadeIn('right', 0.1)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="pr-5 xs:p-0 xs:m-auto"
				>
					<div className="flex justify-center items-center w-40 h-40 xs:w-20 xs:h-20 m-auto xs:mb-3 overflow-hidden rounded-1/2 bg-gray-400">
						<img
							src={companyOutlook.profile.image}
							alt=""
							className="w-1/2 m-auto"
						/>
					</div>
				</motion.div>
				<div className="xs:text-center">
					<motion.h2
						variants={fadeIn('left', 0.1)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-5xl xs:text-3xl font-bold"
					>
						{companyOutlook.profile.companyName}
					</motion.h2>
					<motion.div
						variants={fadeIn('up', 0.1)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="py-3 text-lg"
					>
						<span>{companyOutlook.profile.symbol} | </span>
						<span>{companyOutlook.profile.exchangeShortName}</span>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.1)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="py-3 text-lg"
					>
						<span className="text-3xl font-bold">
							<CountUp
								start={0}
								end={companyOutlook.profile.price}
								decimals={2}
								decimal="."
								duration={2}
							/>
							{/* {companyOutlook.profile.price} */}
						</span>
						<span className="text-sm px-2">
							{companyOutlook.profile.currency}
						</span>
						<span
							className={`text-lg pr-1 ${
								companyOutlook.profile.changes > 0
									? 'text-green-500'
									: 'text-red-500'
							}`}
						>
							<CountUp
								start={0}
								end={companyOutlook.profile.changes}
								decimals={2}
								decimal="."
								duration={5}
							/>
						</span>
						<span
							className={
								companyOutlook.profile.lastDiv > 0
									? 'text-green-500'
									: 'text-red-500'
							}
						>
							(
							<CountUp
								start={0}
								end={companyOutlook.profile.lastDiv}
								decimals={2}
								decimal="."
								duration={5}
							/>
							%)
						</span>
					</motion.div>
				</div>
			</div>

			<Tabs companyData={companyOutlook} />
		</Card>
	);
};

export default StockDetails;
