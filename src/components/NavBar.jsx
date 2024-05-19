import { Suspense } from 'react';

import NavBarItem from '@/components/NavBarItem';

export default function NavBar() {
	return (
		<div className="limit dark:bg-gray-600 bg-amber-100 p-2 mt-4 md:p-4">
			<div className="flex gap-4 sm:gap-8 md:gap-16 justify-center items-center pad">
				<Suspense fallback={<div>loading...</div>}>
					<NavBarItem
						title="Trending"
						param="fetchTrending"
					/>
					<NavBarItem
						title="Top Rated"
						param="fetchTopRated"
					/>
				</Suspense>
			</div>
		</div>
	);
}
