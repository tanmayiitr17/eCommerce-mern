import toast from "react-hot-toast";

export const showMessage = (message) => {
  toast.success(message, { duration: 4000 });
};

export const showError = (message) => {
  toast.error(message, { duration: 4000 });
};
