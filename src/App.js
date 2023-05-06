//import logo from './logo.svg';
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Users from './Users';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Createuser from './Createuser';
import Login from './Login';
import Forgotpassword from './Forgotpassword';

function App() {
  return (
    <BrowserRouter>
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
      <Sidebar></Sidebar>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar></Topbar>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Create-User' element={<Createuser/>}/>
            <Route path='/Login' element={<Login></Login>}/>
            <Route path='/Forgotpassword' element={<Forgotpassword></Forgotpassword>}/>
          </Routes>
         
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
    {/* <!-- End of     Page Wrapper --> */}
    </BrowserRouter>
  );
}

export default App;
