import { useContext } from "react";
import { UserContext } from "./App";

function UseUser(){
    return useContext(UserContext);
}
export default UseUser;