"use client";
import { ChangeEvent, FormEvent, useState } from "react";

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
	return <main className="flex min-h-screen flex-col items-center justify-center p-24"></main>;
}

// <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 	Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
