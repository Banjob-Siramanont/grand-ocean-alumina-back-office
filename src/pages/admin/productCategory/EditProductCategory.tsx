import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

import ActionButtons from '../../components/ActionButtons';
import BasicInformation from './components/BasicInformation';

export default function EditProductCategory() {

    const [name, setName] = useState<string>('');

    return (
        <>
            <TopicOfPage text='แก้ไขประเภทสินค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                />
                <ActionButtons onClick={() => console.log('Edit Product Category')} />
            </CardPrimary>
        </>
    )
}
