export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const customMessage =
      errorData.message || "알 수 없는 오류가 발생했습니다.";
    console.error(customMessage);
    throw new ApiError(customMessage, response.status);
  }
  return response.json() as T;
}
