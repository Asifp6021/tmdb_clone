import Image from 'next/image';

export default async function MoviePage({ params }) {
	const movieId = params.id;

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
	);

	const movie = await res.json();

	return (
		<div className="limit pt-12">
			<div className="pad w-full flex flex-col md:flex-row content-center gap-8 justify-center ">
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					alt="images"
					width={500}
					height={300}
					className="w-full"
				/>
				<div className="pt-4 flex flex-col gap-2">
					<h2 className="text-lg  font-bold">{movie.title || movie.name}</h2>
					<p className="text-lg">{movie.overview}</p>
					<p className="font-semibold">
						{' '}
						Date Released:{' '}
						<span>{movie.release_date || movie.first_air_date}</span>
					</p>
					<p className="flex gap-2 items-center font-semibold">
						Rating:
						<span>{movie.vote_count} </span>
					</p>
				</div>
			</div>
		</div>
	);
}
