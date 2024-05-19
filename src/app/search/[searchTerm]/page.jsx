import Result from '@/components/Result';

export default async function SearchPage({ params }) {
	const searchTerm = params.searchTerm;

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-USpage=1&include_adult=false`
	);

	const data = await res.json();
	const results = data.results;

	return (
		<div className="limit pt-12">
			<div className="pad w-full flex flex-col md:flex-row content-center gap-8 justify-center ">
				{results && results.length === <h1>No result found</h1>}

				{results && <Result results={results} />}
			</div>
		</div>
	);
}
