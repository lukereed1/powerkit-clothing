const navlinks = [
	{ title: "home", path: "/home" },
	{ title: "products", path: "/products" },
	{ title: "reviews", path: "/reviews" },
	{ title: "contact", path: "/contact" },
];

export default function Navigation() {
	return (
		<ul className="hidden md:flex items-center uppercase">
			{navlinks.map(({ title, path }) => (
				<li key={path} className="pl-16 cursor-pointer">
					<a className="group transition duration-300">
						{title}
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span>
					</a>
				</li>
			))}
		</ul>
	);
}
