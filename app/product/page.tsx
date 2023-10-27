import Image from 'next/image';
import croc from '@/public/croc.png';

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
					Adding more<br/>
					By the<br/>
					<strong className='text-green-600'>Day</strong>!
				</h1>
			</div>
		</div>
	);
}

function StableFeatures() {
	return (
		<div className='px-2 w-full max-w-xl'>
			<h2 className='text-4xl font-bold pb-4 text-center'>
				Stable Features
			</h2>
			<ul className='list-disc list-inside'>
				<li>Automatically converts markdown bindings to rich text</li>
				<li>Automatically saves your notes</li>
				<li>Keyboard shortcuts for common markdown bindings</li>
				<li>Undo, Redo history</li>
				<li>Menu bar with common actions</li>
				<li>Dark mode</li>
				<li>Responsive design</li>
			</ul>
		</div>
	);
}

function ComingSoon() {
	return (
		<div className='px-2 w-full max-w-xl'>
			<h2 className='text-4xl font-bold pb-4 text-center'>Coming Soon</h2>
			<ul className='list-disc list-inside'>
				<li>Export to PDF</li>
				<li>Export to DOCX</li>
				<li>Image support</li>
				<li>Excalidraw embed</li>
				<li>Mobile application</li>
				<li>Syncing</li>
			</ul>
		</div>
	);
}

function Page() {
	return (
		<>
			<MainLogo />
			<StableFeatures />
			<ComingSoon />
		</>
	);
}

export default Page;
