import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "@/api/user/_userDetails";

const useGetUserDetails = (enableFlag: boolean) => {
	const { status, isError, isSuccess, data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getUserDetails,
		enabled: enableFlag,
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
