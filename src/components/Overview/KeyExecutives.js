import React from 'react';

const KeyExecutives = ({ keyExecutives }) => {
	return (
		<div className="flex flex-col mt-8 xs:hidden sm:hidden">
			<h2 className="text-xl font-bold py-1">Key Executives</h2>

			<table className="text-sm sm:text-xs text-left w-full table-auto">
				<thead className="border-b-1 align-middle sm:align-top">
					<tr>
						<th className="py-3">Name</th>
						<th className="py-3">Title</th>
						<th className="py-3">Pay</th>
						<th className="py-3">Currency Pay</th>
						<th className="py-3">Gender</th>
						<th className="py-3">Year Born</th>
						<th className="py-3">Title Since</th>
					</tr>
				</thead>
				<tbody className="align-middle sm:align-top">
					{Object.keys(keyExecutives).map((item, index) => {
						const executive = keyExecutives[item];

						return (
							<tr key={index}>
								<td className="py-3">{executive.name}</td>
								<td className="py-3">{executive.title}</td>
								<td className="py-3">{executive.pay}</td>
								<td className="py-3">
									{executive.currencyPay}
								</td>
								<td className="py-3">{executive.gender}</td>
								<td className="py-3">{executive.yearBorn}</td>
								<td className="py-3">
									{new Date(
										executive.titleSince
									).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default React.memo(KeyExecutives);
