import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth/_register";
import { toastMessage } from "@/utils/Toast";

const useRegister = () => {
	return useMutation({
		mutationFn: register,
		onSuccess: (data) => {
			console.log(data);
			toastMessage("user register success", "success");
		},
		onError: () => {
			toastMessage("login register failed.", "error");
		},
	});
};

export default useRegister;
