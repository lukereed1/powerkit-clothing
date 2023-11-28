import Logo from "../assets/logo.svg";
import Navigation from "./Navigation";
import { AiOutlineMenu } from "react-icons/ai";
import PopoutMenu from "./PopoutMenu";
import { useState } from "react";

const navlinks = [
	{ title: "home", path: "/home" },
	{ title: "products", path: "/products" },
	{ title: "reviews", path: "/reviews" },
	{ title: "contact", path: "/contact" },
];

export default function Header() {
	const [popoutOpen, setPopoutOpen] = useState(false);

	function handlePopoutMenu() {
		setPopoutOpen(!popoutOpen);
	}

	return (
		<div className=" bg-[#E4F0F2]">
			<div className="flex justify-between items-center max-w-[1240px] m-auto px-8 py-6">
				<img className="h-14" src={Logo} alt="powerkit logo" />

				<Navigation navlinks={navlinks} />

				{popoutOpen ? (
					<PopoutMenu handlePopoutMenu={handlePopoutMenu} navlinks={navlinks} />
				) : (
					<button
						className="block md:hidden"
						onClick={() => handlePopoutMenu()}>
						<AiOutlineMenu size={40} />
					</button>
				)}
			</div>
		</div>
	);
}
