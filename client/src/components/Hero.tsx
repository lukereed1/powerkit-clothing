import ShippingLogo from "../assets/global-shipping.svg";
import CallToActionButton from "./CallToActionButton";

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center text-center mt-8 mx-auto px-[30px]">
			<h1 className="text-[32px] lg:text-[52px]">
				Quality sporting apparel without the price tag
			</h1>

			<p className="text-sm mt-4 mb-6 lg:text-[20px]">
				Don't spend big on apparel just for the name's sake. Our premium apparel
				is just as good, for a fraction of the price.
			</p>

			<CallToActionButton>Browse our Products</CallToActionButton>

			<div className="text-sm flex items-center rounded-lg border border-black w-auto h-14 mt-7 pl-6 pr-4">
				<img
					className="h-20  ml-[-32px]"
					src={ShippingLogo}
					alt="Shipping Logo"
				/>
				<p>Serving customers worldwide!</p>
			</div>
		</section>
	);
}
