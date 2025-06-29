import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

// Helper
import { numericWithoutText } from '../../../../helper/utils/validation';

export type BasicInformationData = {
    name: string;
    branch: string;
    selectedType: string;
    selectedCustomerGroup: string;
    selectedRegion: string;
    displacement: string;
    selectedPrice: number;
};

const typeOptionsDatas = [
    { value: 'wholesale', displayValue: 'ร้านค้าส่ง' },
    { value: 'retail', displayValue: 'ร้านค้าปลีก' },
    { value: 'supermarket', displayValue: 'ห้างสรรพสินค้า' },
];

const customerGroupOptionsDatas = [
    { value: 'groupA', displayValue: 'กลุ่มร้านค้า A' },
    { value: 'groupB', displayValue: 'กลุ่มร้านค้า B' },
    { value: 'groupC', displayValue: 'กลุ่มร้านค้า C' },
    { value: 'groupD', displayValue: 'กลุ่มร้านค้า D' },
];

const regionOptionsDatas = [
    { value: 'bangkok', displayValue: 'กทม และปริมณฑล' },
    { value: 'central', displayValue: 'ภาคกลาง' },
    { value: 'northern', displayValue: 'ภาคเหนือ' },
    { value: 'northeastern', displayValue: 'ภาคอีสาน' },
    { value: 'eastern', displayValue: 'ภาคตะวันออก' },
    { value: 'southern', displayValue: 'ภาคใต้' },
];

const priceOptionsDatas = [
    { value: 1, displayValue: 'ใช่' },
    { value: 0, displayValue: 'ไม่ใช่' },
];

type BasicInformationProps = {
    basicInformationData: BasicInformationData;
    onDataChange: (key: keyof BasicInformationData, value: string | number) => void;
};

export default function BasicInformation({
    basicInformationData,
    onDataChange,
}: BasicInformationProps) {
    const {
        name,
        branch,
        selectedType,
        selectedCustomerGroup,
        selectedRegion,
        displacement,
        selectedPrice,
    } = basicInformationData;

    return (
        <>
            <Topic text='ข้อมูลร้านค้า' />
            <ThreeColumnGrid>
                <InputPrimary
                    labelTag='ชื่อร้านค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={name}
                    onChange={event => onDataChange('name', event.target.value)}
                />
                <InputPrimary
                    labelTag='สาขา'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={branch}
                    onChange={event => onDataChange('branch', event.target.value)}
                />
                <SelectPrimary
                    labelTag='ประเภทร้านค้า'
                    optionDatas={typeOptionsDatas}
                    selectedValue={selectedType}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedType', value as string)}
                />
                <SelectPrimary
                    labelTag='กลุ่มร้านค้า'
                    optionDatas={customerGroupOptionsDatas}
                    selectedValue={selectedCustomerGroup}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedCustomerGroup', value as string)}
                />
                <SelectPrimary
                    labelTag='ภาค'
                    optionDatas={regionOptionsDatas}
                    selectedValue={selectedRegion}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedRegion', value as string)}
                />
                <InputPrimary
                    labelTag='ระยะห่างจากบริษัท (km)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={displacement}
                    onChange={event => onDataChange('displacement', numericWithoutText(event.target.value))}
                />
                <SelectPrimary
                    labelTag='ราคาสินค้ารวม VAT'
                    optionDatas={priceOptionsDatas}
                    selectedValue={selectedPrice}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedPrice', value as number)}
                />
            </ThreeColumnGrid>
        </>
    )
}
