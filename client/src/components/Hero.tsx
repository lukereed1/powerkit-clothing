import ShippingLogo from "../assets/global-shipping.svg";

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

			<button className="bg-[#E4F0F2] w-auto px-6 py-3 mt-6 rounded-lg font-bold">
				Browse our Products
			</button>

			<div className="text-sm flex items-center rounded-lg border border-black w-auto h-14 mt-7 pl-6 pr-4">
				<img
					className="h-20  ml-[-32px]"
					src={ShippingLogo}
					alt="Shipping Logo"
				/>
				<p>Serving customers worldwide!</p>
			</div>
		</div>
	);
}
