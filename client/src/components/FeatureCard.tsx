import { ReactNode } from "react";
import Tick from "../assets/green-tick.svg";

interface Props {
	heading: string;
	children?: ReactNode;
}

export default function FeatureCard({ heading, children }: Props) {
	return (
		<div className="flex flex-col text-center border border-black rounded-lg max-w-[300px] min-h-[220px] lg:max-w-[345px] lg:min-h-[240px] bg-white px-[36px] pb-9 pt-4 gap-2 shadow-xl">
			<img className="h-10" src={Tick} alt="Green tick" />
			<h1 className="text-lg lg:text-xl font-bold">{heading}</h1>
			<p className="text-sm lg:text-base">{children}</p>
		</div>
	);
}
