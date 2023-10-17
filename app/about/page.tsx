import Image from 'next/image';
import profile_photo from '@/public/profile_foto.jpg';

function About() {
	return (
		<>
			<div className='flex flex-col lg:flex-row gap-4 justify-center'>
				<div className='flex flex-col justify-between'>
					<h1 className='text-6xl md:text-8xl font-bold'>
						Made By
						<br />
						Passionate
						<br />
						<strong className='text-green-500'> User</strong>!
					</h1>
				</div>
				<Image
					src={profile_photo}
					width={600}
					height={600}
					alt='author profile photo'
					className='rounded-lg'
				></Image>
			</div>
		</>
	);
}
export default About;
