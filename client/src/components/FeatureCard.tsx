import { ReactNode } from "react";
import Tick from "../assets/green-tick.svg";

interface Props {
	heading: string;
	children?: ReactNode;
}

export default function FeatureCard({ heading, children }: Props) {
	return (
		<div className="flex flex-col text-center border border-black rounded-lg w-[300px] h-[205px] bg-white px-[36px] pt-3 gap-2 shadow-xl">
			<img className="h-10" src={Tick} alt="Green tick" />
			<h1 className="text-lg font-bold">{heading}</h1>
			<p className="text-sm">{children}</p>
		</div>
	);
}
