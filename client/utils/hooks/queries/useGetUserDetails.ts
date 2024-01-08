import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "@/api/user/_userDetails";

const useGetUserDetails = (accessToken: string = "", enableFlag: boolean = true) => {
	const { status, isError, isSuccess, data, isLoading, refetch,  } = useQuery({
		queryKey: ["user"],
		queryFn: getUserDetails,
		enabled: accessToken.length > 0 && enableFlag,
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
		refetchUserDetailsData: refetch,
	};
};

export default useGetUserDetails;
