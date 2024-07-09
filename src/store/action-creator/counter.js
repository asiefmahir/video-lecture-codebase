export const increment = (payload) => {
	return {
		type: "counter/increment",
		payload: payload,
	};
};

export const decrement = (payload) => {
	return {
		type: "counter/decrement",
		payload: payload,
	};
};
