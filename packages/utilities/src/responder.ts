export const HttpStatus: { [key: number]: string } = {
  200: 'The request was successful',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
}

/**
 * Creates a new JSON response with the given message, payload, and status code.
 *
 * @template T - The type of the payload.
 * @param {string | undefined} [message] - The message to include in the response.
 * @param {T[] | T | undefined} [payload] - The payload to include in the response. Can be an array of objects or a single object.
 * @param {number} [status=200] - The HTTP status code to include in the response.
 * @returns {Object<T>} A new Response object with a JSON body.
 */
export function jsonResponse<T>(
  message: string | undefined = undefined,
  payload: T[] | T | undefined = undefined,
  status: number = 200
): object {
  const msg = message || HttpStatus[status]
  const data = Array.isArray(payload) ? { data: [...payload] } : { ...payload }
  return { status_code: status, message: msg, ...data }
}
