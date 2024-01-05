import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";
import { Event } from "@/utils/interface/interface";
import { BASE_URL } from "@/config/config";

interface CreateEventApiResponse {
	success: boolean;
	data: Event;
	error: string;
	message: string;
}

export const createEvent = async (payload: {
	eventName: string;
	userId: string;
	eventCategory: string;
	volunteerRequired: string;
	date: string;
	venue: string;
	desc: string;
}): Promise<CreateEventApiResponse> => {
	const result = await apiRequestInstance.post("/events", payload);
	const data: CreateEventApiResponse = result.data;
	return data;
};
