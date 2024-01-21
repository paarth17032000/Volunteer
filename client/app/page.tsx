import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/Card";

export default function Home() {
	return (
		<main className="flex flex-col md:flex-row min-h-screen gap-0 md:gap-x-8 items-center justify-center p-24 bg-black">
			<Link href={"/login"}>
				<CardContainer containerClassName="md:py-20 py-5" className="inter-var">
					<CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.2] border-white/[0.5] w-[15rem] h-auto rounded-xl p-6 border  ">
						<CardItem
							translateZ="50"
							className="text-xl w-full text-center font-bold text-white/90"
						>
							Login
						</CardItem>
					</CardBody>
				</CardContainer>
			</Link>
			<Link href={"/register"}>
				<CardContainer containerClassName="md:py-20 py-5" className="inter-var">
					<CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.2] border-white/[0.5] w-[15rem] h-auto rounded-xl p-6 border  ">
						<CardItem
							translateZ="50"
							className="text-xl w-full text-center font-bold text-white/90"
						>
							Register
						</CardItem>
					</CardBody>
				</CardContainer>
			</Link>
		</main>
	);
}
