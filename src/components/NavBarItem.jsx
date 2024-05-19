'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function NavBarItem({ title, param }) {
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');

	return (
		<Link
			href={`/?genre=${param}`}
			className={`md:text-xl hover:text-amber-600 font-semibold ${
				genre === param
					? `underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg`
					: ``
			}`}>
			{title}
		</Link>
	);
}
