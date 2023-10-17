import Image from 'next/image';
import croc from '@/public/croc.png';
import Screenshot1 from '@/public/gallery/Screenshot1.png';
import Screenshot2 from '@/public/gallery/Screenshot2.png';
import Screenshot3 from '@/public/gallery/Screenshot3.png';
import Screenshot4 from '@/public/gallery/Screenshot4.png';
import Screenshot5 from '@/public/gallery/Screenshot5.png';
import Screenshot6 from '@/public/gallery/Screenshot6.png';

function Gallery() {
	return (
		<>
			<div className='flex flex-col lg:flex-row gap-4 justify-center'>
				<div className='flex flex-col justify-between'>
					<h1 className='text-6xl md:text-8xl font-bold'>
						Have a
						<br />
						Look
						<br />
						<strong className='text-green-500'>Yourself</strong>!
					</h1>
				</div>
				<Image
					src={croc}
					width={600}
					height={600}
					alt='author profile photo'
					className='rounded-lg'
				></Image>
			</div>

			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8'>
					<Image
						src={Screenshot1}
						alt='screenshot 1'
						placeholder='blur'
						className='rounded'
					/>
					<Image
						src={Screenshot2}
						alt='screenshot 2'
						placeholder='blur'
						className='rounded'
					/>
					<Image
						src={Screenshot3}
						alt='screenshot 3'
						placeholder='blur'
						className='rounded'
					/>
					<Image
						src={Screenshot4}
						alt='screenshot 4'
						placeholder='blur'
						className='rounded'
					/>
					<Image
						src={Screenshot5}
						alt='screenshot 5'
						placeholder='blur'
						className='rounded'
					/>
					<Image
						src={Screenshot6}
						alt='screenshot 6'
						placeholder='blur'
						className='rounded'
					/>
				</div>
			</div>
		</>
	);
}

export default Gallery;
