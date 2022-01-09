import React, { useEffect, useState } from 'react';
import './Fade.css';

const Fade = ({ show, duration, children, classes, className }) => {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		shouldRender && (
			<div
				className={`fade-in-fade-out overflow-visible ${classes ? classes : ''} ${
					className ? className : ''
				}`}
				style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} ${duration || '300ms'}` }}
				onAnimationEnd={onAnimationEnd}
			>
				{children}
			</div>
		)
	);
};

export default Fade;
