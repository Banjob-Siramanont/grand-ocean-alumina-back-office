import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import ActionButtons from '../../components/ActionButtons';
import BasicInformation from './components/BasicInformation';

export default function AddProductCategory() {

    const [name, setName] = useState<string>('');

    return (
        <>
            <TopicOfPage text='เพิ่มประเภทสินค้า' />
            <CardPrimary>
                <BasicInformation
                    name={name}
                    setName={setName}
                />
                <ActionButtons actionText='เพิ่มประเภทสินค้า' onClick={() => console.log('Add Product Category')} />
            </CardPrimary>
        </>
    )
}
