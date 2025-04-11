import React from 'react';

const Footer = () => {
	return (
		<div className='pt-20 pb-4 bg-[#ffffff]'>
			<div>
				<h1 className='text-[#003EA4] font-semibold text-3xl text-center'>Auction <span className='text-[#FFD337] font-bold'>Gallery</span></h1>
				<div className='flex gap-3 justify-center mt-4'>
					<a href='#'>Bid.</a>
					<a href='#'>Win.</a>
					<a href='#'>Own.</a>
				</div>
				<div className='flex gap-5 justify-center mt-4'>
					<a href='#'>Home</a>
					<a href='#'>Auctions</a>
					<a href='#'>Categories</a>
					<a href='#'>How to works</a>
				</div>
				<p className='text-center mt-8'><small>© 2025 AuctionHub. All rights reserved.</small></p>
			</div>
		</div>
	);
};

export default Footer;