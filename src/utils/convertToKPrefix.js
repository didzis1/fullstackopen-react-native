const convertToKPrefix = (value) => {
	return (
		Number(value / 1000)
			.toFixed(1)
			.replace(/\.0$/, '') + 'k'
	);
};

export default convertToKPrefix;
