
// Component
import Topic from '../../../../common/topic/Topic';
import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';

// Helper
import { numericWithoutText } from '../../../../helper/utils/validation';

export type TransportTruckData = {
    name: string;
    selectedType: string;
    licensePlate: string;
    maximumWeight: string;
    status: string;
};

const typeOptionsDatas = [
    { value: '4w', displayValue: 'รถบรรทุก 4 ล้อ' },
    { value: '6w', displayValue: 'รถบรรทุก 6 ล้อ' },
    { value: '10w', displayValue: 'รถบรรทุก 10 ล้อ' },
];

const statusOptionsDatas = [
    { value: 'available', displayValue: 'พร้อมใช้งาน' },
    { value: 'maintenance', displayValue: 'ซ่อมบำรุง' },
];

type BasicInformationProps = {
    transportTruckData: TransportTruckData;
    onDataChange: (key: keyof TransportTruckData, value: string) => void;
};

export default function BasicInformation({
    transportTruckData,
    onDataChange,
}: BasicInformationProps) {
    const {
        name,
        selectedType,
        licensePlate,
        maximumWeight,
        status,
    } = transportTruckData;

    return (
        <>
            <Topic text='ข้อมูลรถขนสินค้า' />
            <ThreeColumnGrid>
                <InputPrimary
                    labelTag='ชื่อรถขนสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={name}
                    onChange={event => onDataChange('name', event.target.value)}
                />
                <SelectPrimary
                    labelTag='ประเภทรถ'
                    optionDatas={typeOptionsDatas}
                    selectedValue={selectedType}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedType', value as string)}
                />
                <InputPrimary
                    labelTag='เลขทะเบียน'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={licensePlate}
                    onChange={event => onDataChange('licensePlate', event.target.value)}
                />
                <InputPrimary
                    labelTag='น้ำหนักสูงสุดที่บรรทุกได้ (kg)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={maximumWeight}
                    onChange={event => onDataChange('maximumWeight', numericWithoutText(event.target.value))}
                />
                <SelectPrimary
                    labelTag='สถานะรถขนสินค้า'
                    optionDatas={statusOptionsDatas}
                    selectedValue={status}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('status', value as string)}
                />
            </ThreeColumnGrid>
        </>
    )
}
