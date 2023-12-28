"use client";
import useLogin from "@/utils/hooks/mutations/auth/useLoginUser";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
	const loginMutation = useLogin();
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
		loginMutation.mutate(loginCreds);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<form
				style={{ maxWidth: "700px" }}
				onSubmit={handleLoginFormSubmit}
				className="flex flex-col items-center gap-y-4 group rounded-lg border border-transparent px-5 py-8 transition-colors border-gray-300 bg-purple-900 dark:border-neutral-700 dark:bg-neutral-800/30"
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
