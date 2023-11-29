import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function CallToActionButton({ children }: Props) {
	return (
		<button className="bg-[#E4F0F2] w-auto px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#A3BAC3] lg:text-[20px] lg:px-8 lg:py-6">
			{children}
		</button>
	);
}
