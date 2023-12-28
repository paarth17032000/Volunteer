import { login } from "@/api/auth/_login";
import { toastMessage } from "@/utils/Toast";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			console.log(data);
			toastMessage("user login success", "success");
		},
		onError: () => {
			toastMessage("login login failed.", "error");
		},
	});
};

export default useLogin;
