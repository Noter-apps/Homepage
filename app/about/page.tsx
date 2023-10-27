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
						<strong className='text-green-600'> User</strong>!
					</h1>
				</div>
				<Image
					src={profile_photo}
					width={480}
					height={480}
					alt='author profile photo'
					className='rounded-lg object-contain object-top'
				></Image>
			</div>
			<div className='w-full max-w-xl'>
				<h2 className='text-4xl font-bold text-center pb-4'>
					Contact me
				</h2>
				<form className='flex flex-col gap-4 w-full'>
					<label className='font-bold text-lg w-full'>Email<br/>
						<input
							id='email'
							name='email'
							type='text'
							placeholder='Email'
							className='p-1 rounded dark:text-black border border-gray-100 w-full'
						/>
					</label>
					<label className='font-bold text-lg w-full'>Message<br/>
						<textarea
							placeholder='Message'
							className='p-1 rounded dark:text-black border border-gray-100 w-full'
						></textarea>
					</label>
					<button className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded p-2'>
						Send
					</button>
				</form>
			</div>
		</>
	);
}
export default About;
