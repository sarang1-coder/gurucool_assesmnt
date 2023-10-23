import React,{useState,useEffect} from 'react';
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';



function App() {

  const [username,setuserName]=useState();


  useEffect(()=>{
    const data={
      name:'USER'
    }
    setuserName(data.name);
  },[])


  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:username,setuserName}}>
        <Outlet/>
      </UserContext.Provider>
    </Provider>
    </>
  );
}

export default App;