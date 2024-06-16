import Results from "@/components/Results/Results";
import { getSearchResults } from "@/utils/fetchData";

const SearchPage = async ({ params }: { params: { searchTerm: string } }) => {
	const results = await getSearchResults(params.searchTerm);

	return (
		<div>
			{!results && results.length === 0 ? (
				<h1 className='text-center pt-6'>No results found</h1>
			) : (
				<Results results={results} />
			)}
		</div>
	);
};

export default SearchPage;
