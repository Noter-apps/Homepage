import Image from 'next/image';
import getGithubStars from './github_stars';

function NoterLogo() {
	return (
		<div className='flex items-center gap-2 flex-grow'>
			<Image
				src='/noter_logo.png'
				width={36}
				height={36}
				alt='Noter logo'
			/>
			<h1 className='text-2xl font-bold'>Noter</h1>
		</div>
	);
}

function PageNavigation() {
	return (
		<div className='flex gap-2'>
			<button className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'>
				Product
			</button>
			<button className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'>
				Blog
			</button>
			<button className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'>
				Gallery
			</button>
		</div>
	);
}

async function GitHubButton() {
	const stargazerCount = await getGithubStars();

	return (
		<a
			className='flex items-center gap-1'
			href='https://github.com/Noter-apps/Noter'
		>
			<div className='flex items-center border border-green-400 bg-emerald-200 dark:border-green-700 dark:bg-emerald-900 p-1 rounded'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 576 512'
					className='h-4 w-4 fill-gray-900 transition-colors duration-300 [margin-inline-end:4px] dark:fill-gray-100'
				>
					<path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'></path>
				</svg>
				<p>{stargazerCount}</p>
			</div>

			<div>
				<svg
					role='img'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					id='github-icon'
					className='h-10 w-10 fill-gray-900 py-1 transition-colors duration-300 dark:fill-gray-100'
				>
					<title>GitHub</title>
					<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
				</svg>
			</div>
		</a>
	);
}

function DownloadButton() {
	return (
		<a className='flex items-center' href='/download'>
			<button className='flex items-center gap-1 border bg-black hover:bg-neutral-800 hover:outline-gray-200 hover:outline-2 text-white p-2 rounded-lg'>
				<p>Download</p>
				<svg width='16' height='16' viewBox='0 0 24 24'>
					<path
						fill='currentColor'
						fillRule='evenodd'
						d='m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z'
					></path>
				</svg>
			</button>
		</a>
	);
}

function Navbar() {
	return (
		<nav className='flex items-center justify-between p-2 shadow '>
			<a href='/'>
				<NoterLogo />
			</a>
			<div>
				<PageNavigation />
			</div>
			<div className='hidden md:flex gap-2'>
				<GitHubButton />
				<DownloadButton />
			</div>
		</nav>
	);
}

export default Navbar;
