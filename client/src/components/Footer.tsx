import Logo from "../assets/logo.svg";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialTwitter,
} from "react-icons/ti";
import FooterNav from "./FooterNav";

export default function Footer() {
	return (
		<div className="bg-[#E4F0F2] flex flex-col gap-4 lg:gap-7 px-[30px] py-6 mt-20 ">
			<div className="flex items-center justify-between px-6">
				<img
					className="h-9 lg:h-14 cursor-pointer"
					src={Logo}
					alt="Powerkit Logo"
				/>

				<div className="flex text-3xl lg:text-5xl gap-3">
					<button>
						<TiSocialFacebook />
					</button>

					<button className="pr-1">
						<TiSocialInstagram />
					</button>

					<button>
						<TiSocialTwitter />
					</button>
				</div>
			</div>
			<FooterNav />
		</div>
	);
}
