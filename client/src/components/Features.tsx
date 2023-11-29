import FeatureCard from "./FeatureCard";

export default function Features() {
	return (
		<section className="mt-16">
			<div className="h-[170px] bg-[#E4F0F2]"></div>
			<div className="mt-[-170px] px-[30px]">
				<h1 className="text-[32px] mt-6 text-center">Why Choose Us</h1>
				<div className="flex items-center mt-7 gap-9 justify-center flex-wrap">
					<FeatureCard heading="Innovative Design">
						Unleash your full potential with our sports clothing featuring
						innovative design elements
					</FeatureCard>
					<FeatureCard heading="Quality Materials">
						Experience the difference with our sport clothing, crafted from
						premium, high-performance fabrics
					</FeatureCard>
					<FeatureCard heading="Global Shipping">
						Explore our range of products from anywhere in the world with our
						international shipping service
					</FeatureCard>
				</div>
			</div>
		</section>
	);
}
