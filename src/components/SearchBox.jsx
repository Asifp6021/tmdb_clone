'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
	const [search, setSearch] = useState('');
	const router = useRouter();
	function handleSubmit(e) {
		e.preventDefault();
		router.push(`/search/${search}`);
	}
	return (
		<div className="limit">
			<div className="pad w-full">
				<form
					className="relative"
					onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search keywords..."
						className="relative h-14 rounded-md placeholder-gray-500 outline-none w-full indent-4"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					<Link href={`/search/${search}`}>
						<button
							className="text-amber-600 disabled:text-gray-40 absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
							disabled={search === ''}>
							Search
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}
