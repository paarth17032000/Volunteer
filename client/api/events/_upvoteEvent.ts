import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";

export const upvoteEvent = async ({
	eventId,
	userId,
}: {
	eventId: string;
	userId: string;
}): Promise<string> => {
	const result = await apiRequestInstance.post(`/events/upvote/${eventId}`, { userId });
	const data: string = result.data;
	return data;
};
