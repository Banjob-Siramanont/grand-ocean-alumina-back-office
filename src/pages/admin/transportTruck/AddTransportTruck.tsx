import { useState } from 'react';

// Components
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import CardPrimary from '../../../common/card/CardPrimary';

export default function AddTransportTruck() {
    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [maximumWeight, setMaximumWeight] = useState('');
    const [status, setStatus] = useState('');

    const onClick = () => console.log('Add Transport Truck');

    return (
        <>
            <TopicOfPage text='เพิ่มรถขนสินค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    selectedType={selectedType}
                    licensePlate={licensePlate}
                    maximumWeight={maximumWeight}
                    status={status}
                    setName={setName}
                    setSelectedType={setSelectedType}
                    setLicensePlate={setLicensePlate}
                    setMaximumWeight={setMaximumWeight}
                    setStatus={setStatus}
                />
                <ActionButtons actionText='เพิ่มรถขนสินค้า' onClick={onClick} />
            </CardPrimary>
        </>
    )
}
