import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';

export default function EditProductType() {

    const [name, setName] = useState<string>('');

    return (
        <>
            <TopicOfPage text='แก้ไขประเภทสินค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                />
                <ActionButtons onClick={() => console.log('Edit Product Type')} />
            </CardPrimary>
        </>
    )
}
