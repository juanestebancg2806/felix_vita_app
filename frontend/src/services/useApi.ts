import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig
} from "axios";
import { useNavigate } from "react-router-dom";

import displayToastMessage from "./toastService";

const useApi = (): AxiosInstance => {
	const instance: AxiosInstance = axios.create({
		baseURL: "https://api.localhost:8080",
		timeout: 240000 
	});
	const navigate = useNavigate();
	

	const handleRequest = (
		req: InternalAxiosRequestConfig
	): InternalAxiosRequestConfig => {
		req.headers["Content-Type"] = "application/json";
		//req.headers.Authorization = `Bearer ${cookies.TOKEN as string}`;
		return req;
	};

	const handleResponseSuccess = (res: AxiosResponse): AxiosResponse => {
		if (res.status === 207) {
			displayToastMessage(res?.data?.message, "info");
		}
		return res;
	};

	const handleError = (
		error: AxiosError<{ message: string }>
	): Promise<AxiosError> => {
		const { response } = error;
		
		if (response?.status === 500) {
			displayToastMessage("Please contact the administrator", "error");
		}
		if (response?.status === 400) {
			displayToastMessage("Please contact the administrator", "warning");
            navigate("");
		}
		
		if (response?.status === 409) {
			if (response?.data?.message) {
				displayToastMessage(response?.data?.message, "error");
			}
		}
		console.error(error);
		return Promise.reject(error);
	};

	instance.interceptors.response.use(handleResponseSuccess, handleError);
	instance.interceptors.request.use(handleRequest, handleError);

	return instance;
};

export default useApi;
