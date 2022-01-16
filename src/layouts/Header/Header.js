import React from 'react';
import { Link } from 'react-router-dom';
import headerItems from '../../data/headerIte.data';

const Header = () => {
  
	return (
		<div className={`w-full p-4 flex flex-col justify-center content-center items-center`}>
			<div className={`w-full p-2 c`}>
				<ul className='w-full flex flex-row justify-center content-center items-center'>
					{headerItems?.map(({ label, path }, index) => {
						return (
							<li className='px-4 py-2 text-white' key={index}>
                <Link to={`${path}`} className='link' >
								  {label}
                </Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;
