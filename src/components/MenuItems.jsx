import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
	return (
		<Link
			href={address}
			className="hover:text-amber-500">
			<Icon
				className="sm:hidden"
				size={30}
			/>
			<p className="hidden sm:inline uppercase">{title}</p>
		</Link>
	);
}
