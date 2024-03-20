import React, { useState, useContext, useRef } from 'react';
import SearchResults from './SearchResults';
import ThemeContext from '../context/ThemeContext';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { searchSymbols } from '../api/stock-api';

const Search = () => {
	const { darkMode } = useContext(ThemeContext);

	const [input, setInput] = useState('');
	const timeoutRef = useRef(null);

	const [bestMatches, setBestMatches] = useState([]);

	const clear = () => {
		setInput('');
		setBestMatches([]);
	};

	const clearSearchResultsOnClick = () => {
		setBestMatches([]);
	};
	

	const updateBestMatches = async () => {
		try {
			if (input) {
				const searchResults = await searchSymbols(input);
				const result = searchResults.result;
				setBestMatches(result);
			}
		} catch (error) {
			setBestMatches([]);
			console.log(error);
		}
	};

	const handleInputChange = (e) => {
		setInput(e.target.value);

		// If a timer is already running, clear it.
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setInput(e.target.value);
			updateBestMatches();
		}, 250);
	};

	return (
		<div
			className={`flex items-center m-0 border-2 rounded-md relative z-1 w-96 xs:w-full sm:w-full ${
				darkMode
					? 'bg-gray-900 border-gray-800 text-gray-500'
					: 'bg-white border-neutral-200'
			}`}
		>
			<input
				type="text"
				value={input}
				className={`w-full px-4 focus:outline-none rounded-md ${
					darkMode ? 'bg-gray-900' : null
				}`}
				placeholder="Search Stock"
				onChange={handleInputChange}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						updateBestMatches();
					}
				}}
			/>
			{input && (
				<button onClick={clear} className="m-1">
					<XMarkIcon className="h-4 w-4 fill-gray-500" />
				</button>
			)}
			<button
				onClick={updateBestMatches}
				className={`h-8 w-8 rounded-md justify-center items-center m-1 p-2 bg-indigo-600 transition duration-300 ring-indigo-400 ${
					input.length < 1 && bestMatches.length < 1
						? 'opacity-50 cursor-not-allowed'
						: 'hover:ring-2'
				}`}
				disabled={input < 1 && bestMatches.length < 1}
			>
				<MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
			</button>

			{input.length > 0 && bestMatches.length > 0 ? (
				<SearchResults
					results={bestMatches}
					clearSearchResultsOnClick={clearSearchResultsOnClick}
				/>
			) : null}
		</div>
	);
};

export default Search;
