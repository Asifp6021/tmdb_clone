import Result from '@/components/Result';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
	await new Promise((r) => setTimeout(r, 1000));
	const genre = searchParams.genre || 'fetchTrending';

	const res = await fetch(
		`https:/api.themoviedb.org/3${
			genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
		}?api_key=${API_KEY}&language=US&page=1
		`,
		{ next: { revalidate: 10 } }
	);

	const data = await res.json();

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const results = data.results;

	return (
		<div className="limit pt-6">
			<div className="pad">
				<Result results={results} />
			</div>
		</div>
	);
}
