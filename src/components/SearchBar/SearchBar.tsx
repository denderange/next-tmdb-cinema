"use client";

import { FormEvent, useState } from "react";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		window.location.href = `/search/${search}`;
	};

	return (
		<form
			className='flex justify-between px-5 max-w-6xl mx-auto'
			onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full h-14 rounded-md placeholder-gray-500 bg-transparent pl-4 border
 border-gray-300 focus:outline-none focus:border-amber-500 flex-1'
			/>
			<button
				className='text-amber-600 disabled:text-gray-400 ml-4 border border-amber-900 rounded-md px-6
        hover:bg-gray-600 transition transition-duration-300'
				disabled={search === ""}>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
