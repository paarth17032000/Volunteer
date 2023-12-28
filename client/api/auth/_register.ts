import { BASE_URL } from "@/config/config";
import axios from "axios";

interface IRegisterResponse {
	success: boolean;
	data: any;
	error: string;
	message: string;
}

export const register = async (payload: {
	name: string;
	email: string;
	phoneNumber: string;
	password: string;
}): Promise<IRegisterResponse> => {
	const result = await axios.post(`${BASE_URL}/register`, payload);
	const data: IRegisterResponse = result.data;
	return data;
};
