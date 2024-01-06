import React, { ChangeEvent } from "react";

interface InputFieldComponentProps {
	type: string;
	name: string;
	placeholder: string;
	value: string;
	labelValue: string;
	required: boolean;
	onChangeFnHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputFieldComponent({
	type,
	name,
	placeholder,
	value,
	labelValue,
	required,
	onChangeFnHandler,
}: InputFieldComponentProps) {
	return (
		<div className="relative w-full">
			<input
				id={name}
				name={name}
				type={type}
				className="peer w-full px-3 py-2 outline-none text-white bg-transparent border border-white/30 rounded-md placeholder-transparent focus:outline-none "
				placeholder={placeholder}
				value={value}
				onChange={onChangeFnHandler}
				required={required}
			/>
			<label
				htmlFor={name}
				className="absolute left-3 -top-2.5 text-white bg-black px-2 text-sm transition-all 
								peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-placeholder-shown:bg-black peer-placeholder-shown:text-md peer-focus:-top-2.5 peer-focus:text-white peer-focus:text-sm"
			>
				{labelValue}
			</label>
		</div>
	);
}
