export const changeBgColor = (bgColor) => {
	return {
		type: "theme/changeBgColor",
		payload: bgColor,
	};
};

export const changeTextColor = (color) => {
	return {
		type: "theme/changeTextColor",
		payload: color,
	};
};

export const resetTheme = () => {
	return {
		type: "theme/resetTheme",
	};
};
