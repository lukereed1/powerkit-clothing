import CallToActionButton from "./CallToActionButton";
import WeightLifter from "../assets/weightlifting.jpg";

export default function Benefits() {
	return (
		<section className="flex flex-col items-center mx-auto text-center mt-14 px-[30px]">
			<h1 className="text-[32px] mb-2">
				The best quality AND the most affordable
			</h1>
			<p className="text-sm mb-6">
				Unleash your full potential with premium quality at affordable prices:
				Elevating your fitness journey without breaking the bank
			</p>
			<CallToActionButton>Shop Now</CallToActionButton>
			<img
				className="rounded-[20px] mt-9 max-w-[600px] w-full"
				src={WeightLifter}
				alt="Weightlifter"
			/>
		</section>
	);
}
