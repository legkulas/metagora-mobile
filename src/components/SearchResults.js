import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import StockContext from '../context/StockContext';

const SearchResults = ({ results, clearSearchResultsOnClick }) => {
	const { darkMode } = useContext(ThemeContext);
	const { setStockSymbol } = useContext(StockContext);

	return (
		<ul
			className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll customs-scrollbar divide-y-1 z-10 ${
				darkMode
					? 'bg-gray-900 border-gray-800 custom-scrollbar-dark'
					: 'bg-white border-neutral-100'
			}`}
		>
			{results.map((result) => {
				return (
					<li
						key={result.symbol}
						className={`flex items-center justify-between cursor-pointer p-4 m-2 rounded-md ${
							darkMode
								? 'hover:bg-indigo-600'
								: 'hover:bg-indigo-200'
						} transition duration-300`}
						onClick={() => {
							setStockSymbol(result.symbol);
							clearSearchResultsOnClick();
						}}
					>
						<span className=" divide-x-1">{result.symbol}</span>
						<span className="text-right whitespace-normal w-2/3">
							{result.description}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export default SearchResults;
