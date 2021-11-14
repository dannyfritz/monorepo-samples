import { describe, test, expect } from '@jest/globals';
import {add} from './index';

describe('add', () => {
	test('happy path', () => {
		const result = add(1, 2);
		expect(result).toBe(3);
	});
})
