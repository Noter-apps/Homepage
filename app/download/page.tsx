import Image from 'next/image';
import croc from '@/public/croc.png';

function MainLogo() {
	return (
		<div className='flex flex-col md:flex-row gap-4 justify-center'>
			<div className='flex flex-col justify-between'>
				<h1 className='text-6xl md:text-8xl font-bold'>
					Download <br />
					For
					<br />
					<strong className='text-green-600'>Free</strong>!
				</h1>
			</div>
			<Image src={croc} width={600} height={600} alt='croc'></Image>
		</div>
	);
}

function MacOSButton() {
	return (
		<a className='w-full'>
			<button className='bg-gradient-to-tl from-orange-500 to-red-600 hover:from-red-400 hover:to-orange-500 text-white font-bold p-4 px-16 rounded-lg'>
				Download for Mac OS
			</button>
		</a>
	);
}

function WindowsButton() {
	return (
		<a className='w-full'>
			<button className='flex gap-2 w-full h-full items-center justify-center bg-gradient-to-tl from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-lg'>
				<svg
					viewBox='0 0 88 88'
					className='w-4 h-4 fill-current text-white'
				>
					<path d='m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z'></path>
				</svg>
				Download for Windows
			</button>
		</a>
	);
}

function AppImageButton() {
	return (
		<a className='w-full'>
			<button className='bg-gradient-to-tl from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold p-4 px-16 rounded-lg'>
				Download AppImage
			</button>
		</a>
	);
}

function DebianButton() {
	return (
		<a className='w-full'>
			<button className='w-full h-full bg-gradient-to-tl from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold p-4 px-16 rounded-lg'>
				Download for Debian
			</button>
		</a>
	);
}

function DownloadSection() {
	return (
		<div className='max-w-3xl lg:max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
			<WindowsButton />
			<MacOSButton />
			<AppImageButton />
			<DebianButton />
			{/* <a className='w-full'>
				<button className='flex items-center justify-center gap-2 bg-gradient-to-tl from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white w-full'>
					<svg
						viewBox='0 0 88 88'
						className='w-4 h-4 fill-current text-white'
					>
						<path d='m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z'></path>
					</svg>
					<span>Download for Windows</span>
				</button>
			</a> */}
		</div>
	);
}

// function DownloadSection() {
// 	return (
// 		<div className="flex justify-center">
// 		<table className="table-fixed">
// 			<tr>
// 				<td><WindowsButton /></td>
// 				<td><MacOSButton /></td>
// 			</tr>
// 			<tr>
// 				<td><AppImageButton /></td>
// 				<td><DebianButton /></td>
// 			</tr>
// 		</table>
// 		</div>
// 	);
// }

function Download() {
	return (
		<div className='flex flex-col justify-center gap-8'>
			<MainLogo />
			<DownloadSection />
		</div>
	);
}

export default Download;
