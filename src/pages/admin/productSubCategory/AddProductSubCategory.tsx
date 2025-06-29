import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type ProductSubCategoryData } from './components/BasicInformation';
import ActionButtons from '../../components/ActionButtons';


export default function AddProductSubCategory() {

    const [productSubCategoryData, setProductSubCategoryData] = useState<ProductSubCategoryData>({
        selectedCategory: '',
        productSubCategoryName: '',
    });

    const handleSetProductSubCategoryData = (key: keyof ProductSubCategoryData, value: string) => {
        setProductSubCategoryData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <>
            <TopicOfPage text='เพิ่มหมวดหมู่ย่อยสินค้า' />
            <CardPrimary>
                <BasicInformation
                    productSubCategoryData={productSubCategoryData}
                    onDataChange={handleSetProductSubCategoryData}
                />
                <ActionButtons actionText='เพิ่มหมวดหมู่ย่อยสินค้า' onClick={() => console.log('Add Product SubCategory')} />
            </CardPrimary>
        </>
    )
}
