import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";

interface DeleteEventApiResponse {
	success: boolean;
	data: string;
	error: string;
	message: string;
}

export const deleteEvent = async (eventId: string): Promise<DeleteEventApiResponse> => {
	const result = await apiRequestInstance.delete(`/events/${eventId}`);
	const data: DeleteEventApiResponse = result.data;
	return data;
};
