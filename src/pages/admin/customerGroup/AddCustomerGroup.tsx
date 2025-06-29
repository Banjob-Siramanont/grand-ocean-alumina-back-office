import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import ActionButtons from '../../components/ActionButtons';
import BasicInformation from './components/BasicInformation';

export default function AddCustomerGroup() {

    const [name, setName] = useState<string>('');
    const [characteristic, setCharacteristic] = useState<string>('');

    return (
        <>
            <TopicOfPage text='เพิ่มกลุ่มร้านค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                    characteristic={characteristic}
                    setCharacteristic={setCharacteristic}
                />
                <ActionButtons actionText='เพิ่มกลุ่มร้านค้า' onClick={() => console.log('เพิ่มกลุ่มร้านค้า')} />
            </CardPrimary>
        </>
    )
}
