import Image from 'next/image';
import croc from '@/public/croc.png';
import linux from '@/public/linux.svg';
import screenshot2 from '@/public/Screenshot2.png';
import screenshot4 from '@/public/gallery/Screenshot4.png';
import screenshot6 from '@/public/gallery/Screenshot6.png';
import notepadIcon from '@/public/Notepad_Win11.svg';

function DownloadButton() {
	return (
		<a href='/download'>
			<button className='flex items-center justify-center w-full hover:bg-neutral-800 gap-2 bg-black text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 font-bold py-4 rounded'>
				Download for free!
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

function Iconsmash() {
	return (
		<div className='relative flex h-60 w-60 items-center justify-center mx-auto'>
			<div className='w-40 h-40 flex items-center justify-center rounded-lg absolute top-0 left-0'>
				<Image
					src={notepadIcon}
					width={100}
					height={100}
					alt='notepad icon'
				/>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='160'
				height='160'
				className='absolute bottom-0 right-0'
				viewBox='0 0 48 48'
			>
				<path
					fill='#2d92d4'
					d='M42.256,6H15.744C14.781,6,14,6.781,14,7.744v7.259h30V7.744C44,6.781,43.219,6,42.256,6z'
				></path>
				<path
					fill='#2150a9'
					d='M14,33.054v7.202C14,41.219,14.781,42,15.743,42h26.513C43.219,42,44,41.219,44,40.256v-7.202H14z'
				></path>
				<path
					fill='#2d83d4'
					d='M14 15.003H44V24.005000000000003H14z'
				></path>
				<path fill='#2e70c9' d='M14 24.005H44V33.055H14z'></path>
				<path
					fill='#00488d'
					d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'
				></path>
				<path
					fill='#fff'
					d='M18.403 19L16.857 26.264 15.144 19 12.957 19 11.19 26.489 9.597 19 7.641 19 9.985 29 12.337 29 14.05 21.311 15.764 29 18.015 29 20.359 19z'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 448 512'
				className='w-16 h-16 rounded-full p-3 bg-white z-10'
			>
				<path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
			</svg>
		</div>
	);
}

function MainLogo() {
	return (
		<div className='flex flex-col lg:flex-row-reverse gap-4 justify-center px-4'>
			<Image
				src={croc}
				width={480}
				height={480}
				alt='croc'
				className='object-contain object-top'
			></Image>
			<div className='flex flex-col justify-between'>
				<h1 className='text-6xl md:text-8xl font-bold'>
					Markdown <br />
					Made
					<br />
					<strong className='text-green-500'>Fun</strong>!
				</h1>
				<DownloadButton />
			</div>
		</div>
	);
}

function Wave() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='rotate-180'
			viewBox='0 0 1440 320'
		>
			<path
				className='fill-green-300'
				fillOpacity='1'
				d='M0,64L34.3,96C68.6,128,137,192,206,197.3C274.3,203,343,149,411,138.7C480,128,549,160,617,176C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,149.3C1097.1,128,1166,96,1234,90.7C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
			></path>
		</svg>
	);
}

function AppPreview() {
	return (
		<div className='w-full'>
			<div className='flex justify-center w-full pt-4 px-4 md:px-8 md:pt-32 bg-gradient-to-t from-green-300 from-20%'>
				<div className='grid grid-cols-1 lg:grid-cols-3 columns-md gap-2 w-full max-w-screen-2xl'>
						<div className='row-span-1 lg:row-span-2 h-full lg:w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden'>
							<h3 className='font-bold text-2xl p-4'>
								All notes are visible in sidebar
							</h3>
							<div className='overflow-hidden w-full max-w-[352px] h-96 lg:h-full rounded-tr'>
								<Image
									src={screenshot2}
									alt='sidebar preview'
									className='object-cover object-left w-[1280px] h-[860px]'
								/>
							</div>
						</div>
					<div className='row-span-1 lg:col-span-2 h-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden'>
						<h3 className='font-bold text-2xl p-4'>
							All options are avaiable in top menu
						</h3>
						<div className='overflow-hidden '>
							<div className='w-[672px] h-96 '>
								<Image
									src={screenshot4}
									alt='top menu preview'
									className=' object-cover w-[1280px] h-[860px]'
								/>
							</div>
						</div>
					</div>
					<div className='row-span-1 lg:col-span-2 h-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden'>
						<h3 className='font-bold text-2xl p-4'>
							Search with one shortcut
						</h3>
						<div className='flex items-center max-w-2xl h-96 ml-auto mr-0 overflow-hidden rounded-l-lg'>
							<Image
								src={screenshot6}
								alt='search preview'
								className='object-cover w-[800px] h-[600px] sm:w-[1280px] sm:h-[860px] lg:w-[1920px] lg:h-[1080px]'
							/>
						</div>
					</div>
					<div className='row-span-1 lg:col-span-3 flex flex-col lg:flex-row  h-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden'>
						<h3 className='p-4 font-bold text-2xl '>
							Markdown syntax is automatically converted into rich
							text
						</h3>
						<div className='overflow-hidden w-full'>
							<div className='w-[1024px] h-96'>
								<Image
									src={screenshot2}
									alt='top menu preview'
									className='object-cover object-right w-[1280px] h-[860px]'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Wave />
		</div>
	);
}

