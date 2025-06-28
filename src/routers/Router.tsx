import { Routes, Route } from 'react-router-dom';
import type { RootState } from '../store/Store';
import { useSelector } from 'react-redux';
// import AuthOutlet from '@auth-kit/react-router/AuthOutlet'

import Login from '../pages/login/Login';
import Example from '../pages/Example';
import Header from '../layouts/header/Header';
import Sidebar from '../layouts/sidebar/Sidebar';

// Customer Order
import PurchaseOrderList from '../pages/customerOrder/purchaseOrder/PurchaseOrderList';
import AddPurchaseOrder from '../pages/customerOrder/purchaseOrder/AddPurchaseOrder';
import EditPurchaseOrder from '../pages/customerOrder/purchaseOrder/EditPurchaseOrder';
import PreviewPurchaseOrder from '../pages/customerOrder/purchaseOrder/PreviewPurchaseOrder';
import VerifyPurchaseOrder from '../pages/customerOrder/purchaseOrder/VerifyPurchaseOrder';
import ClaimList from '../pages/customerOrder/claim/ClaimList';
import AddClaim from '../pages/customerOrder/claim/AddClaim';
import EditClaim from '../pages/customerOrder/claim/EditClaim';
import PreviewClaim from '../pages/customerOrder/claim/PreviewClaim';
import VerifyClaim from '../pages/customerOrder/claim/VerifyClaim';

// Logistic
import South from '../pages/logistic/customer/South';
import East from '../pages/logistic/customer/East';
import Bangkok from '../pages/logistic/customer/Bangkok';
import Central from '../pages/logistic/customer/Central';
import North from '../pages/logistic/customer/North';
import Northeast from '../pages/logistic/customer/Northeast';
import LogisticPlan from '../pages/logistic/logisticPlan/LogisticPlan';

// Production
import ProductionPlan from '../pages/production/productionPlan/ProductionPlan';

// Admin Transport Truck
import AddTransportTruck from '../pages/admin/transportTruck/AddTransportTruck';
import EditTransportTruck from '../pages/admin/transportTruck/EditTransportTruck';
import TransportTruckList from '../pages/admin/transportTruck/TransportTruckList';

// Admin Customer Group
import AddCustomerGroup from '../pages/admin/customerGroup/AddCustomerGroup';
import EditCustomerGroup from '../pages/admin/customerGroup/EditCustomerGroup';
import CustomerGroupList from '../pages/admin/customerGroup/CustomerGroupList';

// Admin Customer
import AddCustomer from '../pages/admin/customer/AddCustomer';
import EditCustomer from '../pages/admin/customer/EditCustomer';
import CustomerList from '../pages/admin/customer/CustomerList';

// Admin Product Type
import AddProductType from '../pages/admin/productType/AddProductType';
import EditProductType from '../pages/admin/productType/EditProductType';
import ProductTypeList from '../pages/admin/productType/ProductTypeList';

// Admin Product Subtype
import AddProductSubtype from '../pages/admin/productSubtype/AddProductSubtype';
import EditProductSubtype from '../pages/admin/productSubtype/EditProductSubtype';
import ProductSubtypeList from '../pages/admin/productSubtype/ProductSubtypeList';

// Admin Product
import AddProduct from '../pages/admin/product/AddProduct';
import EditProduct from '../pages/admin/product/EditProduct';
import ProductList from '../pages/admin/product/ProductList';

// Approve
import EastAP from '../pages/approve/customer/EastAP';
import CentralAP from '../pages/approve/customer/CentralAP';
import BangkokAP from '../pages/approve/customer/BangkokAP';
import NorthAP from '../pages/approve/customer/NorthAP';
import SouthAP from '../pages/approve/customer/SouthAP';
import NortheastAP from '../pages/approve/customer/NortheastAP';
import ProductionPlanWaitingList from '../pages/approve/productionPlanAP/ProductionPlanWaitingList';
import ProductionPlanConfirm from '../pages/approve/productionPlanAP/ProductionPlanConfirm';

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
                        {/* Customer Order */}
                        <Route path='/purchase-order-list' element={<PurchaseOrderList />} />
                        <Route path='/add-purchase-order' element={<AddPurchaseOrder />} />
                        <Route path='/edit-purchase-order' element={<EditPurchaseOrder />} />
                        <Route path='/preview-purchase-order' element={<PreviewPurchaseOrder />} />
                        <Route path='/add/verify-purchase-order' element={<VerifyPurchaseOrder />} />
                        <Route path='/edit/verify-purchase-order' element={<VerifyPurchaseOrder />} />

                        <Route path='/claim-list' element={<ClaimList />} />
                        <Route path='/add-claim' element={<AddClaim />} />
                        <Route path='/edit-claim' element={<EditClaim />} />
                        <Route path='/preview-claim' element={<PreviewClaim />} />
                        <Route path='/add/verify-claim' element={<VerifyClaim />} />
                        <Route path='/edit/verify-claim' element={<VerifyClaim />} />

                        {/* Logistic */}
                        <Route path='/logistic-customer-bangkok' element={<Bangkok />} />
                        <Route path='/logistic-customer-central' element={<Central />} />
                        <Route path='/logistic-customer-north' element={<North />} />
                        <Route path='/logistic-customer-northeast' element={<Northeast />} />
                        <Route path='/logistic-customer-east' element={<East />} />
                        <Route path='/logistic-customer-south' element={<South />} />
                        <Route path='/logistic-plan' element={<LogisticPlan />} />

                        {/* Production */}
                        <Route path='/production-plan' element={<ProductionPlan />} />

                        {/* Admin */}
                        <Route path='/add-transport-truck' element={<AddTransportTruck />} />
                        <Route path='/edit-transport-truck' element={<EditTransportTruck />} />
                        <Route path='/transport-truck-list' element={<TransportTruckList />} />

                        <Route path='/add-customer-group' element={<AddCustomerGroup />} />
                        <Route path='/edit-customer-group' element={<EditCustomerGroup />} />
                        <Route path='/customer-group-list' element={<CustomerGroupList />} />

                        <Route path='/add-customer' element={<AddCustomer />} />
                        <Route path='/edit-customer' element={<EditCustomer />} />
                        <Route path='/customer-list' element={<CustomerList />} />

                        <Route path='/add-product-type' element={<AddProductType />} />
                        <Route path='/edit-product-type' element={<EditProductType />} />
                        <Route path='/product-type-list' element={<ProductTypeList />} />

                        <Route path='/add-product-subtype' element={<AddProductSubtype />} />
                        <Route path='/edit-product-subtype' element={<EditProductSubtype />} />
                        <Route path='/product-subtype-list' element={<ProductSubtypeList />} />

                        <Route path='/add-product' element={<AddProduct />} />
                        <Route path='/edit-product' element={<EditProduct />} />
                        <Route path='/product-list' element={<ProductList />} />

                        {/* Approve */}
                        <Route path='/approve-customer/bangkok' element={<BangkokAP />} />
                        <Route path='/approve-customer/east' element={<EastAP />} />
                        <Route path='/approve-customer/central' element={<CentralAP />} />
                        <Route path='/approve-customer/north' element={<NorthAP />} />
                        <Route path='/approve-customer/south' element={<SouthAP />} />
                        <Route path='/approve-customer/northeast' element={<NortheastAP />} />

                        <Route path='/production-plan-waiting-list' element={<ProductionPlanWaitingList />} />
                        <Route path='/production-plan-confirm' element={<ProductionPlanConfirm />} />

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