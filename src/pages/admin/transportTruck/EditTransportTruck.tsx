import { useState } from 'react';

// Components
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type TransportTruckData } from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import CardPrimary from '../../../common/card/CardPrimary';

export default function EditTransportTruck() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [transportTruckData, setTransportTruckData] = useState<TransportTruckData>({
        name: '',
        selectedType: '',
        licensePlate: '',
        maximumWeight: '',
        status: '',
    });
    const handleSetTransportTruckData = (key: string, value: string) => {
        setTransportTruckData(prev => ({ ...prev, [key]: value }));
    };

    const onClick = () => console.log('Edit Transport Truck');

    console.log(id);

    return (
        <>
            <TopicOfPage text='แก้ไขรถขนสินค้า' />
            <CardPrimary>
                <BasicInformation
                    transportTruckData={transportTruckData}
                    onDataChange={handleSetTransportTruckData}
                />
                <ActionButtons onClick={onClick} />
            </CardPrimary>
        </>
    )
}
