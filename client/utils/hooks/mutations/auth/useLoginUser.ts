import { login } from "@/api/auth/_login";
import { toastMessage } from "@/utils/Toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogin = () => {
	const router = useRouter();
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			// console.log(data);
			// const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
			const expirationTime = new Date().getTime() + 30 * 1000;
			const dataToStore = {
				value: data.data.accessToken,
				expirationTime: expirationTime,
			};
			// const maxAgeInSeconds = 24 * 60 * 60 * 1000;
			const maxAgeInSeconds = 30 * 1000;
			// console.log(document.cookie)
			document.cookie = `access-token=${encodeURIComponent(
				data.data.accessToken,
			)}; max-age=${maxAgeInSeconds}`;
			// console.log(document.cookie.split(";").some(val => val.slice(0,13) == ' access-token'));
			localStorage.setItem("access-token", JSON.stringify(dataToStore));
			router.push("/feed");
			toastMessage("user login success", "success");
		},
		onError: () => {
			toastMessage("login failed.", "error");
		},
	});
};

export default useLogin;
