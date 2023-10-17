import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';

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
				strokeWidth='2'
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

function Footer() {
	return (
		<div className='flex flex-col lg:flex-row gap-16 justify-center p-4 bg-gray-100 dark:bg-gray-900'>
			<div className='flex flex-col'>
				<p>© 2023 Ondřej Hána</p>
				<p>
					Tato stránka slouží jako zápočtový projekt pro předmět
					TNPW1.
				</p>
			</div>
			<div>
				<form className='flex flex-col gap-2'>
					<input
						type='text'
						placeholder='Email'
						className='p-1 rounded dark:text-black'
					/>
					<input
						type='textarea'
						placeholder='Message'
						className='p-1 rounded dark:text-black'
					/>
					<button className='hover:bg-white dark:hover:bg-gray-800 rounded p-1'>
						Send
					</button>
				</form>
			</div>
		</div>
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
				<main className='py-12 flex flex-col items-center justify-center gap-32'>
					{children}
				</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
