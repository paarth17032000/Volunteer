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
// let btns = document.querySelectorAll('a')
// btns.forEach(btn => {
// 	btn.onmousemove = function(e){
// 		let x = e.pageX - btn.offsetLeft
// 		let y = e.pageY - btn.offsetTop

// 		btn.style.setProperty('--x', x+'px')
// 		btn.style.setProperty('--y', y+'px')
// 	}
// })
// <a href="#"><span>Create New Life</span></a>
