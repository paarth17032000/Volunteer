import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";
import { Event } from "@/utils/interface/interface";
import { BASE_URL } from "@/config/config";

interface GetAllEventsApiResponse {
	success: boolean;
	data: Event[];
	error: string;
	message: string;
}

export const getAllEvents = async (): Promise<GetAllEventsApiResponse> => {
	const result = await apiRequestInstance.get("/events");
	const data: GetAllEventsApiResponse = result.data;
	return data;
};
