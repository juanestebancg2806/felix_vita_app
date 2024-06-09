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
  theme: "light",
};

/**
 * Displays a toast message with the specified text and type.
 * @param text - The text to be displayed in the toast message.
 * @param type - The type of the toast message. Can be one of: "error", "success", "info", "default", or "warning".
 * @param options - Optional configuration options for the toast message.
 */
const displayToastMessage = (
  text: string,
  type: "error" | "success" | "info" | "default" | "warning",
  options?: ToastOptions
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