function BestFeatures() {
	return (
		<div className='px-4 max-w-xl mx-auto'>
			<Iconsmash />
			<h2 className='text-xl md:text-3xl font-bold flex justify-center py-4'>
				The best from Word
				<strong className='text-green-500 px-1 md:px-3'>AND</strong>
				Notepad
			</h2>
			<p className='text-lg text-justify'>
				Noter combines the rich text editor expirience of apps like Word
				or Notion, but without the proprietary and unreadable file
				formats they use to store data.
			</p>
		</div>
	);
}

function PlatformIcons() {
	return (
		<div className='w-32 h-32 relative flex items-center justify-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				height='5em'
				className='absolute top-0 left-0 fill-current text-blue-500 z-0'
				viewBox='0 0 448 512'
			>
				<path d='M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z' />
			</svg>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				height='5em'
				viewBox='0 0 384 512'
				className='fill-current text-black dark:text-white absolute z-10 p-'
			>
				<path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
			</svg>
			<Image
				src={linux}
				height={80}
				width={80}
				alt='linux svg'
				className='absolute bottom-0 right-0 z-20'
			/>
		</div>
	);
}

function Cards() {
	return (
		<div className='flex flex-col gap-16 px-8 lg:px-32 pt-32 w-full max-w-screen-2xl'>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-center p-2 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-full md:max-w-2xl'>
				<div className='w-32 h-32 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='6em'
						width='6em'
						className='fill-current text-green-500'
						viewBox='0 0 576 512'
					>
						<path d='M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z' />
					</svg>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl mx-auto md:mx-0'>
						All your notes under your control!
					</h3>
					<p className='text-justify'>
						Noter saves all your notes in Markdown. A simple and
						human readable plain text file format so you can access
						them anytime, anywhere.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-center p-2 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-full md:max-w-2xl md:ml-auto md:mr-0'>
				<div className='w-32 h-32 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
						height='6em'
						width='6em'
						className='fill-current text-yellow-400'
					>
						<path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
					</svg>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl mx-auto md:mx-0'>
						Find everything with ease!
					</h3>
					<p className='text-justify'>
						Noter has a powerful full text search engine that allows
						you to find anything you need in instant.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-center  p-2 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-full md:max-w-2xl'>
				<div className='w-32 h-32 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='6em'
						width='6em'
						className='fill-current text-black dark:text-white'
						viewBox='0 0 496 512'
					>
						<path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
					</svg>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl mx-auto md:mx-0'>
						Fully open source
					</h3>
					<p className='text-justify'>
						You can&apos;t trust anyone today, including me. So I do
						everything I can to make sure you don&apos;t have to!
						Noter is fully open source and you can check out the
						code on GitHub.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-center  p-2 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-full md:max-w-2xl md:ml-auto md:mr-0'>
				<div className='w-32 h-32 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='6em'
						width='6em'
						className='fill-current text-red-500'
						viewBox='0 0 384 512'
					>
						<path d='M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z' />
					</svg>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl mx-auto md:mx-0'>
						Darkmode
					</h3>
					<p className='text-justify'>
						Noter has a beautiful darkmode that is easy on the eyes
						and saves battery life.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-4 items-center justify-center  p-2 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-full md:max-w-2xl '>
				<PlatformIcons />
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl mx-auto md:mx-0'>
						Your notes, Everywhere!
					</h3>
					<p className='text-justify'>
						Noter is built to be platform agnostic. You can use it
						on Windows, Mac or Linux.
					</p>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<MainLogo />
			<AppPreview />
			<BestFeatures />
			<Cards />
			<h2 className='text-xl font-bold'>And many more!...</h2>
		</>
	);
}
