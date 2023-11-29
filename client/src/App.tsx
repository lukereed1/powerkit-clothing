import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Reviews from "./components/Reviews";

export default function App() {
	return (
		<>
			<Header />
			<Hero />
			<ProductShowcase />
			<Features />
			<Benefits />
			<Reviews />
			<Footer />
		</>
	);
}
