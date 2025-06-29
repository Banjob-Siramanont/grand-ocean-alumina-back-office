import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type ProductData } from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';
import UploadExcel from './components/UploadExcel';

export default function AddProduct() {

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
            <TopicOfPage text='เพิ่มรายการสินค้า' />
            <CardPrimary className='mb-5'>
                <BasicInformation
                    productData={productData}
                    onDataChange={handleSetProductData}
                />
                <ActionButtons actionText='เพิ่มสินค้า' onClick={() => console.log('Add Product', productData)} />
            </CardPrimary>
            <CardPrimary>
                <UploadExcel />
            </CardPrimary>
        </>
    )
}
