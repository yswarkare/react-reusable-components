import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Outlet,
  useMatch,
} from "react-router-dom";
import Header from '../Header/Header';

const DefaultLayout = () => {
  const show_api_response_get_users = useSelector(state => state?.session?.show_api_response_get_users);
  const api_response_get_users = useSelector(state => state?.session?.api_response_get_users);
  const match = useMatch("");
  useEffect(() => {
    if (match) console.log({match});
    else console.log("match doesn't exists");  
  }, [])
  return (
    <div className={`w-full flex flex-col justify-center content-center items-center`}>
      {
        show_api_response_get_users === true &&
        <div className={`relative w-full h-0 flex flex-col justify-center content-center items-center`}>
          <div className={`absolute top-0 right-0 z-50 ionic-material-card w-fit flex flex-col justify-center content-center items-center`}>
            <span className='text-white'>
              {api_response_get_users?.status}
            </span>
            <span className='text-white'>
              {api_response_get_users?.message}
            </span>
          </div>
        </div>
      }
      <header className={`w-full flex flex-col justify-center content-center items-center`} >
        <Header></Header>
      </header>
      <main className={`w-full flex flex-col justify-center content-center items-center`} >
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
