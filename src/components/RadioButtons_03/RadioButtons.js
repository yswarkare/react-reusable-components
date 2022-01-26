 
import RadioButton from '../RadioButton/RadioButton';

const Radiobuttons = ({
	data = [],
	selected = '',
	labelProp = '',
	valueProp = '',
	getSelected = () => {},
	...restProps
}) => {
	const onTheClick = () => {};

	return (
		<>
			{data?.map((item, index) => {
				return (
					<RadioButton
						label={labelProp ? item[labelProp] : item}
						value={valueProp ? item[valueProp] : item}
						key={index}
						checked={labelProp ? selected[labelProp] === item[labelProp] : selected === item}
						{...restProps}
					></RadioButton>
				);
			})}
		</>
	);
};

export default Radiobuttons;
