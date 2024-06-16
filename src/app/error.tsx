"use client";
import { useEffect } from "react";

type errorProps = {
	error: Error;
	reset: () => void;
};

const error = ({ error, reset }: errorProps) => {
	useEffect(() => {
		console.log("the error: ... " + error);
	}, [error]);

	return (
		<div className='text-center mt-10'>
			<h1>Something went wrong</h1>
			<button
				className='hover:text-amber-600'
				onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
};

export default error;
