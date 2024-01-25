import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastMessage } from "@/utils/Toast";
import { deleteEvent } from "@/api/events/_deleteEvent";

const useDeleteEvent = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toastMessage("Event is cancelled successfully!", "success");
		},
		onError: () => {
			toastMessage("Event cancellation failed.", "error");
		},
	});
};

export default useDeleteEvent;
