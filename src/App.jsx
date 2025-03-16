import * as React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
       <Header/>
          <Routes>
            <Route index={true} path='/' element={<Dashboard />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/log-in" element={<LogIn/>} />
            <Route path="/register" element={<SignUp/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
