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
			<div></div>
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
				<main className='py-12 flex flex-col items-center  gap-8 lg:gap-24'>
					{children}
				</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
