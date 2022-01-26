 

const MultiLineText = ({ text, className, ...restProps }) => {
	return (
		<>
			{Array.isArray(text) === true ? (
				text?.map((item, index) => {
					return (
						<p className={` ${className}`} key={index}>
							{item}
						</p>
					);
				})
			) : text?.includes !== undefined && text?.includes('\\u2002') === true ? (
				text.split('\\u2002').map((item, index) => {
					return (
						<p className={` ${className} py-1/4`} key={index}>
							{item}
						</p>
					);
				})
			) : (
				<span className={className}>{text}</span>
			)}
		</>
	);
};

export default MultiLineText;
