import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

// Helper
import { numericWithoutText } from '../../../../helper/utils/validation';

const typeOptionsDatas = [
    { value: 'storage_cabinet', displayValue: 'ตู้เก็บของเอนกประสงค์' },
    { value: 'rice_cabinet', displayValue: 'ตู้กับข้าว' },
    { value: 'gas_stove_cabinet', displayValue: 'ตู้วางเตาแก๊ส' },
    { value: 'wardrobe', displayValue: 'ตู้เสื้อผ้า' },
    { value: 'shoe_cabinet', displayValue: 'ตู้รองเท้า' },
];

const subtypeOptionsDatas = [
    { value: 'storage_2_door', displayValue: 'ตู้เก็บของ 2 ประตู' },
    { value: 'storage_3_door', displayValue: 'ตู้เก็บของ 3 ประตู' },
    { value: 'rice_small', displayValue: 'ตู้กับข้าวขนาดเล็ก' },
    { value: 'rice_large', displayValue: 'ตู้กับข้าวขนาดใหญ่' },
    { value: 'gas_standard', displayValue: 'ตู้วางเตาแก๊สมาตรฐาน' },
    { value: 'gas_with_drawer', displayValue: 'ตู้วางเตาแก๊สพร้อมลิ้นชัก' },
    { value: 'wardrobe_2_door', displayValue: 'ตู้เสื้อผ้า 2 บาน' },
    { value: 'wardrobe_3_door', displayValue: 'ตู้เสื้อผ้า 3 บาน' },
    { value: 'shoe_4_tier', displayValue: 'ตู้รองเท้า 4 ชั้น' },
    { value: 'shoe_6_tier', displayValue: 'ตู้รองเท้า 6 ชั้น' },
];

const productionLineOptionsDatas = [
    { value: 'line_1', displayValue: 'Line 1' },
    { value: 'line_2', displayValue: 'Line 2' },
    { value: 'line_3', displayValue: 'Line 3' },
    { value: 'line_4', displayValue: 'Line 4' },
];

const customerGroupOptionsDatas = [
    { value: 'groupA', displayValue: 'กลุ่มร้านค้า A' },
    { value: 'groupB', displayValue: 'กลุ่มร้านค้า B' },
    { value: 'groupC', displayValue: 'กลุ่มร้านค้า C' },
    { value: 'groupD', displayValue: 'กลุ่มร้านค้า D' },
];

export type ProductData = {
    id: string;
    productName: string;
    productUnit: string;
    productWeight: string;
    selectedProductCategory: string;
    selectedProductSubCategory: string;
    selectedProductionLine: string;
    selectedCustomerGroup: string;
    productPrice: string;
};

type BasicInformationProps = {
    productData: ProductData;
    onDataChange: (key: keyof ProductData, value: string | number) => void;
};

export default function BasicInformation({
    productData,
    onDataChange
}: BasicInformationProps) {

    const {
        id,
        productName,
        productUnit,
        productWeight,
        selectedProductCategory,
        selectedProductSubCategory,
        selectedProductionLine,
        selectedCustomerGroup,
        productPrice
    } = productData;

    return (
        <>
            <Topic text='ข้อมูลสินค้า' />
            <ThreeColumnGrid>
                <InputPrimary
                    labelTag='รหัสสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={id}
                    onChange={event => onDataChange('id', event.target.value)}
                />
                <InputPrimary
                    labelTag='ชื่อสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productName}
                    onChange={event => onDataChange('productName', event.target.value)}
                />
                <InputPrimary
                    labelTag='หน่วยนับ'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productUnit}
                    onChange={event => onDataChange('productUnit', event.target.value)}
                />
                <InputPrimary
                    labelTag='น้ำหนักสินค้า (kg)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productWeight}
                    onChange={event => onDataChange('productWeight', event.target.value)}
                />
                <SelectPrimary
                    labelTag='ประเภทสินค้า'
                    optionDatas={typeOptionsDatas}
                    selectedValue={selectedProductCategory}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedProductCategory', value as string)}
                />
                <SelectPrimary
                    labelTag='ประเภทสินค้าย่อย'
                    optionDatas={subtypeOptionsDatas}
                    selectedValue={selectedProductSubCategory}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedProductSubCategory', value as string)}
                />
                <SelectPrimary
                    labelTag='Line ที่ผลิตได้'
                    optionDatas={productionLineOptionsDatas}
                    selectedValue={selectedProductionLine}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedProductionLine', value as string)}
                />
                <SelectPrimary
                    labelTag='กลุ่มร้านค้า'
                    optionDatas={customerGroupOptionsDatas}
                    selectedValue={selectedCustomerGroup}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedCustomerGroup', value as string)}
                />
                <InputPrimary
                    labelTag='ราคาสินค้า / หน่วย (บาท)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productPrice}
                    onChange={event => onDataChange('productPrice', numericWithoutText(event.target.value))}
                />
            </ThreeColumnGrid>
        </>
    )
}
