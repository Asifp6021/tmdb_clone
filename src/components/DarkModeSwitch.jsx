'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div>
			<div>
				{currentTheme === 'dark' ? (
					<MdLightMode
						size={20}
						className="cursor-pointer hover:text-amber-500"
						onClick={() => setTheme('light')}
					/>
				) : (
					<MdDarkMode
						size={20}
						className="cursor-pointer hover:text-amber-500"
						onClick={() => setTheme('dark')}
					/>
				)}
			</div>
		</div>
	);
}
