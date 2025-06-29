import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import ActionButtons from '../../components/ActionButtons';
import BasicInformation, { type ProductSubCategoryData } from './components/BasicInformation';

export default function EditProductSubCategory() {

    const [productSubCategoryData, setProductSubCategoryData] = useState<ProductSubCategoryData>({
        selectedCategory: '',
        productSubCategoryName: '',
    });

    const handleSetProductSubCategoryData = (key: keyof ProductSubCategoryData, value: string) => {
        setProductSubCategoryData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='แก้ไขประเภทสินค้าย่อย' />
            <CardPrimary>
                <BasicInformation
                    productSubCategoryData={productSubCategoryData}
                    onDataChange={handleSetProductSubCategoryData}
                />
                <ActionButtons onClick={() => console.log('Edit Product SubCategory')} />
            </CardPrimary>
        </>
    )
}
