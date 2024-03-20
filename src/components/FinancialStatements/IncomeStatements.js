import React from 'react';

const IncomeStatements = (incomeStatements) => {
	const income = incomeStatements.incomeStatements;

	const convertMillionToBillion = (number) => {

		if (typeof number === 'number') { 
			const numberLength = number.toString().length;

			if (numberLength > 8) {
				return (number / 1000000000).toFixed(2) + ' B';
			} else if (numberLength > 6) {
				return (number / 1000000).toFixed(2) + ' M';
			}

		}
	
		return number;
	};

	return (
		<div>
			<h2 className="text-xl xs:text-base font-bold p-2 xs:p-0 divide-y divide-gray-200">
				Financial Statements
			</h2>
			<div className="overflow-x-auto">
				<table className="table-auto min-w-full divide-y divide-gray-200">
					<thead>
						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Year
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{value.calendarYear}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Total Revenue
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(value.revenue)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Cost of Revenue
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.costOfRevenue
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Gross Profit
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.grossProfit
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Operating Expenses
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.operatingExpenses
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Operating Income
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.operatingIncome
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Total Other Income/Expenses Net
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.totalOtherIncomeExpensesNet
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Income Before tax
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.incomeBeforeTax
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Net Income
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.netIncome
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									Basic EPS
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(value.eps)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									EPS Diluted
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(
											value.epsdiluted
										)}
									</th>
								)
							)}
						</tr>

						<tr>
							<th>
								<h2 className="text-left text-base font-bold">
									EBITDA
								</h2>
							</th>

							{Object.entries(income).map(
								([key, value], index) => (
									<th
										key={key}
										className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
									>
										{convertMillionToBillion(value.ebitda)}
									</th>
								)
							)}
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};

export default IncomeStatements;
