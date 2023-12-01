import Logo from "../assets/logo.svg";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialTwitter,
} from "react-icons/ti";
import FooterNav from "./FooterNav";

export default function Footer() {
	return (
		<div className="bg-[#E4F0F2] flex flex-col gap-4 lg:gap-7 mt-20 py-5">
			<div>
				<div className="flex justify-between px-[32px] lg:max-w-[1024px] xl:max-w-[1440px] lg:px-[60px] xl:px-[140px] m-auto">
					<img
						className="h-9 lg:h-14 cursor-pointer"
						src={Logo}
						alt="Powerkit Logo"
					/>

					<div className="flex text-3xl lg:text-5xl gap-3">
						<button className="transform transition duration-300 hover:scale-110">
							<TiSocialFacebook />
						</button>

						<button className="pr-1 transform transition duration-300 hover:scale-110">
							<TiSocialInstagram />
						</button>

						<button className="transform transition duration-300 hover:scale-110">
							<TiSocialTwitter />
						</button>
					</div>
				</div>
				<FooterNav />
			</div>
		</div>
	);
}
