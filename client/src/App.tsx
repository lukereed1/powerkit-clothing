import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
	return (
		<>
			<Header />
			<div className="max-w-[1240px] m-auto px-[30px]">
				<Hero />
			</div>
		</>
	);
}
