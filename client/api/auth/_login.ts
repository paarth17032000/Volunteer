import { BASE_URL } from "@/config/config";
import { User } from "@/utils/interface/interface";
import axios from "axios";

interface ILoginResponse {
	success: boolean;
	data: {
		user: User;
		accessToken: string;
	};
	error: string;
	message: string;
}

export const login = async (payload: {
	email: string;
	password: string;
}): Promise<ILoginResponse> => {
	const result = await axios.post(`${BASE_URL}/login`, payload);
	const data: ILoginResponse = result.data;
	return data;
};
