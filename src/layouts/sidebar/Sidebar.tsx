import { useCallback, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSidebarDatas } from '../../store/reducer/sidebarSlice/SidebarSlice';

// Helper
// import { getUserFromCookie } from '../../helper/utils/common';

// Component
import SidebarRecursive from './SidebarRecursive';

// React Icon
import { GoGraph } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa6';
import { IoDocumentTextOutline, IoStorefrontOutline, IoCalendarOutline } from 'react-icons/io5';
import { PiWrench } from 'react-icons/pi';
import { LuClock8 } from 'react-icons/lu';
import { PiTruckLight, PiLockers } from 'react-icons/pi';
import { TbBuildingCommunity } from 'react-icons/tb';
import { MdOutlineCategory } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

// Type
import type { IconType } from 'react-icons/lib';
import type { AppDispatch, RootState } from '../../store/Store';

// const { is_admin } = getUserFromCookie();

type Node = {
    name: string;
    nodes?: Node[];
    reactIcon?: IconType;
    path?: string;
    relatePath?: string[];
    noSubMenu?: boolean;
    // noSubMenu ระบุให้เป็น true เฉพาะกรณีที่ 1. node ด้านนอกสุดเป็น empty array และ 2. node ด้านในมี relatePath นอกจาก 2 กรณีนี้ไม่ต้องกำหนด (ปล่อยให้เป็น undefined)
};

