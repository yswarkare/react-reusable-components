const Toast = ({ visible, message: { status = 0, message = "" } = { status: 0, message: "" } }) => {
	return (
		<>
			{visible && (
				<div
					className={`relative top-0 right-0 mt-16 mr-12 w-fit bg-gray-500 h-0 flex flex-col justify-center content-center items-center`}
				>
					<div
						className={`fixed top-0 right-0 z-50 ionic-material-card w-fit flex flex-col justify-center content-center items-center`}
					>
						<span className='text-black'>{status}</span>
						<span className='text-black'>{message}</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Toast;
