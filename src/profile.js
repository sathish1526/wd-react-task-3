import {Link} from "react-router-dom";

export default function Profile(props){
    return <>
    <Link to="/editprofile/2">edit profile</Link>
    <h1>profile {props.match.params.id}</h1>
    </>
}