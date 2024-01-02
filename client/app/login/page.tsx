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
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
			<form
				style={{ maxWidth: "700px" }}
				onSubmit={handleLoginFormSubmit}
				className="flex flex-col items-center gap-y-4 group rounded-lg border px-5 py-8 transition-colors  border-neutral-700 shadow-2xl shadow-emerald-500/[0.2]"
			>
				<h2 className={`mb-3 text-2xl font-semibold text-white`}>Login</h2>
				<input
					type="email"
					name="email"
					className="px-3 py-2 outline-none text-white bg-transparent border border-white/30 rounded-md active-none autofill:bg-transparent"
					placeholder="xyz@gmail.com"
					value={loginCreds.email}
					onChange={handleInputFieldChange}
					required
				/>
				<input
					type="password"
					name="password"
					className="px-3 py-2 outline-none text-white bg-transparent border border-white/30 rounded-md"
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
