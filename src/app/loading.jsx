import Image from 'next/image';
import Spinner from '/public/spinner.svg';

export default function Loading() {
	return (
		<div className="limit">
			<div className="pad flex justify-center items-center mt-24">
				<Image
					src={Spinner}
					alt="loading.."
					className="w-32"
				/>
			</div>
		</div>
	);
}
