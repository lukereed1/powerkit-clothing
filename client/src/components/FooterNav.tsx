const navlinks = [
	{ title: "home", path: "/home" },
	{ title: "products", path: "/products" },
	{ title: "reviews", path: "/reviews" },
	{ title: "contact", path: "/contact" },
];

export default function FooterNav() {
	return (
		<div className="flex justify-center md:justify-between px-[12px] md:px-[32px] lg:max-w-[1024px] xl:max-w-[1440px] lg:px-[60px] xl:px-[140px] m-auto">
			<ul className="flex flex-wrap items-center uppercase justify-center gap-6">
				{navlinks.map(({ title, path }) => (
					<li key={path} className="cursor-pointer text-xs lg:text-base">
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
