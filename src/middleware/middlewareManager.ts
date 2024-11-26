import { checkAuth, setAuthToken, removeAuthToken } from './authMiddleware';
import { errorHandler, networkErrorHandler } from './errorMiddleware';
import { loggerMiddleware } from './loggingMiddleware';

export const middlewareManager = {
  auth: {
    checkAuth,
    setAuthToken,
    removeAuthToken,
  },
  error: {
    handleError: errorHandler,
    handleNetworkError: networkErrorHandler,
  },
  logger: loggerMiddleware,
};

export default middlewareManager;