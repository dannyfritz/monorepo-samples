import type { AddHandlerResponse, ResponseType } from 'math-service';
import { errAsync, okAsync, Result } from 'neverthrow';

export const add = async (a: number, b: number): Promise<Result<ResponseType<AddHandlerResponse>, string>> => {
	const response: AddHandlerResponse = await Promise.resolve({
		code: 200,
		data: a + b,
	}) as AddHandlerResponse;
	if (response.code === 200) {
		return okAsync(response.data);
	} else {
		return errAsync(response.error);
	}
}
