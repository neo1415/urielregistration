import React,{useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './Components/FirebaseConfig/Admin/Login/Login';
import Home from './Components/pages/Home';
import AdminHome from './Components/FirebaseConfig/Admin/AdminHome';
import SingleUser from './Components/FirebaseConfig/Admin/Singleuser/SingleUser';
import { AuthContext } from './Components/FirebaseConfig/Context/AuthContext';
import Reg from './Components/pages/Reg';
import ExecReg from './Components/pages/ExecReg';
import './App.css'

const App = () => {
  const {currentUser} = useContext(AuthContext)
  const RequireAuth= ({children})=>{
    return currentUser ? (children) : <Navigate to={'/Login'} />
  }
  return (
    <div className='app'>
      <Routes >
          <Route exact path="/"
           element = {<Home />} />
          <Route exact path="registration"
           element = {<Reg />} />
            <Route exact path="executive-registration"
           element = {<ExecReg />} />
          <Route exact path="/login"
           element = {<Login />} />
          <Route exact path="/adminHome">
            <Route index element = { <RequireAuth> <AdminHome /> </RequireAuth> } />
            <Route path='/adminHome/:id' element = {<RequireAuth ><SingleUser /></RequireAuth>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App