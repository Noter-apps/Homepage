import Image from 'next/image';
import croc from '@/public/croc.png';
import appPreview from '@/public/Screenshot2.png';
import { ReactNode } from 'react';

function MarkdownIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='208'
			height='128'
			viewBox='0 0 208 128'
		>
			<rect
				width='198'
				height='118'
				x='5'
				y='5'
				ry='10'
				stroke='#000'
				strokeWidth='10'
				fill='none'
			/>
			<path d='M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z' />
		</svg>
	);
}

function Card({ children }: { children: ReactNode }) {
	return (
		<div className='flex gap-2 border overflow-hidden border-solid border-zinc-100 rounded-xl shadow min-w-fit md:w-2/3'>
			{children}
		</div>
	);
}

function DownloadButton() {
	return (
		<a href='/download'>
		<button className='flex items-center justify-center w-full hover:bg-gray-800 gap-2 bg-black  text-white font-bold py-4 rounded'>
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

function WordIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width='100'
			height='100'
			className='bg-white rounded-lg'
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
	);
}

function MainLogo() {
	return (
		<div className='flex flex-col md:flex-row gap-4 justify-center'>
			<div className='flex flex-col justify-between'>
				<h1 className='text-6xl md:text-8xl font-bold'>
					Markdown <br />
					Made
					<br />
					Fun!
				</h1>
				<DownloadButton />
			</div>
			<Image src={croc} width={600} height={600} alt='croc'></Image>
		</div>
	);
}

function AppPreview() {
	return (
		<div className='p-4 md:p-8 md:pt-32 bg-gradient-to-t from-green-300 from-20% '>
			<div className='shadow-lg'>
				<Image src={appPreview} alt='app preview' />
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
				fill-opacity='1'
				d='M0,64L34.3,96C68.6,128,137,192,206,197.3C274.3,203,343,149,411,138.7C480,128,549,160,617,176C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,149.3C1097.1,128,1166,96,1234,90.7C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
			></path>
		</svg>
	);
}

// function NotepadIcon() {
// 	return (
// 	);
// }

function BestFeatures() {
	return (
		<div className=''>
			<h2 className='text-3xl font-bold flex justify-center'>
				The best from Word{' '}
				<strong className='text-green-600 px-3'>AND</strong>
				Notepad
			</h2>
			<WordIcon />
			{/* <NotepadIcon /> */}
			<p className='text-lg text-center'>Noter combines the rich text editor expirience of apps like Word or Notion, but without the proprietary and unreadable file formats they use to store data.</p>
		</div>
	);
}

export default function Home() {
	return (
		<>
			<MainLogo />
			<AppPreview />
			<Wave />
			<BestFeatures />
		</>
	);
}
