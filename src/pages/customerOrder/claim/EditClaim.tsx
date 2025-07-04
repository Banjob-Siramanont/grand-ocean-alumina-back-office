import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Components
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import RepairProductList from './components/RepairProductList';
import ReturnProductList from './components/ReturnProductList';
import ReplaceProductList from './components/ReplaceProductList';

// Types
import type { RootState } from '../../../store/Store';

export default function EditClaim() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const {
        selectedCustomerCompany,
        poNumber,
        invoiceNumber,
        shippingDate,
        shippingAddress,
    } = useSelector((state: RootState) => state.claimDataStateValue);

    useEffect(() => {
        console.log(`call api with ID: ${id}`);
    }, []);

    console.log({
        selectedCustomerCompany,
        poNumber,
        invoiceNumber,
        shippingDate,
        shippingAddress,
    });

    return (
        <>
            <TopicOfPage text='แก้ไขข้อมูลส่งซ่อม / คืน / เปลี่ยน' />
            <CardPrimary>
                <BasicInformation />
                <RepairProductList />
                <ReturnProductList />
                <ReplaceProductList />
            </CardPrimary>
        </>
    )
}

