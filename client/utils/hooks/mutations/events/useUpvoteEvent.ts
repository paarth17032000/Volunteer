import { useMutation, useQueryClient } from "@tanstack/react-query";
import { upvoteEvent } from "@/api/events/_upvoteEvent";
import { toastMessage } from "@/utils/Toast";

const useUpvoteEvent = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: upvoteEvent,
		onSuccess: () => {
			// queryClient.invalidateQueries({ queryKey: ["user"] });
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toastMessage("Event is upvoted successfully!", "success");
		},
		onError: () => {
			toastMessage("Event upvote failed.", "error");
		},
	});
};

export default useUpvoteEvent;
