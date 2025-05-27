import { toast } from "sonner";

const errorMessages: Record<string, string> = {
  "Invalid identifier or password": "Correo o contraseña incorrectos.",
  "An unexpected error occurred": "Correo o contraseña incorrectos.",
  "Email or Username are already taken":
    "El correo electrónico o nombre de usuario ya están en uso",
};

function getFriendlyErrorMessage(error: string): string {
  return errorMessages[error];
}

export default function useErrorHandler() {
  const showError = (error: string) => {
    return toast.error(getFriendlyErrorMessage(error) || error);
  };

  const handleRejection = (error: any) => {
    if (typeof error === "string") {
      showError(error);
    } else if (error?.response?.data?.error?.message) {
      showError(error.response.data.error.message);
    } else if (error.message) {
      showError(error.message);
    } else {
      showError("Something went wrong. Our team is working to fix it.");
    }
  };

  return {
    showError,
    handleRejection,
  };
}
