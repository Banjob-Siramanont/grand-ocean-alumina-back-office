import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type BasicInformationData } from './components/BasicInformation';
import ShippingDestination from './components/ShippingDestination';
import ActionButtons from '../../components/ActionButtons';

export default function AddCustomer() {

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

    const [shippingDestinationData, setShippingDestinationData] = useState({
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
            <TopicOfPage text='เพิ่มร้านค้า' />
            <CardPrimary>
                <BasicInformation
                    basicInformationData={basicInformationData}
                    onDataChange={handleSetBasicInformationData}
                />
                <ShippingDestination
                    shippingDestinationData={shippingDestinationData}
                    onDataChange={handleSetShippingDestinationData}
                />
                <ActionButtons actionText='เพิ่มร้านค้า' onClick={() => console.log('Add Customer')} />
            </CardPrimary>
        </>
    )
}
