const navlinks = [
	{ title: "home", path: "/home" },
	{ title: "products", path: "/products" },
	{ title: "reviews", path: "/reviews" },
	{ title: "contact", path: "/contact" },
];

export default function FooterNav() {
	return (
		<div className="flex justify-center md:justify-between">
			<ul className="flex flex-wrap items-center uppercase justify-center">
				{navlinks.map(({ title, path }) => (
					<li key={path} className="px-6 cursor-pointer text-xs lg:text-base">
						<a className="group transition duration-300">
							{title}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black"></span>
						</a>
					</li>
				))}
			</ul>
			<p className="hidden uppercase md:flex text-xs lg:text-base">
				Copyright 2022-2023 @ Powerkit LLC
			</p>
		</div>
	);
}
