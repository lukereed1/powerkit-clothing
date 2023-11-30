import ShippingLogo from "../assets/global-shipping.svg";
import CallToActionButton from "./CallToActionButton";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
	return (
		<section className="flex justify-center lg:max-w-[1024px] mx-auto">
			<div className="flex flex-col items-center justify-center text-center mt-8 mx-auto px-[30px] lg:px-[60px] lg:text-left lg:items-start">
				<h1 className="text-[32px] lg:text-[52px]">
					Quality sporting apparel without the price tag
				</h1>

				<p className="text-sm mt-4 lg:mt-6 mb-6 lg:text-[20px]">
					Don't spend big on apparel just for the name's sake. Our premium
					apparel is just as good, for a fraction of the price.
				</p>

				<div className="flex gap-8 lg:mt-5">
					<CallToActionButton>Browse our Products</CallToActionButton>

					<button className="hidden lg:flex items-center text-[20px] gap-1 group">
						Get in touch
						<GoArrowRight
							className="group-hover:ml-2 transition-all duration-300"
							size={20}
						/>
					</button>
				</div>

				<div className="text-sm flex justify-center items-center rounded-lg border border-black h-14 mt-7 lg:mt-12 px-4 gap-2 lg:w-full lg:max-w-[480px] lg:text-lg lg:py-8">
					<img
						className="h-20 lg:h-[120px] ml-[-32px]"
						src={ShippingLogo}
						alt="Shipping Logo"
					/>
					<p>Serving customers worldwide!</p>
				</div>
			</div>
		</section>
	);
}
