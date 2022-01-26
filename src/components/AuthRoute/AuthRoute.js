 
import { Route } from 'react-router-dom';

const AuthRoute = ({ path, exact, element: Component, ...restProps }) => {
  return (
    <Route
    path={path}
    exact={exact}
    element={
      <Component ></Component>
    }
    ></Route>
  );
}

export default AuthRoute;
