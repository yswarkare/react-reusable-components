import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import updateNestedObjecct from '../../utils/updateNestedObject';
// import updateNestedSessionObject from '../../redux/sessionStorage/actions/updateNestedSessionObject';

const UsersTable = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state?.session?.users);
	const [editedItems, setEditedItems] = useState({});

	const addToEditedItems = (item) => {
		setEditedItems((prevEdited) => {
			return {
				prevEdited,
				[item.id]: item,
			};
		});
	};

	const removeEditedItem = (item) => {
		setEditedItems((prevEdited) => {
			let newEditedItems = { ...prevEdited };
			delete newEditedItems[item.id];
			return newEditedItems;
		});
	};

	const deleteUser = (user) => {

	};

	const columnClasses = `w-25/100`;

	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
			<table className={`w-full flex flex-col justify-center content-center items-center`}>
				<thead className={`w-full flex flex-col justify-center content-center items-center`}>
					<tr className={`w-full flex flex-row justify-center content-center items-center`}>
						<th className={`${columnClasses}`}>{'Name'}</th>
						<th className={`${columnClasses}`}>{'Username'}</th>
						<th className={`${columnClasses}`}>{'Email'}</th>
						<th className={`${columnClasses}`}>{'Actions'}</th>
					</tr>
				</thead>
				<tbody className={`w-full flex flex-col justify-center content-center items-center`}>
					{users?.map?.((user, index) => (
						<tr
							className={`w-full h-full flex flex-row justify-center content-center items-center`}
							key={index}
						>
							<td
								className={`${columnClasses} h-full flex flex-col justify-start content-start items-start`}
							> 
								{user?.name}
							</td>
							<td
								className={`${columnClasses} h-full flex flex-col justify-start content-start items-start`}
							>
								{user?.username}
							</td>
							<td
								className={`${columnClasses} h-full flex flex-col justify-start content-start items-start`}
							>
								{user?.email}
							</td>
							<td
								className={`${columnClasses} h-full flex flex-row flex-grow justify-evenly content-center items-center`}
							>
								{editedItems[user.id] ? (
									<>
										<div
											className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
                      onClick={()=>{removeEditedItem(user)}}
										>
											<i className={`fas fa-save text-white text-base`}></i>
										</div>
										<div
											className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
                      onClick={()=>{removeEditedItem(user)}}
										>
											<i className={`far fa-times-circle text-white text-base`}></i>
										</div>
									</>
								) : (
									<div
										className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
                    onClick={()=>{addToEditedItems(user)}}
									>
										<i className={`fas fa-pen text-white text-base`}></i>
									</div>
								)}
								<div
									className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
									onClick={() => {
										deleteUser(user);
									}}
								>
									<i className={`fas fa-trash-alt text-white text-base`}></i>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
