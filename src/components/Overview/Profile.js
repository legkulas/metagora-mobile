import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Profile = ({ profile }) => {
	const checkLength = (value) => {
		return value.length > 0 ? value : 'N/A';
	};

	return (
		<div>
			<motion.div
				variants={fadeIn('up', 0.1)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className=""
			>
				<div className="flex flex-row flex-wrap justify-between items-start mt-3 xs:mt-0 text-sm sm:text-xs">
					<div className="flex flex-col justify-start xs:p-3 xs:w-full">
						<h2 className="font-bold py-1 xs:p-0">CEO</h2>
						<p>{profile.ceo}</p>
					</div>
					<div className="flex flex-col justify-start xs:p-3 xs:w-full">
						<h2 className="font-bold py-1 xs:py-0">Sector</h2>
						<p>{profile.sector}</p>
					</div>
					<div className="flex flex-col justify-start xs:p-3 xs:w-full">
						<h2 className="font-bold py-1 xs:py-0">Industry</h2>
						<p>{profile.industry}</p>
					</div>
					<div className="flex flex-col justify-start xs:p-3 xs:w-full">
						<h2 className="font-bold py-1 xs:py-0">Website</h2>
						<p>{profile.website}</p>
					</div>
					<div className="flex flex-col justify-start xs:p-3 xs:w-full">
						<h2 className="font-bold py-1 xs:py-0">Exchange</h2>
						<p>{profile.exchange}</p>
					</div>
				</div>
			</motion.div>

			<div className="flex flex-row xs:flex-col sm:flex-col justify-start pt-8">
				{/* desc */}
				<motion.div
					variants={fadeIn('up', 0.1)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="w-9/12 xs:w-full sm:w-full"
				>
					<h2 className="text-xl font-bold py-1">Description</h2>
					<p className="text-sm text-left leading-5">
						{profile.description}
					</p>
				</motion.div>

				{/* summary */}
				<motion.ul
					variants={fadeIn('up', 0.1)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="lex flex-col justify-start items-center w-3/12 xs:w-full sm:w-full pl-8 pr-0 xs:p-0 sm:p-0 text-sm divide-y-1 divided-gray-50"
				>
					<li className="flex flex-row justify-between w-full text-sm py-1">
						<h2 className="text-xl font-bold py-1">Summary</h2>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>CIK</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.cik)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>ISIN</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.isin)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>CUSIP</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.cusip)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>Address</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.address)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>Phone</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.phone)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>Country</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.country)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>Employee</span>
						<span className="w-3/5 whitespace-break-spaces text-right">
							{checkLength(profile.fullTimeEmployees)}
						</span>
					</li>
					<li className="flex flex-row justify-between w-full py-1">
						<span>IPO Date</span>
						<span>
							{profile.ipoDate.length > 0
								? new Date(profile.ipoDate).toLocaleDateString(
										'en-US',
										{
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										}
								  )
								: 'N/A'}
						</span>
					</li>
				</motion.ul>
			</div>
		</div>
	);
};

export default React.memo(Profile);
