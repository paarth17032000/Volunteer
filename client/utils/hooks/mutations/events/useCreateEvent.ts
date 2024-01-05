import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastMessage } from "@/utils/Toast";
import { createEvent } from "@/api/events/_createEvent";

const useCreateEvent = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createEvent,
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toastMessage("Event is created successfully!", "success");
		},
		onError: () => {
			toastMessage("Event creation failed.", "error");
		},
	});
};

export default useCreateEvent;
