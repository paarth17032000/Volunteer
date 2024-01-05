import apiRequestInstance from "@/utils/helperFunctions/AxiosInstance";
import { User } from "@/utils/interface/interface";

interface userDetailsAPiResponse {
	succes: boolean;
	data: User;
	error: string;
	messagee: string;
}

export const getUserDetails = async (): Promise<userDetailsAPiResponse> => {
	const result = await apiRequestInstance.get("/user");
	const data: userDetailsAPiResponse = result.data;
	return data;
};
