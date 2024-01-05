import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "@/api/events/_getAllEvents";
import { getUserDetails } from "@/api/user/_userDetails";

const useGetUserDetails = () => {
	const { status, isError, isSuccess, data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getUserDetails,
		retry: false,
		staleTime: Infinity,
	});

	// data here is full response
	return {
		userDetailsData: data,
		status,
		userDetailsDataSuccess: isSuccess,
		userDetailsDataError: isError,
		userDetailsDataLoading: isLoading,
	};
};

export default useGetUserDetails;
