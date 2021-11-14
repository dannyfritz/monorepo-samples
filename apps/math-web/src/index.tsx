import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Button } from 'button';
import { add } from 'math-service-client';

const Application = () => {
	const [result, setResult] = useState<number>();
	const [error, setError] = useState<string>();
	const addNumbers = async () => {
		const result = await add(1, 2);
		if (result.isOk()) {
			setResult(result.value);
		} else {
			setError(result.error);
		}
	}
	return (
		<>
			<div>Hello!</div>
			<Button text="Add Numbers 1 and 2 together" onClick={addNumbers}></Button>
			{result && <div>The answer: {result}</div>}
			{error && <div>Error: {error}</div>}
		</>
	);
};

const domContainer = document.querySelector('#app');
render(<Application />, domContainer);
