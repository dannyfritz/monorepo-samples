import { add } from "math-util";

type Response<D> =
	| {
		code: 200,
		data: D
	}
	| {
		code: 500,
		error: string
	}
	;

type Request<D> = { body: D }

export type ResponseType<T> = T extends Response<infer D> & { code: 200 } ? D : never;
export type RequestBody<T> = T extends Request<infer D> ? D : never;

export type AddHandlerRequest = Request<{a: number, b: number }>
export type AddHandlerResponse = Response<number>

export const addHandler = (request: AddHandlerRequest): AddHandlerResponse => {
	try {
		return {
			code: 200,
			data: add(request.body.a, request.body.b),
		}
	} catch (error) {
		if (error instanceof Error) {
			return {
				code: 500,
				error: error.message,
			}
		} else {
			return {
				code: 500,
				error: 'An internal error occurred',
			}
		}
	}
};
