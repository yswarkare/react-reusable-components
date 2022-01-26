 

const PageTitle = ({ title }) => {
  return (
    <div className={`w-full flex flex-row justify-center content-center items-center`}>
      <span className={`text-white`}>{title}</span>
    </div>
  );
}

export default PageTitle;