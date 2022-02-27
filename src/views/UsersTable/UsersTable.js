import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import InputCell from './InputCell';

const UsersTable = () => {
	// const dispatch = useDispatch();
	// const users = useSelector((state) => state?.session?.users);
	const users = useContextState().users;
	const updateContextState = useUpdateContextState();
	const [editedItems, setEditedItems] = useState(() => ({}));

	useEffect(() => {
		console.log(editedItems);
	}, [editedItems]);

	const updateEditedItems = (e, user) => {
		setEditedItems((prevEdited) => ({
			...prevEdited,
			[user.id]: {
				...prevEdited[user.id],
				[e.target.name]: e.target.value,
			},
		}));
	};

	const addToEditedItems = (item) => {
		setEditedItems((prevEdited) => {
			return {
				...prevEdited,
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

	const saveUpdatedItems = (user) => {
		let newUsers = users.map((_user)=> _user?.id === user?.id ? editedItems[user?.id] : _user);
		updateContextState("users", newUsers);
		removeEditedItem(user);
	}

	const deleteUser = (user) => {};

	const columnsHeaders = ['Name', 'Username', 'Email', 'Actions'];

	const columnClasses = `w-25/100`;

	const rowCells = ['name', 'username', 'emailID'];

	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
			<table className={`w-full flex flex-col justify-center content-center items-center`}>
				<thead className={`w-full flex flex-col justify-center content-center items-center`}>
					<tr className={`w-full flex flex-row justify-center content-center items-center`}>
						{columnsHeaders?.map((header, index) => (
							<th className={`${columnClasses}`} key={index}>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={`w-full flex flex-col justify-center content-center items-center`}>
					{users?.map?.((user, index) => (
						<tr
							className={`w-full h-full flex flex-row justify-center content-center items-center`}
							key={index}
						>
							{rowCells?.map((userProp, index) => (
								<td
									className={`${columnClasses} h-full flex flex-col justify-start content-start items-start`}
									key={index}
								>
									<InputCell
										type={`text`}
										name={userProp}
										className={`${editedItems[user.id] ? 'bg-gray-900' : ''}`}
										label={`${user?.[userProp]}`}
										value={editedItems[user.id] ? editedItems[user.id][userProp] : user?.name}
										edit={editedItems[user.id]}
										onChange={(e) => {
											updateEditedItems(e, user);
										}}
									></InputCell>
								</td>
							))}
							<td
								className={`${columnClasses} h-full flex flex-row flex-grow justify-evenly content-center items-center`}
							>
								{editedItems[user.id] ? (
									<>
										<div
											className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
											onClick={() => {
												saveUpdatedItems(user);
											}}
										>
											<i className={`fas fa-save text-white text-base`}></i>
										</div>
										<div
											className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
											onClick={() => {
												removeEditedItem(user);
											}}
										>
											<i className={`far fa-times-circle text-white text-base`}></i>
										</div>
									</>
								) : (
									<div
										className={`w-fit p-1 cursor-pointer transition translate duration-300 flex flex-col justify-center content-center items-center`}
										onClick={() => {
											addToEditedItems(user);
										}}
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
