import { Routes, Route } from 'react-router-dom';
import type { RootState } from '../store/Store';
import { useSelector } from 'react-redux';
// import AuthOutlet from '@auth-kit/react-router/AuthOutlet'


import Login from '../pages/login/Login';
import Example from '../pages/Example';
import Header from '../layouts/header/Header';
import Sidebar from '../layouts/sidebar/Sidebar';

export default function Router() {

    const { isSidebarOpen } = useSelector((state: RootState) => state.sidebarDataStateValue);

    return (
        <div className='relative'>
            <Header />
            <div className='grid grid-cols-1 relative'>
                <Sidebar
                    className={`
                        absolute z-1000 top-0 bottom-0 transition-all duration-500 ease-in-out
                        ${isSidebarOpen ? ' left-0' : '-left-[370px]'}
                    `}
                />
                <div className='w-full p-5 min-w-0'>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Example />} />
                        {/*
                            <Route element={<AuthOutlet fallbackPath='/login' />}>
                            </Route>
                        */}
                    </Routes>
                </div>
            </div>
        </div>
    )
}