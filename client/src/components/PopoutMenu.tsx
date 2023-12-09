import { AiOutlineClose } from "react-icons/ai";

const navlinks = [
	{ title: "home", path: "/home" },
	{ title: "products", path: "/products" },
	{ title: "reviews", path: "/reviews" },
	{ title: "contact", path: "/contact" },
];

interface Props {
	handlePopoutMenu: () => void;
}

export default function PopoutMenu(props: Props) {
	return (
		<div className="fixed right-0 top-0 w-[60%] bg-[#E4F0F2] h-full ease-in] z-10">
			<div className="pl-3 pt-3">
				<button onClick={() => props.handlePopoutMenu()}>
					<AiOutlineClose size={30} />
				</button>
			</div>

			<ul className="uppercase flex flex-col items-center">
				{navlinks.map(({ title, path }) => (
					<li key={path} className="px-4 cursor-pointer pb-5">
						<a className="group transition duration-300">
							{title}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
