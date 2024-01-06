import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth/_register";
import { toastMessage } from "@/utils/Toast";
import { useRouter } from "next/navigation";

const useRegister = () => {
	const router = useRouter();
	return useMutation({
		mutationFn: register,
		onSuccess: () => {
			router.push("/login");
			toastMessage("User registeration successful!", "success");
			toastMessage("Login to use the app.", "info");
		},
		onError: () => {
			toastMessage("User registeration failed.", "error");
		},
	});
};

export default useRegister;
