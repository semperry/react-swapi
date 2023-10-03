const requireArgument = (paramName) => {
	throw new Error(`Missing Argument: ${paramName}.`);
};

module.exports = requireArgument;
