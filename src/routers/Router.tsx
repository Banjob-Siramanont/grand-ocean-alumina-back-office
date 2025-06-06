import { Routes, Route } from 'react-router-dom';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Login from '../pages/login/Login';
import Example from '../pages/Example';

export default function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<AuthOutlet fallbackPath='/login' />}>
                <Route path='/' element={<Example />} />
            </Route>
        </Routes>
    )
}