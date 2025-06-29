import { useState } from 'react';

// Components
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import CardPrimary from '../../../common/card/CardPrimary';

export default function EditTransportTruck() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [maximumWeight, setMaximumWeight] = useState('');
    const [status, setStatus] = useState('');

    const onClick = () => console.log('Edit Transport Truck');

    console.log(id);

    return (
        <>
            <TopicOfPage text='แก้ไขรถขนสินค้า' />
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
                <ActionButtons onClick={onClick} />
            </CardPrimary>
        </>
    )
}
