import React from 'react';

const Banner = () => {
	return (
		<div className=''>
			<div className='relative'>
				<img className='h-[600px] w-full object-cover' src="../../../image/Banner-min.jpg" alt="Banner" />

				
				<div className='absolute inset-0 flex flex-col items-start justify-center px-20 space-y-6'>
					<h1 className='font-semibold text-5xl text-white max-w-2xl'>
						Bid on Unique Items from Around the World
					</h1>
					<p className='text-2xl text-gray-300 max-w-2xl'>
						Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
					</p>
					<button className='btn rounded-full'>Explore Auctions</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
