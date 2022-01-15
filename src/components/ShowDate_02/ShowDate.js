import React from 'react';

const ShowDate = ({
	date = new Date(),
	containerClasses = '',
	textClasses = '',
	textStyle = {},
	dotClasses = '',
	dotStyle = {},
	containerStyle = {},
}) => {
	const containerDefaultStyles = {
		direction: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	};

	const dotDefaultStyles = {
		fontSize: '0.5rem',
		paddingLeft: '0.125rem',
		paddingRight: '0.125rem',
	};
	return (
		<div className={`${containerClasses}`} style={{ ...containerDefaultStyles, ...containerStyle }}>
			<span className={textClasses} style={{ ...textStyle }}>
				{`${date?.getDate?.()}`}
			</span>
			<span className={dotClasses} style={{ ...dotDefaultStyles, ...dotStyle }}>
				&#9679;
			</span>
			<span className={textClasses} style={{ ...textStyle }}>
				{`${1 + date?.getMonth?.()}`}
			</span>
			<span className={dotClasses} style={{ ...dotDefaultStyles, ...dotStyle }}>
				&#9679;
			</span>
			<span className={textClasses} style={{ ...textStyle }}>
				{`${date?.getFullYear?.()}`}
			</span>
		</div>
	);
};

export default ShowDate;
