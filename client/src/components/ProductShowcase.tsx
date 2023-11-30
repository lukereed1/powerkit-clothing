import ProductCard from "./ProductCard";
import Shorts from "../assets/shorts.jpg";
import Shirts from "../assets/shirts.jpg";
import Shoes from "../assets/shoes.jpg";

const displayProducts = [
	{ name: "Shorts", price: 29, image: Shorts, isTall: false },
	{ name: "Shirts", price: 29, image: Shirts, isTall: true },
	{ name: "Shoes", price: 69, image: Shoes, isTall: false },
];

interface Props {
	isDesktop?: boolean;
}

export default function ProductShowcase({ isDesktop }: Props) {
	return (
		<div>
			{isDesktop ? (
				<div className="flex gap-4 justify-center items-center pt-6">
					<div className="flex flex-col gap-4">
						<ProductCard
							isTall={displayProducts[0].isTall}
							name={displayProducts[0].name}
							price={displayProducts[0].price}
							image={displayProducts[0].image}
						/>
						<ProductCard
							isTall={displayProducts[2].isTall}
							name={displayProducts[2].name}
							price={displayProducts[2].price}
							image={displayProducts[2].image}
						/>
					</div>
					<ProductCard
						isTall={displayProducts[1].isTall}
						name={displayProducts[1].name}
						price={displayProducts[1].price}
						image={displayProducts[1].image}
					/>
				</div>
			) : (
				<div className="flex items-center mt-12 gap-7 lg:gap-12 flex-wrap justify-center lg:px-[60px] xl:hidden">
					{displayProducts.map(({ name, price, image }) => (
						<ProductCard name={name} price={price} image={image} />
					))}
				</div>
			)}
		</div>
	);
}
