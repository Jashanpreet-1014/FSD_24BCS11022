import { createContext, use, useState } from 'react'
import Home from "./Home"
import './App.css'

export const UserContext=createContext();
function App(){
const user={
  Name:"Rahul Sharma",
  email:"rahul@gmail.com",
  location:"Chandigarh"
};

  return (
    <UserContext.Provider value={user}>
    {/* <Home user={user}/> */}
    <Home/>
    </UserContext.Provider>

  );
}

export default App;
