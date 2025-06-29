
// Component
import Topic from '../../../../common/topic/Topic';
import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';

// Helper
import { numericWithoutText } from '../../../../helper/utils/validation';

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
    name: string;
    type: string;
    licensePlate: string;
    maximumWeight: string;
    status: string;
    setName: (value: string) => void;
    setType: (value: string) => void;
    setLicensePlate: (value: string) => void;
    setMaximumWeight: (value: string) => void;
    setStatus: (value: string) => void;
};

export default function BasicInformation({
    name,
    type,
    licensePlate,
    maximumWeight,
    status,
    setName,
    setType,
    setLicensePlate,
    setMaximumWeight,
    setStatus
}: BasicInformationProps) {
    return (
        <>
            <Topic text='ข้อมูลรถขนสินค้า' />
            <ThreeColumnGrid>
                <InputPrimary
                    labelTag='ชื่อรถขนสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <SelectPrimary
                    labelTag='ประเภทรถ'
                    optionDatas={typeOptionsDatas}
                    selectedValue={type}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => setType(value as string)}
                />
                <InputPrimary
                    labelTag='เลขทะเบียน'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={licensePlate}
                    onChange={event => setLicensePlate(event.target.value)}
                />
                <InputPrimary
                    labelTag='น้ำหนักสูงสุดที่บรรทุกได้ (kg)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={maximumWeight}
                    onChange={event => setMaximumWeight(numericWithoutText(event.target.value))}
                />
                <SelectPrimary
                    labelTag='สถานะรถขนสินค้า'
                    optionDatas={statusOptionsDatas}
                    selectedValue={status}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => setStatus(value as string)}
                />
            </ThreeColumnGrid>
        </>
    )
}
