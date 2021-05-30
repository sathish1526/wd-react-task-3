import SideBar from "./sideBar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard"

export default function app(){
  return <>
  <div id="wrapper">
    <SideBar></SideBar>
    <div id="content-wrapper" className="d-flex flex-column">
      <Topbar></Topbar>
      <div className="container-fluid">
        <Dashboard></Dashboard>
      </div>
    </div>
  </div>
  </>
}
