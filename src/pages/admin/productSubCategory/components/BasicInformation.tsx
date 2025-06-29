import TwoColumnGrid from '../../../../common/general/TwoColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

const categoryOptionsDatas = [
    { value: 'indoor', displayValue: 'เฟอร์นิเจอร์ในร่ม' },
    { value: 'outdoor', displayValue: 'เฟอร์นิเจอร์กลางแจ้ง' },
    { value: 'office', displayValue: 'เฟอร์นิเจอร์สำนักงาน' },
    { value: 'industrial', displayValue: 'เฟอร์นิเจอร์อุตสาหกรรม' },
    { value: 'decorative', displayValue: 'เฟอร์นิเจอร์ตกแต่ง' },
];

export type ProductSubCategoryData = {
    selectedCategory: string;
    productSubCategoryName: string;
};

type BasicInformationProps = {
    productSubCategoryData: ProductSubCategoryData;
    onDataChange: (key: keyof ProductSubCategoryData, value: string) => void;
};

export default function BasicInformation({ productSubCategoryData, onDataChange }: BasicInformationProps) {

    const { selectedCategory, productSubCategoryName } = productSubCategoryData;

    return (
        <>
            <Topic text='ข้อมูลประเภทสินค้าย่อย' />
            <TwoColumnGrid>
                <SelectPrimary
                    labelTag='ประเภทสินค้า'
                    optionDatas={categoryOptionsDatas}
                    selectedValue={selectedCategory}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedCategory', value as string)}
                />
                <InputPrimary
                    labelTag='ประเภทสินค้าย่อย'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productSubCategoryName}
                    onChange={event => onDataChange('productSubCategoryName', event.target.value)}
                />
            </TwoColumnGrid>
        </>
    )
}
