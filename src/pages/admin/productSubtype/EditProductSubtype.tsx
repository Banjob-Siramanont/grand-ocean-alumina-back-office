import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import type { ProductSubtypeData } from './components/BasicInformation';

export default function EditProductSubtype() {

    const [productSubtypeData, setProductSubtypeData] = useState<ProductSubtypeData>({
        selectedType: '',
        productSubtypeName: '',
    });

    const handleSetProductSubtypeData = (key: string, value: string) => {
        setProductSubtypeData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='แก้ไขประเภทสินค้าย่อย' />
            <CardPrimary>
                <BasicInformation
                    productSubtypeData={productSubtypeData}
                    onDataChange={handleSetProductSubtypeData}
                />
                <ActionButtons onClick={() => console.log('Edit Product Subtype')} />
            </CardPrimary>
        </>
    )
}
