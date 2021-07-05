import SideBar from "./sideBar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard"
import Profile from "./profile"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UserList from "./userlist";
import UserEdit from "./useredit";
import UserCreater from "./usercreate";
import EditProfile from "./editprofile";
import {UserProvider} from "./usercontext";


export default function app(){
  return <>
  <Router>
  <div id="wrapper">
    <SideBar></SideBar>
    <UserProvider>
    <div id="content-wrapper" className="d-flex flex-column">
      <Topbar></Topbar>
      <div className="container-fluid">
        
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true}/>
            <Route path="/users" component={UserList} exact={true}/>
            <Route path="/usercreate" component={UserCreater} exact={true}/>
            <Route path="/useredit/:id" component={UserEdit} exact={true}/>
            <Route path="/profile/:id" component = {Profile} exact = {true}/>
            <Route path="/editprofile/:id" component={EditProfile} exact = {true}/>
          </Switch>
         
      </div>
    </div>
    </UserProvider>
  </div>
  </Router>
  </>
}
