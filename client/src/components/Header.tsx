import Logo from "../assets/logo.svg";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<div className="flex justify-between content-center p-4 max-w-[1240px] m-auto">
			<img src={Logo} alt="powerkit logo" />
			<Navigation />
		</div>
	);
}
