import ShippingLogo from "../assets/global-shipping.svg";
import CallToActionButton from "./CallToActionButton";
import { GoArrowRight } from "react-icons/go";
import ProductShowcase from "./ProductShowcase";

export default function Hero() {
	return (
		<section className="flex lg:max-w-[1024px] xl:max-w-[1440px] mx-auto px-[30px] lg:px-[60px] xl:px-[140px] lg:pt-[32px] mt-8 items-center gap-[100px]">
			<div className="flex flex-col items-center text-center mx-auto lg:text-left lg:items-start xl:flex-1">
				<h1 className="text-[32px] lg:text-[52px]">
					Quality sporting apparel without the price tag
				</h1>

				<p className="text-sm mt-4 lg:mt-6 mb-6 lg:text-[20px]">
					Don't spend big on apparel just for the name's sake. Our premium
					apparel is just as good, for a fraction of the price.
				</p>

				<div className="flex gap-8 lg:mt-4">
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
			<div className="hidden xl:flex flex-1 justify-end">
				<ProductShowcase isDesktop={true} />
			</div>
		</section>
	);
}
