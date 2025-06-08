import { useCallback } from 'react';
import { type AppDispatch, type RootState } from '../../store/Store';
import { setSidebarDatas } from '../../store/reducer/sidebarSlice/SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';

// Component
import Theme from './components/Theme';

export default function Header() {

    const { isSidebarOpen } = useSelector((state: RootState) => state.sidebarDataStateValue);
    const dispatch = useDispatch<AppDispatch>();

    const handleHamburgerOnClick = useCallback(() => {
        setTimeout(() => {
            dispatch(setSidebarDatas({ value: !isSidebarOpen, variableName: 'isSidebarOpen' }));
        }, 100);
    }, [isSidebarOpen, dispatch]);

    return (
        <div className='shadow bg-white h-headerHeight dark:shadow-lg dark:bg-primaryBlack flex justify-between items-center px-4 sticky top-0 z-200'>
            <div className='clickable'>
                <div
                    onClick={() => handleHamburgerOnClick()}
                    className='flex flex-col cursor-pointer gap-1.5 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-black'
                >
                    <span className='block w-6 h-0.5 bg-themeColor'></span>
                    <span className='block w-6 h-0.5 bg-themeColor'></span>
                    <span className='block w-6 h-0.5 bg-themeColor'></span>
                </div>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <img src={logo} alt='grand ocean alumina' className='w-10' />
                <div className='text-themeColor'>Grand Ocean Alumina</div>
            </div>
            <div className='flex justify-end items-center gap-x-3'>
                <Theme className='cursor-pointer' />
            </div>
        </div>
    )
}