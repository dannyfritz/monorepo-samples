import * as React from 'react';

type ButtonProps = {
	text: string,
	onClick: (() => void) | (() => Promise<void>),
}
export function Button({ text, onClick }: ButtonProps) {
	return (
		<button onClick={onClick}>text</button>
	);
}
