import { useSelector } from 'react-redux';

// Components
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ProductList from './components/ProductList';

// Types
import type { RootState } from '../../../store/Store';

export default function AddPurchaseOrder() {

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
            </CardPrimary>

        </>
    )
}

