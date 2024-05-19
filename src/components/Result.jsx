import Card from '@/components/Card';

export default function Result({ results }) {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
			{results.map((result) => (
				<Card
					key={result.id}
					result={result}
				/>
			))}
		</div>
	);
}
