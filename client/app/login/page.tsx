"use client";
import InputFieldComponent from "@/components/InputFieldComponent";
import { useGlobalContext } from "@/context/AppContext";
import useLogin from "@/utils/hooks/mutations/auth/useLoginUser";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
	const { setEnableUserFetch } = useGlobalContext();
	const loginMutation = useLogin();
	const [loginCreds, setLoginCreds] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});
	const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setLoginCreds({
			...loginCreds,
			[e.target.name]: e.target.value,
		});
	};
	const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(loginCreds);
		loginMutation.mutateAsync(loginCreds, {
			onSuccess: () => {
				setEnableUserFetch(true);
			},
		});
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
			<form
				style={{ maxWidth: "700px" }}
				onSubmit={handleLoginFormSubmit}
				className="flex flex-col items-center gap-y-4 group rounded-lg border px-5 py-8 transition-colors  border-neutral-700 shadow-2xl shadow-emerald-500/[0.2]"
			>
				<h2 className={`mb-3 text-2xl font-semibold text-white`}>Login</h2>
				<InputFieldComponent
					type="text"
					name="email"
					placeholder=""
					labelValue="Email"
					required={true}
					value={loginCreds.email}
					onChangeFnHandler={handleInputFieldChange}
				/>
				<InputFieldComponent
					type="password"
					name="password"
					placeholder=""
					labelValue="Password"
					required={true}
					value={loginCreds.password}
					onChangeFnHandler={handleInputFieldChange}
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
