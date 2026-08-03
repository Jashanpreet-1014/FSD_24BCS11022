import { useContext } from "react";
import {UserContext} from "./App";
import UseUser from "./UseUser";

function UserInfo(){
    const user=UseUser();
    return(
        <div>


            {/* <p>name:{user.Name}</p>
            <p>email:{user.email} </p>
            <p>location : {user.location}</p> */}
            <p>name:{user.Name}</p>
            <p>email:{user.email} </p>
            <p>location : {user.location}</p>

        </div>

    );
}
export default UserInfo;