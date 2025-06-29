import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import ActionButtons from '../../components/ActionButtons';
import BasicInformation from './components/BasicInformation';

export default function EditCustomerGroup() {

    const [name, setName] = useState<string>('');
    const [characteristic, setCharacteristic] = useState<string>('');

    return (
        <>
            <TopicOfPage text='แก้ไขกลุ่มร้านค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                    characteristic={characteristic}
                    setCharacteristic={setCharacteristic}
                />
                <ActionButtons onClick={() => console.log('แก้ไขกลุ่มร้านค้า')} />
            </CardPrimary>
        </>
    )
}
