import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Navbar from './nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Noter',
	description: 'Homepage for Noter note-taking app',
	icons: {
		icon: '/favicon.ico',
		apple: '/favicon.ico',
	},
};

function NavbarIcon({
	showMenu,
	setShowMenu,
}: {
	showMenu: boolean;
	setShowMenu: (show: boolean) => void;
}) {
	return (
		<button onClick={() => setShowMenu(!showMenu)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke='currentColor'
				aria-hidden='true'
				className='h-6 w-6'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M4 6h16M4 12h16M4 18h16'
				></path>
			</svg>
		</button>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body className={inter.className}>
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
				<footer className='bg-gray-100 m-0'>
					<p>Footer</p>
				</footer>
			</body>
		</html>
	);
}
