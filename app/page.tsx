import Image from 'next/image';
import croc from '@/public/croc.png';
import { ReactNode } from 'react';

function MarkdownIcon() {
	return (
		<div className='p-4 bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center'>
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
		</div>
	);
}

function Card({ children }: { children: ReactNode }) {
	return (
		<div className='flex gap-2 border overflow-hidden border-solid border-zinc-100 rounded-xl shadow min-w-fit md:w-2/3'>
			{children}
		</div>
	);
}

function MainLogo() {
	return (
		<div className='mx-auto flex flex-col gap-4 lg:flex-row max-w-lg lg:max-w-5xl justify-center'>
			<h1 className='text-6xl md:text-8xl font-bold'>
				Markdown <br />
				made
				<br />
				fun!
			</h1>
			<Image src={croc} width={600} height={600} alt='croc'></Image>
		</div>
	);
}

export default function Home() {
	return (
		<div className='flex flex-col gap-4 justify-center p-4 md:p-8'>
			<MainLogo />
			<div className='flex flex-col gap-4 pt-10'>
				<Card>
					<MarkdownIcon />
					<div className='p-2'>
						<h2 className='text-2xl font-bold'>File over App</h2>
						<p>
							Every Application is temporary, files will last
							forever! With Noter, your notes are stored as a
							plain text markdown files.
						</p>
					</div>
				</Card>
				<Card>
					<h2 className='text-2xl font-bold'>Rich text editor</h2>
					<p></p>
				</Card>
			</div>
		</div>
	);
}
