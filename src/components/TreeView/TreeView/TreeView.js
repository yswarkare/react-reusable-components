import React, {Fragment} from 'react';

const TreeView = ({
  addClasses = 'w-full',
  classes = 'accordion w-full overflow-visible',
  ...restProps
}) => {

	return (
		<div className={`${classes} ${addClasses}`}>
			{restProps?.children &&
				restProps?.children.map((element, index) => {
					if (element.type.name === 'TreeItem') {
						return <Fragment key={index}>{element}</Fragment>;
					}
				})}
		</div>
	);
};

export default TreeView;
