import { toast } from "react-toastify";

export declare type TypeOptions = "info" | "success" | "warning" | "error" | "default";
type TimeOption = number | false | undefined;

export const toastMessage = (message: string, status: TypeOptions, time?: TimeOption) => {
	time = 5000;
	return toast(message, {
		type: status,
		position: "bottom-left",
		autoClose: time,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
	});
};
