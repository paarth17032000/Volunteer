import { login } from "@/api/auth/_login";
import { toastMessage } from "@/utils/Toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLogin = () => {
	const router = useRouter();
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			console.log(data);
			const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
			const dataToStore = {
				value: data.data.accessToken,
				expirationTime: expirationTime,
			};
			localStorage.setItem("access-token", JSON.stringify(dataToStore));
			router.push("/feed");
			toastMessage("user login success", "success");
		},
		onError: () => {
			toastMessage("login login failed.", "error");
		},
	});
};

export default useLogin;
