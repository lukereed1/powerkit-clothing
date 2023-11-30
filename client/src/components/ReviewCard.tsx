import { ReactNode } from "react";
import Star from "../assets/five-stars.svg";

interface Props {
	author: string;
	message: string;
	image: string;
	children?: ReactNode;
}

export default function ReviewCard(props: Props) {
	return (
		<div className="flex flex-col items-center justify-start text-center w-[200px] h-[470px] border border-black bg-white rounded-lg pt-[22px] pb-[48px] px-6 gap-3 shadow-xl">
			<img src={props.image} alt="Portrait" />
			<img src={Star} alt="Stars" />
			<p>{props.message}</p>
			<p className="italic">- {props.author}</p>
		</div>
	);
}
