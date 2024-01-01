import { BASE_URL } from "@/config/config";
import axios from "axios";

export const getAllEvents = async () => {
	const result = await axios.get(`${BASE_URL}/events`);
	const data: any = result.data;
	return data;
};
