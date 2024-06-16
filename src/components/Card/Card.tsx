import type { ResultType } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }: any) => (
	<div
		className='group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg 
  sm:border sm:border-slate-400 sm:m-2 transition transition-duration-300'>
		<Link href={`/movie/${result.id}`}>
			<Image
				src={`https://image.tmdb.org/t/p/original/${
					result.backdrop_path || result.poster_path
				}`}
				width={500}
				height={300}
				className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 ease-in-out'
				alt='poster'
			/>
			<div className='p-2'>
				<p className='line-clamp-2 text-md'>{result.overview}</p>
				<h2 className='text-2xl font-bold truncate'>
					{result.title || result.name}
				</h2>
				<p className='flex items-center'>
					{result.release_date || result.first_air_date}
				</p>
				<div className='flex gap-2'>
					<FiThumbsUp className='h-5 mx-2' /> {result.vote_count}
				</div>
			</div>
		</Link>
	</div>
);

export default Card;
