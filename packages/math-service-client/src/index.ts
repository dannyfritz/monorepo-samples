import type { AddHandlerResponse, ResponseType } from 'math-service';
import { addHandler } from 'math-service';
import { errAsync, okAsync, ResultAsync } from 'neverthrow';

export const add = (a: number, b: number): ResultAsync<ResponseType<AddHandlerResponse>, string> => {
	const response = addHandler({ body: { a, b }})
	if (response.code === 200) {
		return okAsync(response.data);
	} else {
		return errAsync(response.error);
	}
}
