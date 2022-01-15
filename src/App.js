import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={`/`} element={<DefaultLayout></DefaultLayout>} ></Route>
          {/* <Route path={`*`} element={<ErrorPage></ErrorPage>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
