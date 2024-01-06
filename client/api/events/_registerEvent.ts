import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";

interface RegisterEventApiResponse {
	success: boolean;
	data: string;
	error: string;
	message: string;
}

export const registerEvent = async (payload: {
	eventId: string;
	userId: string;
}): Promise<RegisterEventApiResponse> => {
	const result = await apiRequestInstance.post(`/events/${payload.eventId}`, {
		userId: payload.userId,
	});
	const data: RegisterEventApiResponse = result.data;
	return data;
};
