import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "@/api/events/_getAllEvents";

const useGetAllEvents = () => {
	const { status, isError, isSuccess, data, isLoading } = useQuery({
		queryKey: ["events"],
		queryFn: getAllEvents,
		retry: false,
		staleTime: Infinity,
	});

	// data here is full response
	return {
		allEventsData: data,
		status,
		allEventsDataSuccess: isSuccess,
		allEventsDataError: isError,
		allEventsDataLoading: isLoading,
	};
};

export default useGetAllEvents;
