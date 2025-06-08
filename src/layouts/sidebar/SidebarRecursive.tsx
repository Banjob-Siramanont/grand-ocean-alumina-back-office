import Swal from 'sweetalert2';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSidebarDatas } from '../../store/reducer/sidebarSlice/SidebarSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';

import type { AppDispatch } from '../../store/Store';
import type { IconType } from 'react-icons/lib';

type Node = {
    name: string,
    nodes?: Node[],
    reactIcon?: IconType,
    path?: string,
    relatePath?: string[],
    noSubMenu?: boolean,
};

type SidebarProps = {
    nodes: Node[];
};

export default function SidebarRecursive({ nodes }: SidebarProps) {

    return (
        <div>
            <ul className='py-1 px-2.5'>
                {nodes.map(node => (
                    <FileSystemItem node={node} key={node.name} parentRelatePath={node.relatePath} />
                ))}
            </ul>
        </div>
    )
}

function FileSystemItem({ node, parentRelatePath }: { node: Node; parentRelatePath?: string[] }) {

    const signOut = useSignOut();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const currentLocation: string = location.pathname;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const getStoredState = () => {
        const stored = sessionStorage.getItem('openNodes');
        return stored ? JSON.parse(stored) : {};
    };

    const saveState = (updatedState: Record<string, boolean>) => {
        sessionStorage.setItem('openNodes', JSON.stringify(updatedState));
    };

    useEffect(() => {
        // Get the open state from the stored object for this node
        const storedState = getStoredState();
        if (storedState[node.name] !== undefined) {
            setIsOpen(storedState[node.name]);
        }
    }, [node.name]);

    const toggleNode = () => {
        setIsOpen(previous => {
            const newState = !previous;
            const storedState = getStoredState();
            storedState[node.name] = newState;
            saveState(storedState);
            return newState;
        });
    };

    const handleSubNodeOnClick = (path: string) => {
        if (path === '/login') {
            Swal.fire({
                title: 'ออกจากระบบ',
                text: '',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: 'var(--color-orange)',
                confirmButtonText: 'ใช่',
                cancelButtonColor: 'var(--color-alarmRed)',
                cancelButtonText: 'ไม่ใช่',
            }).then(result => {
                if (result.isConfirmed) {
                    signOut();
                    navigate(path);
                }
            });
        }
        if (path !== '/login') {
            navigate(path);
            dispatch(setSidebarDatas({ value: false, variableName: 'isSidebarOpen' }))
        }
    };

    return (
        <li
            className={`
                rounded-md mt-1 hover:text-black hover:bg-white dark:hover:bg-secondaryBlack dark:hover:text-white transition-colors duration-200
                ${node.relatePath?.includes(currentLocation) ?
                    'bg-white border border-lightGrey dark:bg-secondaryBlack dark:border-oceanGrey dark:text-white' :
                    'text-grey dark:text-oceanGrey'
                }
            `}
            key={node.name}
        >
            <span className='flex items-center gap-1.5'>
                {(node.nodes && node.nodes.length > 0) && (
                    <button className='w-full rounded-md' onClick={toggleNode}>
                        <div className='flex justify-between items-center pl-[30px] pr-2 py-1.5'>
                            <div className='flex justify-start items-center gap-x-2'>
                                {node.reactIcon && (<node.reactIcon />)}
                                {node.name}
                            </div>
                            <IoChevronDown className={`text-sm ${isOpen ? 'rotate-180' : ''} transition-transform duration-[400ms]`} />
                        </div>
                    </button>
                )}

                {node.path && (
                    <button
                        className={`
                            w-full rounded-md hover:text-themeColor transition-colors duration-200
                            ${node.path === currentLocation && node.noSubMenu ? 'bg-white dark:bg-secondaryBlack' : ''}
                            ${node.path === currentLocation ?
                                'text-themeColor' :
                                parentRelatePath?.includes(currentLocation) ? 'text-black dark:text-white' : 'text-grey dark:text-oceanGrey'
                            }
                        `}
                        onClick={() => handleSubNodeOnClick(node.path!)} // สัญลักษณ์ ! ข้างหลัง ใช้เพื่อบอก typescript ว่าตรงนี้ไม่ใช่ undefined แน่นอน (ป้องกัน typescript error)
                    >
                        <div className='flex justify-start items-center gap-x-2 pl-[30px] py-1.5'>
                            {node.reactIcon && (<node.reactIcon />)}
                            {node.name}
                        </div>
                    </button>
                )}
            </span>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                        className='overflow-auto flex flex-col justify-end pl-6 pb-1'
                    >
                        {node.nodes?.map(node => (
                            <FileSystemItem
                                node={node}
                                key={node.name}
                                parentRelatePath={parentRelatePath}
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    )
}