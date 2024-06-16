import Results from "@/components/Results/Results";
import { getMovies } from "../utils/fetchData";

export default async function Home({ searchParams }: any) {
	const genre = searchParams.genre || "fetchTrending";
	const res = await getMovies(genre);

	return (
		<main>
			<Results results={res} />
		</main>
	);
}
