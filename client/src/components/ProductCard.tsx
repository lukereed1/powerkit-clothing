interface Props {
	image: string;
	name: string;
	price: number;
	isTall?: boolean;
}

export default function ProductCard({ image, name, price, isTall }: Props) {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center bottom",
			}}
			className={`h-[260px] w-[240px] lg:w-[260px] lg:h-[290px] xl:w-[235px] rounded-[20px] flex justify-center items-end shadow-2xl ${
				isTall ? "xl:h-[516px]" : "xl:h-[250px]"
			}`}>
			<button className="flex bg-white px-4 mb-4 gap-16 xl:gap-12 justify-center items-center rounded-[15px] text-sm lg:text-base py-3 lg:mx-4 xl:px-4">
				<div className="flex flex-col items-start">
					<p className="font-bold">PowerKit</p>
					<p className="text-gray-500">{name}</p>
				</div>

				<div>
					<p className="text-gray-500">From</p>
					<p className="text-gray-500">{`$${price}`}</p>
				</div>
			</button>
		</div>
	);
}
