import React from 'react';
import {
  Routes
} from "react-router-dom";
import AuthRoute from '../../components/AuthRoute/AuthRoute';
import routes from '../../routes';

const DefaultLayout = () => {
  return (
    <div className={`w-full flex flex-col justify-center content-center items-center`}>
      Default Layout
      <Routes>
        {
          routes.map((item, index)=>{
            return (
              <>
                <AuthRoute
                  path={item.path}
                  exact={item.exact}
                  element={item?.element}
                ></AuthRoute>
              </>
            ) 
          })
        }
      </Routes>
    </div>
  );
}

export default DefaultLayout;
