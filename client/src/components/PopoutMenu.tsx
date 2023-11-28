import { AiOutlineClose } from "react-icons/ai";

interface Props {
	navlinks: Array<{ title: string; path: string }>;
	handlePopoutMenu: () => void;
}

export default function PopoutMenu(props: Props) {
	return (
		<div className="fixed right-0 top-0 w-[60%] bg-[#E4F0F2] h-full ease-in duration-500">
			<div className="pl-3 pt-3">
				<button onClick={() => props.handlePopoutMenu()}>
					<AiOutlineClose size={30} />
				</button>
			</div>

			<ul className="uppercase flex flex-col items-center">
				{props.navlinks.map(({ title, path }) => (
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
