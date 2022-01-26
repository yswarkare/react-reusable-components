 
import { Link } from 'react-router-dom';

const ComponentInfo = ({ label, path, description }) => {
  return (
    <div className={`w-full px-2 py-1 flex flex-col justify-center content-center items-center`}>

      <Link to={`${path}`} className={`link w-full px-1 py-1/2 min-w-max flex flex-row justify-center content-center items-center`}>
        {label}
      </Link>
      <div className={`w-full px-2 py-1 flex flex-row justify-center content-center items-center`}>
        <span className='text-white' >{description}</span>
      </div>
    </div>
  );
}

export default ComponentInfo;
