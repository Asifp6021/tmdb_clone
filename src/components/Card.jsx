import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
	return (
		<div className="group flex flex-col gap-2 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
			<Link href={`/movie/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						result.backdrop_path || result.poster_path
					}`}
					alt="images"
					width={550}
					height={300}
					className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
				/>
				<div className="p-2">
					<p className="line-clamp-2 text-md">{result.overview}</p>
					<h2 className="text-lg font-bold truncate">
						{result.title || result.name}
					</h2>
					<p className="flex gap-2 items-center">
						{result.release_date || result.first_air_date}
						<span className="flex gap-1 justify-center items-center">
							<FiThumbsUp />
							{result.vote_count}
						</span>
					</p>
				</div>
			</Link>
		</div>
	);
}
