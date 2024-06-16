import Image from "next/image";

const loading = () => {
	return (
		<div className='flex justify-center mt-10'>
			<Image
				src='spinner-loader.svg'
				width={100}
				height={100}
				alt='loading...'
			/>
		</div>
	);
};

export default loading;
