import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import type { ProductSubtypeData } from './components/BasicInformation';

export default function AddProductSubtype() {

    const [productSubtypeData, setProductSubtypeData] = useState<ProductSubtypeData>({
        selectedType: '',
        productSubtypeName: '',
    });

    const handleSetProductSubtypeData = (key: string, value: string) => {
        setProductSubtypeData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='เพิ่มประเภทสินค้าย่อย' />
            <CardPrimary>
                <BasicInformation
                    productSubtypeData={productSubtypeData}
                    onDataChange={handleSetProductSubtypeData}
                />
                <ActionButtons actionText='เพิ่มประเภทสินค้าย่อย' onClick={() => console.log('Add Product Subtype')} />
            </CardPrimary>
        </>
    )
}
