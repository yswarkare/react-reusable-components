import { useEffect, useRef, useState } from 'react';
import Toast from 'bootstrap/js/src/toast';

const Toast1 = ({ show = Boolean, message = '' }) => {
	const [toastElement, setToastElement] = useState();
	const toastRef = useRef();

	useEffect(() => {
		const toast = new Toast(toastRef);
		setToastElement(toast);
	}, []);

	useEffect(() => {
		if (show === true) toastElement?.current?.show();
		if (show === false) toastElement?.current?.hide();
	}, [show]);

	return (
		<div className='toast position-fixed bottom-0 end-0 p-3' role='alert' aria-live='assertive' aria-atomic='true' ref={toastRef}>
			<div className='toast-header'>
				<strong className='me-auto'>Bootstrap</strong>
				<small className='text-muted'>just now</small>
				<button type='button' className='btn-close' data-bs-dismiss='toast' aria-label='Close'></button>
			</div>
			<div className='toast-body'>{`${message}`}</div>
		</div>
	);
};

export default Toast1;
