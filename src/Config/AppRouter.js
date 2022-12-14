import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from '../Screens/Dashboard';
import Home from '../Screens/Home';


function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='dashboard/*' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default AppRouter