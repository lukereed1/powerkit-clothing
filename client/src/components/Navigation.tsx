const navlinks = [
	{ title: "HOME", path: "#" },
	{ title: "PRODUCTS", path: "#" },
	{ title: "REVIEWS", path: "#" },
	{ title: "CONTACT", path: "#" },
];

export default function Navigation() {
	return (
		<ul className="flex items-center">
			{navlinks.map(({ title }) => (
				<li className="px-4">
					<a className="group transition duration-300" href="#">
						{title}
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-sky-600"></span>
					</a>
				</li>
			))}
		</ul>
	);
}
