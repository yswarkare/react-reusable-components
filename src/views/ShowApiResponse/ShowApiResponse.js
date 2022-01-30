import { useDispatch, useSelector } from 'react-redux';
import Toast from '../../components/Toast/Toast';
import removeSessionApiResponse from "../../redux/sessionStorage/actions/removeSessionApiResponse";

const ShowApiResponse = () => {
	const dispatch = useDispatch();
	const show_api_response = useSelector((state) => state?.session?.show_api_response);
	const api_response = useSelector((state) => state?.session?.api_response);

	const hideMessage = (entity) => {
		console.log({entity});
		dispatch(removeSessionApiResponse(entity));
 	}
	return (
		<div className='relative h-0 w-full flex'>
			<div className='absolute top-0 bottom-0'>
				{api_response &&
					Object.entries(api_response)?.map?.(
						(response, index) =>
							show_api_response[response[0]] && (
								<Toast
									key={index}
									visible={show_api_response[response[0]]}
									message={response[1]}
									hideMessage={()=> hideMessage(response[0])}
								></Toast>
							)
					)}
			</div>
		</div>
	);
};

export default ShowApiResponse;
