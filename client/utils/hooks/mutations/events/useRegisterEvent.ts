import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastMessage } from "@/utils/Toast";
import { registerEvent } from "@/api/events/_registerEvent";

const useRegisterEvent = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: registerEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toastMessage("Event is registered successfully!", "success");
		},
		onError: () => {
			toastMessage("Event registration failed.", "error");
		},
	});
};

export default useRegisterEvent;
