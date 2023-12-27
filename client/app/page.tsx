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
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<form
				onSubmit={handleLoginFormSubmit}
				className="flex flex-col items-center  gap-y-4 group rounded-lg border border-transparent px-5 py-8 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>Login</h2>
				<input
					type="email"
					name="email"
					className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md active-none autofill:bg-transparent"
					placeholder="xyz@gmail.com"
					value={loginCreds.email}
					onChange={handleInputFieldChange}
					required
				/>
				<input
					type="password"
					name="password"
					className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md"
					placeholder="password"
					value={loginCreds.password}
					onChange={handleInputFieldChange}
					required
				/>
				<button
					type="submit"
					className="border border-white/90 bg-white/90 text-black/90 font-bold w-full rounded-md mt-4 px-4 py-2"
				>
					Login
				</button>
			</form>
		</main>
	);
}

// <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 	Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
