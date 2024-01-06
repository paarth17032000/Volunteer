"use client";
import InputFieldComponent from "@/components/InputFieldComponent";
import useRegister from "@/utils/hooks/mutations/auth/useRegister";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Register() {
	const registerMutation = useRegister();
	const [registerCreds, setregisterCreds] = useState<{
		email: string;
		name: string;
		password: string;
		phoneNumber: string;
	}>({
		email: "",
		name: "",
		password: "",
		phoneNumber: "",
	});
	const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setregisterCreds({
			...registerCreds,
			[e.target.name]: e.target.value,
		});
	};
	const handleregisterFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(registerCreds);
		registerMutation.mutate(registerCreds);
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
			<form
				onSubmit={handleregisterFormSubmit}
				className="flex flex-col items-center gap-y-4 group rounded-lg border px-5 py-8 transition-colors  border-neutral-700 shadow-2xl shadow-emerald-500/[0.2]"
			>
				<h2 className={`mb-3 text-2xl font-semibold text-white`}>Register</h2>
				<InputFieldComponent
					type="text"
					name="name"
					placeholder=""
					labelValue="Name"
					required={true}
					value={registerCreds.name}
					onChangeFnHandler={handleInputFieldChange}
				/>
				<InputFieldComponent
					type="text"
					name="email"
					placeholder=""
					labelValue="Email"
					required={true}
					value={registerCreds.email}
					onChangeFnHandler={handleInputFieldChange}
				/>
				<InputFieldComponent
					type="password"
					name="password"
					placeholder=""
					labelValue="Password"
					required={true}
					value={registerCreds.password}
					onChangeFnHandler={handleInputFieldChange}
				/>
				<InputFieldComponent
					type="text"
					name="phoneNumber"
					placeholder=""
					labelValue="Mobile Number"
					required={true}
					value={registerCreds.phoneNumber}
					onChangeFnHandler={handleInputFieldChange}
				/>
				{/* <div className="flex flex-col">
					<label className="text-left ml-1">Name</label>
					<input
						type="text"
						name="name"
						className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md"
						placeholder="John Player"
						value={registerCreds.name}
						onChange={handleInputFieldChange}
						required
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-left ml-1">Email</label>
					<input
						type="email"
						name="email"
						className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md active-none autofill:bg-transparent"
						placeholder="xyz@gmail.com"
						value={registerCreds.email}
						onChange={handleInputFieldChange}
						required
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-left ml-1">Password</label>
					<input
						type="password"
						name="password"
						className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md"
						placeholder="password"
						value={registerCreds.password}
						onChange={handleInputFieldChange}
						required
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-left ml-1">Number</label>
					<input
						type="text"
						name="phoneNumber"
						className="px-3 py-2 outline-none bg-transparent border border-white/30 rounded-md"
						placeholder="9872..4823"
						value={registerCreds.phoneNumber}
						onChange={handleInputFieldChange}
						required
					/>
				</div> */}
				<button
					type="submit"
					className="border border-white/90 bg-white/90 text-black/90 font-bold w-full rounded-md mt-4 px-4 py-2"
				>
					Register
				</button>
			</form>
		</main>
	);
}

// <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 	Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
