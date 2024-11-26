import { toast } from "sonner";

export const errorHandler = (error: Error) => {
  console.error('Error:', error);
  toast.error('An error occurred', {
    description: error.message,
  });
};

export const networkErrorHandler = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Network request failed');
  }
  return response;
};