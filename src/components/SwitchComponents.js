import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserDelete from './UserDelete'
import UserUpdate from '../pages/UserUpdate'
import UserAdd from '../pages/AddUser'


export default function SwitchComponents() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/update/:id" element={<UserUpdate />} />
                <Route path="/add" element={<UserAdd />} />
                <Route path="/delete/:id" element={<UserDelete />} />
            </Routes>
        </div>
    )
}
