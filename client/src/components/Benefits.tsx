import CallToActionButton from "./CallToActionButton";
import WeightLifter from "../assets/weightlifting.jpg";

export default function Benefits() {
	return (
		<section className="flex flex-col items-center text-center mt-14 px-[30px] lg:px-[60px] xl:px-[140px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto xl:flex-row xl:text-left xl:gap-12">
			<div>
				<h1 className="text-[32px] lg:text-[48px] mb-2">
					The best quality AND the most affordable
				</h1>
				<p className="text-sm lg:text-xl mb-6">
					Unleash your full potential with premium quality at affordable prices:
					Elevating your fitness journey without breaking the bank
				</p>
				<CallToActionButton>Shop Now</CallToActionButton>
			</div>

			<img
				className="rounded-[20px] mt-9 max-w-[550px] w-full"
				src={WeightLifter}
				alt="Weightlifter"
			/>
		</section>
	);
}
