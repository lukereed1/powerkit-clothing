import ShippingLogo from "../assets/global-shipping-logo.svg";

export default function Hero() {
	return (
		<div className="flex flex-col items-center justify-center text-center mt-8 max-w-xl mx-auto">
			<h1 className="text-[32px]">
				Quality sporting apparel without the price tag
			</h1>

			<p className="text-sm mt-4">
				Don't spend big on apparel just for the name's sake. Our premium apparel
				is just as good, for a fraction of the price.
			</p>

			<button className="bg-[#E4F0F2] w-auto text-base px-6 py-3 mt-8 rounded-lg font-bold">
				Browse our Products
			</button>

			<img className="mt-4" src={ShippingLogo} alt="Global Shipping" />
		</div>
	);
}
