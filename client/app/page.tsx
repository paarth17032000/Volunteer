"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/Card";

import { PinContainer } from "@/components/3d-pin";

export default function Home() {
	const [loginCreds, setLoginCreds] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});
	const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginCreds({
			...loginCreds,
			[e.target.name]: e.target.value,
		});
	};
	const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(loginCreds);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<CardContainer className="inter-var">
				<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white"
					>
						Make things float in air
					</CardItem>
					<CardItem
						as="p"
						translateZ="60"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
					>
						Hover over this card to unleash the power of CSS perspective
					</CardItem>
					<CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
						<Image
							src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							height="1000"
							width="1000"
							className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</CardItem>
					<div className="flex justify-between items-center mt-20">
						<CardItem
							translateZ={20}
							translateX={-40}
							as="button"
							className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
						>
							Try now →
						</CardItem>
						<CardItem
							translateZ={20}
							translateX={40}
							as="button"
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							Sign up
						</CardItem>
					</div>
				</CardBody>
			</CardContainer>
			<div className="h-[40rem] w-full flex items-center justify-center ">
				<PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							Aceternity UI
						</h3>
						<div className="text-base !m-0 !p-0 font-normal">
							<span className="text-slate-500 ">
								Customizable Tailwind CSS and Framer Motion Components.
							</span>
						</div>
						<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
					</div>
				</PinContainer>
			</div>
		</main>
	);
}

// <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 	Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
