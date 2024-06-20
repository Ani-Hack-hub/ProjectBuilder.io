import { useState } from 'react';
import './App.css';
import './query.css';
import Homepage from './Pages/Homepage'
import IndView from './Pages/IndView';
import About from './Pages/About'
import Login_Reg from './Pages/Login_Reg'
import PrevQuery from './Pages/PrevQuery'
import ThankYou from './Pages/ThankYou'
import Queryinp from './Pages/Queryinp';
import UserProfile from './Pages/UserProfile'
import {Router, createBrowserRouter} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    {
      "path":"/",
      "element":<Homepage></Homepage>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/query",
      element:<Queryinp></Queryinp>
    },
    {
      path:"/submission",
      element:<ThankYou></ThankYou>
    },
    {
      path:"/user",
      element:<UserProfile></UserProfile>
    },
    {
      path:"/user/loginReg",
      element:<Login_Reg></Login_Reg>
    },
    {
      path:"/query/indview",
      element:<IndView></IndView>
    },
    {
      path:'/user/previous',
      element:<Queryinp></Queryinp>
    }
  )
  return <Router route={router}></Router>
}

export default App;