export default function Sidebar({ className }: { className?: string }) {
    const dashboardMenu: Node[] = [
        {
            name: 'Dashboard',
            nodes: [
                {
                    name: 'สินค้าที่กำลังผลิต',
                    reactIcon: FaMinus,
                    path: '/claim-history-lists',
                    relatePath: ['/claim-history-lists/edit'],
                    noSubMenu: true,
                },
                {
                    name: 'ยอดขายสินค้า',
                    reactIcon: FaMinus,
                    path: '/add-claim-history',
                    noSubMenu: true,
                },
                {
                    name: 'สินค้าขายดี',
                    reactIcon: FaMinus,
                    path: '/add-claim-history',
                    noSubMenu: true,
                },
                {
                    name: 'ส่งซ่อม / คืน / เปลี่ยน',
                    reactIcon: FaMinus,
                    path: '/add-claim-history',
                    noSubMenu: true,
                },
            ],
            reactIcon: GoGraph,
            relatePath: ['/', '/claim-history-lists', '/claim-history-lists/edit', '/add-claim-history'],
        },
    ];
    const customerOrderMenu: Node[] = [
        {
            name: 'ใบ PO',
            nodes: [
                {
                    name: 'ใบ PO ทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/purchase-order-list',
                    relatePath: ['/edit-purchase-order', '/preview-purchase-order', '/edit/verify-purchase-order'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มใบ PO',
                    reactIcon: FaMinus,
                    path: '/add-purchase-order',
                    relatePath: ['/add/verify-purchase-order'],
                    noSubMenu: true,
                },
            ],
            reactIcon: IoDocumentTextOutline,
            relatePath: ['/purchase-order-list', '/add-purchase-order', '/edit-purchase-order', '/preview-purchase-order', '/add/verify-purchase-order', '/edit/verify-purchase-order'],
        },
        {
            name: 'ส่งซ่อม / คืน / เปลี่ยน',
            nodes: [
                {
                    name: 'รายการส่งซ่อม / คืน / เปลี่ยน',
                    reactIcon: FaMinus,
                    path: '/claim-list',
                    relatePath: ['/edit-claim', '/preview-claim', '/edit/verify-claim'],
                    noSubMenu: true,
                },
                {
                    name: 'ส่งซ่อม / คืน / เปลี่ยน',
                    reactIcon: FaMinus,
                    path: '/add-claim',
                    relatePath: ['/add/verify-claim'],
                    noSubMenu: true,
                },
            ],
            reactIcon: PiWrench,
            relatePath: ['/claim-list', '/add-claim', '/edit-claim', '/preview-claim', '/add/verify-claim', '/edit/verify-claim'],
        },
    ];
    const logisticMenu: Node[] = [
        {
            name: 'ร้านค้า',
            nodes: [
                {
                    name: 'กทม และปริมณฑล',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-bangkok',
                },
                {
                    name: 'เหนือ',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-north',
                },
                {
                    name: 'อีสาน',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-northeast',
                },
                {
                    name: 'กลาง',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-central',
                },
                {
                    name: 'ตะวันออก',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-east',
                },
                {
                    name: 'ใต้',
                    reactIcon: FaMinus,
                    path: '/logistic-customer-south',
                },
            ],
            reactIcon: IoStorefrontOutline,
            relatePath: ['/logistic-customer-bangkok', '/logistic-customer-north', '/logistic-customer-northeast', '/logistic-customer-central', '/logistic-customer-east', '/logistic-customer-south'],
        },
        {
            name: 'ตารางจัดส่ง',
            reactIcon: IoCalendarOutline,
            path: '/logistic-plan',
            noSubMenu: true,
        },

    ];
    const productionMenu: Node[] = [
        {
            name: 'แผนการผลิต',
            reactIcon: LuClock8,
            path: '/dashboard',
            noSubMenu: true,
        },
    ];
    const adminMenu: Node[] = [
        {
            name: 'รถขนสินค้า',
            nodes: [
                {
                    name: 'รถขนสินค้าทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/transport-truck-list',
                    relatePath: ['/edit-transport-truck'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มรถขนสินค้า',
                    reactIcon: FaMinus,
                    path: '/add-transport-truck',
                },
            ],
            reactIcon: PiTruckLight,
            relatePath: ['/transport-truck-list', '/add-transport-truck', '/edit-transport-truck'],
        },
        {
            name: 'กลุ่มร้านค้า',
            nodes: [
                {
                    name: 'กลุ่มร้านค้าทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/customer-group-list',
                    relatePath: ['/edit-customer-group'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มกลุ่มร้านค้า',
                    reactIcon: FaMinus,
                    path: '/add-customer-group',
                },
            ],
            reactIcon: TbBuildingCommunity,
            relatePath: ['/customer-group-list', '/add-customer-group', '/edit-customer-group'],
        },
        {
            name: 'ร้านค้าในระบบ',
            nodes: [
                {
                    name: 'ร้านค้าในระบบทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/customer-list',
                    relatePath: ['/edit-customer'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มร้านค้าในระบบ',
                    reactIcon: FaMinus,
                    path: '/add-customer',
                },
            ],
            reactIcon: IoStorefrontOutline,
            relatePath: ['/customer-list', '/add-customer', '/edit-customer'],
        },
        {
            name: 'ประเภทสินค้า',
            nodes: [
                {
                    name: 'ประเภทสินค้าทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/product-type-list',
                    relatePath: ['/edit-product-type'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มประเภทสินค้า',
                    reactIcon: FaMinus,
                    path: '/add-product-type',
                },
            ],
            reactIcon: MdOutlineCategory,
            relatePath: ['/product-type-list', '/add-product-type', '/edit-product-type'],
        },
        {
            name: 'ประเภทสินค้าย่อย',
            nodes: [
                {
                    name: 'ประเภทสินค้าย่อยทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/product-subtype-list',
                    relatePath: ['/edit-product-subtype'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มประเภทสินค้าย่อย',
                    reactIcon: FaMinus,
                    path: '/add-product-subtype',
                },
            ],
            reactIcon: BiCategoryAlt,
            relatePath: ['/product-subtype-list', '/add-product-subtype', '/edit-product-subtype'],
        },
        {
            name: 'รายการสินค้า',
            nodes: [
                {
                    name: 'รายการสินค้าทั้งหมด',
                    reactIcon: FaMinus,
                    path: '/product-list',
                    relatePath: ['/edit-product'],
                    noSubMenu: true,
                },
                {
                    name: 'เพิ่มรายการสินค้า',
                    reactIcon: FaMinus,
                    path: '/add-product',
                },
            ],
            reactIcon: PiLockers,
            relatePath: ['/product-list', '/add-product', '/edit-product'],
        },
    ];
    const approveMenu: Node[] = [
        {
            name: 'ร้านค้า AP',
            nodes: [
                {
                    name: 'กทม และปริมณฑล',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
                {
                    name: 'เหนือ',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
                {
                    name: 'อีสาน',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
                {
                    name: 'กลาง',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
                {
                    name: 'ตะวันออก',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
                {
                    name: 'ใต้',
                    reactIcon: FaMinus,
                    path: '/work-order-lists',
                    relatePath: ['/preview-work-order', '/work-order-lists/edit'],
                },
            ],
            reactIcon: IoStorefrontOutline,
            relatePath: ['/work-order-lists', '/work-order-lists/edit', '/preview-work-order', '/create-work-order'],
        },
        {
            name: 'แผนการผลิต AP',
            reactIcon: LuClock8,
            path: '/dashboard',
            noSubMenu: true,
        },

    ];
    const othersMenu: Node[] = [
        {
            name: 'Logout',
            nodes: [],
            reactIcon: FiLogOut,
            path: '/login',
            noSubMenu: true,
        },
    ];

    const dispatch = useDispatch<AppDispatch>();
    const sideBarRef = useRef<HTMLDivElement | null>(null);
    const { isSidebarOpen } = useSelector((state: RootState) => state.sidebarDataStateValue);

    const handleClickOutsideSideBar = useCallback((event: MouseEvent) => {
        if (!sideBarRef.current) return;

        const dialogDimensions = sideBarRef.current.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            if (isSidebarOpen) dispatch(setSidebarDatas({ value: false, variableName: 'isSidebarOpen' }))

        }
    }, [isSidebarOpen, dispatch]); // ถ้าไม่ใส่ isOpen เอาไว้ ตัว function จะใช้ค่า isOpen = false เสมอเพราะว่าไม่ได้ regenerate ใหม่ถึงแม้ว่า isOpen จะอัพเดทค่าเป็น true แล้วก็ตาม | แต่ sideBarRef และ isClickingRef ไม่ใส่ก็อัพเดทค่าใหม่ตลอด ---> เดาได้ 2 กรณี: 1. ใน useCallback ค่าของตัวแปรไม่อัพเดทถ้าตัวแปรนั้นมาจาก useState 2. ใน useCallback ค่าของ useRef จะอัพเดทอัตโนมัติเสมอ

    useEffect(() => {
        if (isSidebarOpen) document.addEventListener('click', handleClickOutsideSideBar);
        else document.removeEventListener('click', handleClickOutsideSideBar);

        return () => {
            document.removeEventListener('click', handleClickOutsideSideBar);
        };
    }, [isSidebarOpen]);

    return (
        <div ref={sideBarRef} className={`w-[370px] bg-veryLightGrey dark:bg-tertiaryBlack min-h-sidebarHeight ${className}`}>
            <div className='sticky top-0.5 max-h-sidebarHeight overflow-auto hide-scrollbar'>
                {/* {is_admin && (
                )} */}
                <SidebarRecursive nodes={dashboardMenu} />

                <div className='pl-4 pt-3 text-themeColor'>Customer Order</div>
                <SidebarRecursive nodes={customerOrderMenu} />

                <div className='pl-4 pt-3 text-themeColor'>Logistic</div>
                <SidebarRecursive nodes={logisticMenu} />

                <div className='pl-4 pt-3 text-themeColor'>Production</div>
                <SidebarRecursive nodes={productionMenu} />

                <div className='pl-4 pt-3 text-themeColor'>Admin</div>
                <SidebarRecursive nodes={adminMenu} />

                <div className='pl-4 pt-3 text-themeColor'>Approve</div>
                <SidebarRecursive nodes={approveMenu} />

                <div className='pl-4 pt-3 opacity-0 select-none'>Hidden</div>
                <SidebarRecursive nodes={othersMenu} />
            </div>
        </div>
    )
}
