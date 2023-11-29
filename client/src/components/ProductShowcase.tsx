import ProductCard from "./ProductCard";
import Shorts from "../assets/shorts.jpg";
import Shirts from "../assets/shirts.jpg";
import Shoes from "../assets/shoes.jpg";

const displayProducts = [
	{ name: "Shorts", price: 29, image: Shorts },
	{ name: "Shirts", price: 29, image: Shirts },
	{ name: "Shoes", price: 69, image: Shoes },
];

export default function ProductShowcase() {
	return (
		<div className="flex items-center mt-12 gap-7 flex-wrap justify-center">
			{displayProducts.map(({ name, price, image }) => (
				<ProductCard name={name} price={price} image={image} />
			))}
		</div>
	);
}
