import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import MenuItem from '@/components/MenuItems';
import DarkModeSwitch from '@/components/DarkModeSwitch';

export default function Header() {
	return (
		<header className="limit">
			<div className="flex justify-between items-center w-full  pad py-4 gap-8 ">
				<div className="flex gap-4">
					<MenuItem
						title="home"
						address="/"
						Icon={AiFillHome}
					/>
					<MenuItem
						title="about"
						address="/about"
						Icon={BsFillInfoCircleFill}
					/>
				</div>

				<div className="flex items-center gap-4">
					<DarkModeSwitch />

					<Link
						className="flex gap-2 justify-center items-center"
						href="/">
						<span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg cursor-pointer">
							IMTB
						</span>

						<span className="text-xl hidden sm:inline">Clone</span>
					</Link>
				</div>
			</div>
		</header>
	);
}

// 8415fc63a5eb79a18aa9c2c2865ec0ee

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE1ZmM2M2E1ZWI3OWExOGFhOWMyYzI4NjVlYzBlZSIsInN1YiI6IjY0Y2UzN2NkMzAzYzg1MDBhZGUzZDEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iR5mQ1QRz7HmqfGSoBPyAuVM5VkQea42bRgIiZF1JGk
