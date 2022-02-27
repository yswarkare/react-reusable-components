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

	const deleteUser = (user) => {
		let newUsers = users.filter((_user)=> _user?.id !== user?.id);
		updateContextState("users", newUsers);
		removeEditedItem(user);
	};

	const columnsHeaders = ["Id", 'Name', 'Username', 'Email', 'Actions'];

	const columnClasses = `w-full h-full flex flex-row justify-start content-start items-start`;
	const columnHeaderClasses = [`${columnClasses} justify-center`, `${columnClasses} justify-center`, `${columnClasses} justify-center`, `${columnClasses} justify-center`, `${columnClasses} justify-center`]
	const rowCells = ['id', 'name', 'username', 'emailID'];
	const rowItemClasses = [`${columnClasses} justify-center`, columnClasses, columnClasses, columnClasses, `${columnClasses} justify-center`];

	return (
		<div className={`w-full flex flex-col justify-center content-center items-center`}>
			<table className={`w-full flex flex-col justify-center content-center items-center`}>
				<thead className={`w-full flex flex-col justify-center content-center items-center`}>
					<tr className={`w-full flex flex-row justify-center content-center items-center`}>
						{columnsHeaders?.map((header, index) => (
							<th className={`${columnHeaderClasses[index]}`} key={index} style={{
								border: 'solid 1px'
							}}>
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
									className={`${rowItemClasses[index]}`}
									key={index}
									style={{
										border: 'solid 1px'
									}}
								>
									<InputCell
										type={`text`}
										name={userProp}
										className={`${editedItems[user.id] ? 'bg-gray-900 w-full' : ''} px-1 py-1`}
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
								className={`${columnClasses} h-full flex flex-row flex-grow justify-evenly content-center items-center px-1 py-1`}
								style={{
									border: 'solid 1px'
								}}
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
