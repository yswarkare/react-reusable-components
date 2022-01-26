 
import Checkbox from '../Checkbox/Checkbox';

const Checkboxes = ({
	data = [],
	selected = [],
	labelProp = '',
	valueProp = '',
	getSelected = () => {},
	...restProps
}) => {
	const newSelected = [];
	return (
		<>
			{data?.map((item, index) => {
				return (
					<Checkbox
						label={labelProp ? item[labelProp] : item}
						value={valueProp ? item[valueProp] : item}
						key={index}
						checked={selected?.includes(item)}
						onChange={(e) => {
							e.target.checked === true
								? getSelected([...selected, item])
								: e.target.checked === false && labelProp
								? newSelected = selected.filter((element)=> element[labelProp] === item[labelProp] ) && getSelected([...newSelected])
								: e.target.checked === false && !labelProp
								? selected.splice(selected.indexOf(item), 1) && getSelected([...selected])
								: getSelected(selected);
						}}
						{...restProps}
					></Checkbox>
				);
			})}
		</>
	);
};

export default Checkboxes;
