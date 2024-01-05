import axios from "axios";
import { BASE_URL } from "@/config/config";

const apiRequestInstance = axios.create({
	baseURL: BASE_URL, // Replace with your API base URL
	headers: {
		"Content-Type": "application/json",
	},
});

// Add an interceptor to include the Authorization header for every request
apiRequestInstance.interceptors.request.use((config) => {
	const accessToken = document.cookie
		.split(";")
		.find((val) => val.slice(0, 13) == " access-token")
		?.split("=")[1];
	// console.log(accessToken);
	// const accessToken = JSON.parse(localStorage.getItem("repx-access-token") ?? "").value;
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

export default apiRequestInstance;
