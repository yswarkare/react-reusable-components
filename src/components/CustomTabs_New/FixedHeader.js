 

const FixedHeader = ({ className = '', addClasses = '', style = {}, ...restProps }) => {
	return (
		<div
			className={className || `w-full flex flex-col justify-center content-center items-center ${addClasses}`}
			style={style}
		>
			{restProps.children}
		</div>
	);
};

export default FixedHeader;
