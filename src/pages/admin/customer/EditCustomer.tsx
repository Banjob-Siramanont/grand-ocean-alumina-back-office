import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type BasicInformationData } from './components/BasicInformation';
import ShippingDestination, { type ShippingDestinationData } from './components/ShippingDestination';
import ActionButtons from '../../components/ActionButtons';

export default function EditCustomer() {

    const [basicInformationData, setBasicInformationData] = useState<BasicInformationData>({
        name: '',
        branch: '',
        selectedType: '',
        selectedCustomerGroup: '',
        selectedRegion: '',
        displacement: '',
        selectedPrice: 0,
    });
    const handleSetBasicInformationData = (key: string, value: string | number) => {
        setBasicInformationData(prev => ({ ...prev, [key]: value }));
    };

    const [shippingDestinationData, setShippingDestinationData] = useState<ShippingDestinationData>({
        selectedShippingRegion: '',
        selectedShippingProvince: '',
        selectedShippingType: '',
        shippingAddress: '',
    });
    const handleSetShippingDestinationData = (key: string, value: string | number) => {
        setShippingDestinationData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='แก้ไขร้านค้าในระบบ' />
            <CardPrimary>
                <BasicInformation
                    basicInformationData={basicInformationData}
                    onDataChange={handleSetBasicInformationData}
                />
                <ShippingDestination
                    shippingDestinationData={shippingDestinationData}
                    onDataChange={handleSetShippingDestinationData}
                />
                <ActionButtons onClick={() => console.log('Edit Customer')} />
            </CardPrimary>
        </>
    )
}
