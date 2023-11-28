interface Props {
	navlinks: Array<{ title: string; path: string }>;
}

export default function Navigation(props: Props) {
	return (
		<ul className="hidden md:flex items-center uppercase">
			{props.navlinks.map(({ title, path }) => (
				<li key={path} className="px-4 cursor-pointer">
					<a className="group transition duration-300">
						{title}
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span>
					</a>
				</li>
			))}
		</ul>
	);
}
