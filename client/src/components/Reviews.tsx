import ReviewCard from "./ReviewCard";
import Portrait1 from "../assets/portrait1.svg";
import Portrait2 from "../assets/portrait2.svg";
import Portrait3 from "../assets/portrait3.svg";
import Portrait4 from "../assets/portrait4.svg";
import CallToActionButton from "./CallToActionButton";

const customerReviews = [
	{
		author: "Sarah Smith",
		message:
			"I stumbled upon this brand and couldn’t believe the quality for the price. The leggings are my absolute favourite, they're so comfy and stylish!",
		image: Portrait1,
	},
	{
		author: "John Doe",
		message:
			"As a gym enthusiast on a budget, finding PowerKit was a game changer, the durability of the gear surprised me the most, it’s great!",
		image: Portrait2,
	},
	{
		author: "Chris Paul",
		message:
			"I’ve tried many sports clothing brands, but this one stands out. The fits are fantastic and the price is unbeatable.",
		image: Portrait3,
	},
	{
		author: "Taylor Shell",
		message:
			"I’m a student, and finding quality activewear on a tight budget is a struggle. This brand has been a life-saver! Definitely my go to for fitness fashion.",
		image: Portrait4,
	},
];

export default function Reviews() {
	return (
		<section className="mt-20">
			<div className="h-[170px] bg-[#E4F0F2]"></div>
			<div className="mt-[-170px] px-[30px] flex flex-col items-center">
				<h1 className="text-[32px] mt-6 text-center">What People Say</h1>
				<div className="flex flex-col items-center gap-6 my-8">
					{customerReviews.map(({ author, message, image }) => (
						<ReviewCard author={author} message={message} image={image} />
					))}
				</div>
				<CallToActionButton>See all Testimonials</CallToActionButton>
			</div>
		</section>
	);
}
