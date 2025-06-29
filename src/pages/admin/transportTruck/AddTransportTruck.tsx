import { useState } from 'react';

// Components
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type TransportTruckData } from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import CardPrimary from '../../../common/card/CardPrimary';

export default function AddTransportTruck() {
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

    const onClick = () => console.log('Add Transport Truck');

    return (
        <>
            <TopicOfPage text='เพิ่มรถขนสินค้า' />
            <CardPrimary>
                <BasicInformation
                    transportTruckData={transportTruckData}
                    onDataChange={handleSetTransportTruckData}
                />
                <ActionButtons actionText='เพิ่มรถขนสินค้า' onClick={onClick} />
            </CardPrimary>
        </>
    )
}
