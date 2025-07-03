import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ProductList from './components/ProductList';
import SpecialProductList from './components/SpecialProductList';
import ActionButtons from '../../components/ActionButtons';

// Types
import type { RootState } from '../../../store/Store';
import { useEffect } from 'react';

export default function EditPurchaseOrder() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const {
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
        productDatas,
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(`call api with ID: ${id}`);
    }, []);

    console.log({
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
        productDatas,
    });

    return (
        <>
            <TopicOfPage text='แก้ไขข้อมูลใบ PO' />
            <CardPrimary>
                <BasicInformation />
                <ProductList />
                <SpecialProductList />
                <ActionButtons actionText='ถัดไป' onClick={() => navigate(`/edit/verify-purchase-order?id=${id}`)} />
            </CardPrimary>

        </>
    )
}

