import Logo from "../assets/logo.svg";
import Navigation from "./Navigation";
import { AiOutlineMenu } from "react-icons/ai";
import PopoutMenu from "./PopoutMenu";
import { useState } from "react";

export default function Header() {
	const [popoutOpen, setPopoutOpen] = useState(false);

	function handlePopoutMenu() {
		setPopoutOpen(!popoutOpen);
	}

	return (
		<div className="bg-[#E4F0F2]">
			<div className="flex justify-between items-center max-w-[1440px] m-auto px-8 lg:px-[60px] xl:px-[140px] py-6">
				<button>
					<img className="h-14" src={Logo} alt="powerkit logo" />
				</button>

				<Navigation />

				{popoutOpen ? (
					<PopoutMenu handlePopoutMenu={handlePopoutMenu} />
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
