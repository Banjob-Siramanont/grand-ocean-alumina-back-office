import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';

export default function AddProductType() {

    const [name, setName] = useState<string>('');

    return (
        <>
            <TopicOfPage text='เพิ่มประเภทสินค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                />
                <ActionButtons actionText='เพิ่มประเภทสินค้า' onClick={() => console.log('Add Product Type')} />
            </CardPrimary>
        </>
    )
}
