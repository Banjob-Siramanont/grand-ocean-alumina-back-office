import { useState } from 'react';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation, { type BasicInformationData } from './components/BasicInformation';
import ProductList, { type ProductData } from './components/ProductList';

export default function AddPurchaseOrder() {

    const [basicInformationData, setBasicInformationData] = useState<BasicInformationData>({
        selectedCustomerCompany: '',
        poNumber: '',
        orderDate: '',
        expiredDate: '',
        shippingAddress: '',
    });
    const handleSetBasicInformationData = (key: keyof BasicInformationData, value: string | number) => {
        setBasicInformationData(prev => ({ ...prev, [key]: value }));
    };

    const [productDatas, setProductDatas] = useState<ProductData[]>([
        {
            _id: 1,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            _id: 2,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            _id: 3,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            _id: 4,
            product_id: '',
            amount: '',
            note: '',
        },
    ]);
    const handleSetProductDatas = (index: number, updateKey: keyof ProductData, value: string) => {
        setProductDatas(prev => {
            const newDatas = [...prev];
            newDatas[index] = { ...newDatas[index], [updateKey]: value };
            return newDatas;
        });
    };

    const handleDeleteProduct = (index: number) => {
        if (productDatas.length <= 1) return;
        setProductDatas(prev => prev.filter((_, i) => i !== index));
        setProductDatas(prev => prev.map((data, i) => ({ ...data, _id: i + 1 })));
    };
    const handleAddProduct = () => {
        const newProduct: ProductData = {
            _id: productDatas.length + 1,
            product_id: '',
            amount: '',
            note: '',
        };
        setProductDatas(prev => [...prev, newProduct]);
        setTimeout(() => window.scrollTo(0, window.scrollY + 60), 10); // ถ้าไม่ setTimeout มันจะไม่ scroll ไปที่ product list ใหม่ เพราะจะ scroll ก่อนเพิ่ม product ใหม่
    };

    return (
        <>
            <TopicOfPage text='เพิ่มใบ PO' />
            <CardPrimary>
                <BasicInformation
                    basicInformationData={basicInformationData}
                    onDataChange={handleSetBasicInformationData}
                />
                <ProductList
                    productDatas={productDatas}
                    onDataChange={handleSetProductDatas}
                    onDeleteProduct={handleDeleteProduct}
                    onAddProduct={handleAddProduct}
                />
            </CardPrimary>

        </>
    )
}

