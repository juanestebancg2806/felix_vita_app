import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
	position: "top-center",
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: true,
	progress: undefined,
	theme: "light"
};

const displayToastMessage = (
	text: string,
	type: "error" | "success" | "info" | "default" | "warning",
	options?: ToastOptions,
): void => {
	
	const mergedOptions = { ...defaultOptions, ...options };
	if (type === "error") {
		toast.error(text, mergedOptions);
	} else if (type === "success") {
		toast.success(text, mergedOptions);
	} else if (type === "info") {
		toast.info(text, mergedOptions);
	} else if (type === "warning") {
		toast.warn(text, mergedOptions);
	} else {
		toast(text, options);
	}
};

export default displayToastMessage;
