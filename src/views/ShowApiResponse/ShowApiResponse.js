import { useSelector } from 'react-redux';
import Toast from '../../components/Toast/Toast';

const ShowApiResponse = () => {
	const show_api_response = useSelector((state) => state?.session?.show_api_response);
	const api_response = useSelector((state) => state?.session?.api_response);
	return (
		<>
			{api_response &&
				Object.entries(api_response)?.map?.(
					(response, index) =>
						show_api_response[response[0]] && (
							<Toast
								key={index}
								visible={show_api_response[response[0]]}
								message={response[1]}
							></Toast>
						)
				)}
		</>
	);
};

export default ShowApiResponse;
