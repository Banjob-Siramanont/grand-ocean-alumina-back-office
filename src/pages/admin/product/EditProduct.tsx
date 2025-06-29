import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type ProductData } from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';

export default function EditProduct() {

    const [productData, setProductData] = useState<ProductData>({
        id: '',
        productName: '',
        productUnit: '',
        productWeight: '',
        selectedProductType: '',
        selectedProductSubtype: '',
        selectedProductionLine: '',
        selectedCustomerGroup: '',
        productPrice: ''
    });

    const handleSetProductData = (key: keyof ProductData, value: string | number) => {
        setProductData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='แก้ไขรายการสินค้า' />
            <CardPrimary>
                <BasicInformation
                    productData={productData}
                    onDataChange={handleSetProductData}
                />
                <ActionButtons onClick={() => console.log('Edit Product', productData)} />
            </CardPrimary>
        </>
    )
}
