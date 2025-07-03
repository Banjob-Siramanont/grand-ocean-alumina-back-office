import { useSelector } from 'react-redux';

// Components
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ProductList from './components/ProductList';
import SpecialProductList from './components/SpecialProductList';

// Types
import type { RootState } from '../../../store/Store';
import ActionButtons from '../../components/ActionButtons';
import { useNavigate } from 'react-router-dom';

export default function AddPurchaseOrder() {

    const navigate = useNavigate();

    const {
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
        productDatas,
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

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
            <TopicOfPage text='เพิ่มใบ PO' />
            <CardPrimary>
                <BasicInformation />
                <ProductList />
                <SpecialProductList />
                <ActionButtons actionText='ถัดไป' onClick={() => navigate('/add/verify-purchase-order')} />
            </CardPrimary>

        </>
    )
}

