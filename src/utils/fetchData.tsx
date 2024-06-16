const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;

export const getMovies = async (genre: string) => {
	try {
		const res = await fetch(
			`${TMDB_BASE_URL}${
				genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
			}?api_key=${TMDB_API_KEY}&language=en-US&page=1`
		);

		const data = await res.json();
		const results = data.results;
		return results;
	} catch (error) {
		throw new Error("Error fetching data: " + error);
	}
};
