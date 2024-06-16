import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
	return (
		<div className='flex justify-between p-3 items-center mx-auto max-w-6xl'>
			<div className='flex gap-4'>
				<MenuItem
					title='home'
					address='/'
					Icon={AiFillHome}
				/>
				<MenuItem
					title='about'
					address='/about'
					Icon={BsFillInfoCircleFill}
				/>
			</div>

			<div className='flex items-center gap-4'>
				<ThemeSwitch />
				<Link
					href='/'
					className='flex gap-1 items-center'>
					<span className='uppercase bg-amber-500 py-1 px-2 rounded-full font-bold'>
						cinema
					</span>
					<span className='text-xl hidden sm:inline uppercase font-bold'>
						tmdb
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;
