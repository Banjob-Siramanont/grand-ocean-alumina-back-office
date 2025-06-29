import TwoColumnGrid from '../../../../common/general/TwoColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

const typeOptionsDatas = [
    { value: 'storage_cabinet', displayValue: 'ตู้เก็บของเอนกประสงค์' },
    { value: 'rice_cabinet', displayValue: 'ตู้กับข้าว' },
    { value: 'gas_stove_cabinet', displayValue: 'ตู้วางเตาแก๊ส' },
    { value: 'wardrobe', displayValue: 'ตู้เสื้อผ้า' },
    { value: 'shoe_cabinet', displayValue: 'ตู้รองเท้า' },
];

export type ProductSubtypeData = {
    selectedType: string;
    productSubtypeName: string;
};

type BasicInformationProps = {
    productSubtypeData: ProductSubtypeData;
    onDataChange: (key: keyof ProductSubtypeData, value: string) => void;
};

export default function BasicInformation({
    productSubtypeData,
    onDataChange
}: BasicInformationProps) {

    const { selectedType, productSubtypeName } = productSubtypeData;

    return (
        <>
            <Topic text='ข้อมูลประเภทสินค้าย่อย' />
            <TwoColumnGrid>
                <SelectPrimary
                    labelTag='ประเภทสินค้า'
                    optionDatas={typeOptionsDatas}
                    selectedValue={selectedType}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedType', value as string)}
                />
                <InputPrimary
                    labelTag='ชื่อประเภทสินค้าย่อย'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={productSubtypeName}
                    onChange={event => onDataChange('productSubtypeName', event.target.value)}
                />
            </TwoColumnGrid>
        </>
    )
}
