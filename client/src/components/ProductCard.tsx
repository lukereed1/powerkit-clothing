interface Props {
	image: string;
	name: string;
	price: number;
}

export default function ProductCard({ image, name, price }: Props) {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center bottom",
			}}
			className="h-[260px] w-[240px] rounded-[20px] flex justify-center items-end shadow-2xl">
			<button className="flex bg-white px-4 mb-4 gap-16 justify-center items-center rounded-[15px] text-sm py-3">
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
