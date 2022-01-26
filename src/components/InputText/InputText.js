const InputText = ({ type = 'text', ...restProps }) => {
	return <input type={type} {...restProps} />;
};

export default InputText;
