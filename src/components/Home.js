import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { localStateAction } from '../redux/localStorage/local.actions';
import Checkboxes from './Checkboxes_02/Checkboxes';
import RadioButtons from './RadioButtons_02/RadioButtons';
import ShowDate from './ShowDate_02/ShowDate';

const Home = () => {
	const entries = useSelector((state) => state.local?.entries);
	const selectedEntries = useSelector((state) => state.local?.selectedEntries);
	const users = useSelector((state) => state.session?.users);
	// const [ entries, setEntries] = useState(entries_01);
	const dispatch = useDispatch();

	const [selectedRadio, setSelectedRadio] = useState('a');
	const [selectedCheckboxes, setSelectedCheckboxes] = useState(['a', 'c']);

	useEffect(() => {
		let abc = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
		];
		// let nums = [1,2,3,4,5,6,7,8,9];
		let abc2 = ['a', 'b', 'c', 'd', 'e', 'f'];
		let entries_02 = [];
		entries_02 = abc.filter((el) => {
			if (abc2.includes(el)) {
				return el;
			}
		});
		// entries_02 = abc2.find((el)=>{
		//     return el
		// })
		console.log(entries_02);
		dispatch(localStateAction('Set', ['entries', 'abc'], [entries_02, abc]));
		return () => {
		}
	}, [dispatch]);

	return (
		<Fragment>
			<div className={`w-full py-4 flex flex-col justify-center content-center items-center`}>
				<div
					className={`w-fit py-4 flex flex-row flex-wrap gap-4 justify-center content-center items-center`}
				>
					<RadioButtons
						name={`alphabets`}
						data={entries}
						selected={selectedRadio}
						containerClasses={`px-2 py-1 border-1 border-orange-500 bg-gray-200`}
						labelClasses={`px-2 py-1 text-12 text-pink-800`}
						onChange={(e) => {
							setSelectedRadio(e.target.value);
						}}
					></RadioButtons>
				</div>
				<div className={`w-full flex flex-col justify-center content-center items-center`}>
					<span className='text-15 text-white'>{selectedRadio}</span>
				</div>
				<div
					className={`w-fit py-4 flex flex-row flex-wrap gap-4 justify-center content-center items-center`}
				>
					<Checkboxes
						name={`alphabets`}
						data={entries}
						containerClasses={`px-2 py-1 border-1 border-orange-500 bg-gray-200`}
						labelClasses={`px-2 py-1 text-12 text-pink-800`}
						selected={selectedCheckboxes}
						getSelected={(selected) => {
							setSelectedCheckboxes(selected);
							console.log(selected);
							dispatch(localStateAction('Set', 'selectedEntries', selected));
						}}
					></Checkboxes>
				</div>
				<div className={`w-fit flex flex-col justify-start content-center items-start`}>
					<span className='text-15 text-white'>{JSON.stringify(selectedEntries)}</span>
				</div>
				<ShowDate textClasses='text-gray-500'></ShowDate>
			</div>
		</Fragment>
	);
};

export default Home;
