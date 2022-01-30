import UsersTable from "../../views/UsersTable/UsersTable";

const Redux = () => {

  
  return (
    <div className={`w-full flex flex-col justify-center content-center items-center`}>
      <div className={`w-full flex flex-col justify-center content-center items-center`}>
        <span className='text-12 text-white'>Redux</span>
      </div>
      <div className={`w-full flex flex-col justify-center content-center items-center`}>
        <UsersTable />
      </div>
    </div>
  );
}

export default Redux;
