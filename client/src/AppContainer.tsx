import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";

export default function AppContainer() {
	return (
		<div className="max-w-[1240px] m-auto px-[30px]">
			<Hero />
			<ProductShowcase />
		</div>
	);
}
