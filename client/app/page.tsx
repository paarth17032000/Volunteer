"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/Card";

import { PinContainer } from "@/components/3d-pin";
import Link from "next/link";

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
		<main className="flex min-h-screen gap-x-8 items-center justify-center p-24">
			<Link href={"/login"}>
				<CardContainer className="inter-var">
					<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[15rem] h-auto rounded-xl p-6 border  ">
						<CardItem
							translateZ="50"
							className="text-xl w-full text-center font-bold text-neutral-600 dark:text-white"
						>
							Login
						</CardItem>
					</CardBody>
				</CardContainer>
			</Link>
			<Link href={"/register"}>
				<CardContainer className="inter-var">
					<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[15rem] h-auto rounded-xl p-6 border  ">
						<CardItem
							translateZ="50"
							className="text-xl w-full text-center font-bold text-neutral-600 dark:text-white"
						>
							Register
						</CardItem>
					</CardBody>
				</CardContainer>
			</Link>
		</main>
	);
}

// <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 	Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
