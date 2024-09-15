import React from "react";
import { Routes, Route } from 'react-router'

import Home from './components/home/Home'
import UserCrud from "./components/user/userCrud";

const Rotas = props => 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
    </Routes>

export default Rotas