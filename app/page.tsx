import Image from 'next/image';
import croc from '@/public/croc.png';
import appPreview from '@/public/Screenshot2.png';
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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-16 h-16 rounded-full p-3 bg-white z-10'>
				<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
			</svg>
		</div>
	);
}

function MainLogo() {
	return (
		<div className='flex flex-col md:flex-row gap-4 justify-center px-4'>
			<div className='flex flex-col justify-between'>
				<h1 className='text-6xl md:text-8xl font-bold'>
					Markdown <br />
					Made
					<br />
					<strong className='text-green-600'>Fun</strong>!
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
				fillOpacity='1'
				d='M0,64L34.3,96C68.6,128,137,192,206,197.3C274.3,203,343,149,411,138.7C480,128,549,160,617,176C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,149.3C1097.1,128,1166,96,1234,90.7C1302.9,85,1371,107,1406,117.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
			></path>
		</svg>
	);
}

function BestFeatures() {
	return (
		<div className='px-4 max-w-xl mx-auto'>
			<Iconsmash />
			<h2 className='text-xl md:text-3xl font-bold flex justify-center py-4'>
				The best from Word<strong className='text-green-600 px-1 md:px-3'>AND</strong>Notepad
			</h2>
			<p className='text-lg text-justify'>
				Noter combines the rich text editor expirience of apps like Word
				or Notion, but without the proprietary and unreadable file
				formats they use to store data.
			</p>
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
