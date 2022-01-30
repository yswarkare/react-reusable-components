import { useEffect, useState } from 'react';

const Toast = ({
	visible,
	message: { status = 0, message = '' } = { status: 0, message: '' },
	hideMessage = () => {},
}) => {
	// const [show, setShow] = useState(false);

	// useEffect(() => {
	// 	setShow(visible);
	// }, [visible]);

	return (
		<>
			{visible && (
				<div
					className={`fixed top-0 right-0 mt-16 mr-12 w-fit bg-black-800 opacity-90 h-0 flex flex-col justify-center content-center items-center border-0 rounded-sm`}
				>
					<div
						className={`px-6 py-4 shadow-card-2 border-0 rounded-sm w-fit flex flex-col justify-center content-center items-center relative`}
					>
						<div
							className={`absolute top-0 right-0 mt-1 mr-1 w-full flex flex-row justify-end content-center items-center`}
						>
							<div
								className={`w-fit pt-1 pr-1 cursor-pointer flex flex-col justify-center content-center items-center`}
								onClick={() => {
									hideMessage();
								}}
							>
								<i className={`far fa-times-circle text-white text-10`}></i>
							</div>
						</div>
						<span className='text-white'>{status}</span>
						<span className='text-white'>{message}</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Toast;
