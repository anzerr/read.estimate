
declare const estimate: (text: string, option?: {
	strip?: boolean,
	wpm?: number,
	ipm?: number,
	scale?: number,
	pad?: number
}) => Promise<any>;
export default estimate;
export {};