import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const sendSuccessToast = (message) => {
    toast.success(message, {
        position: "bottom-left",
        autoClose: 5000,
        progress: undefined,
        theme: "light",
        });
}

export const sendErrorToast = (message) => {
    toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        progress: undefined,
        theme: "light",
        });
}

