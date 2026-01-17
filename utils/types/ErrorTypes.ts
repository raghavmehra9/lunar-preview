export interface ValidationError {
  type: string;
  message: string;
}

export interface ErrorResponseWithDetails {
  errors: {
    [key: string]: ValidationError;
  };
}

export interface GenericErrorResponse {
  success: string;
  message: string;
}

type Error_Code = 422 | 500 | 401;
type Success_Code = 200 | 201;

export type ErrorResponse = ErrorResponseWithDetails | GenericErrorResponse;

export { Error_Code, Success_Code };
