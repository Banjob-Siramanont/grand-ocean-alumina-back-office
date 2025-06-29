import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

export type ShippingDestinationData = {
    selectedShippingRegion: string;
    selectedShippingProvince: string;
    selectedShippingType: string;
    shippingAddress: string;
};

const regionOptionsDatas = [
    { value: 'bangkok', displayValue: 'กทม และปริมณฑล' },
    { value: 'central', displayValue: 'ภาคกลาง' },
    { value: 'northern', displayValue: 'ภาคเหนือ' },
    { value: 'northeastern', displayValue: 'ภาคอีสาน' },
    { value: 'eastern', displayValue: 'ภาคตะวันออก' },
    { value: 'southern', displayValue: 'ภาคใต้' },
];

const provinceOptionsDatas = [
    { value: 'bangkok', displayValue: 'กรุงเทพมหานคร' },
    { value: 'nonthaburi', displayValue: 'นนทบุรี' },
    { value: 'pathumthani', displayValue: 'ปทุมธานี' },
    { value: 'samutsakhon', displayValue: 'สมุทรสาคร' },
    { value: 'samutprakan', displayValue: 'สมุทรปราการ' },
    { value: 'nakhonpathom', displayValue: 'นครปฐม' },
    { value: 'rayong', displayValue: 'ระยอง' },
    { value: 'chonburi', displayValue: 'ชลบุรี' },
    { value: 'chachoengsao', displayValue: 'ฉะเชิงเทรา' },
    { value: 'prachinburi', displayValue: 'ปราจีนบุรี' },
    { value: 'sakaeo', displayValue: 'สระแก้ว' },
    { value: 'chanthaburi', displayValue: 'จันทบุรี' },
    { value: 'pattaya', displayValue: 'พัทยา' },
];

const shippingTypeOptionsDatas = [
    { value: 'standard', displayValue: '1 วันก่อนส่งสินค้า' },
    { value: 'farDistance', displayValue: '1 วันก่อนส่งสินค้า และก่อนเที่ยง' },
    { value: 'closeDistance', displayValue: 'ภายในเช้าวันส่งสินค้า' },
];

type ShippingDestinationProps = {
    shippingDestinationData: ShippingDestinationData;
    onDataChange: (key: keyof ShippingDestinationData, value: string) => void;
};

export default function ShippingDestination({
    shippingDestinationData,
    onDataChange,
}: ShippingDestinationProps) {
    const {
        selectedShippingRegion,
        selectedShippingProvince,
        selectedShippingType,
        shippingAddress,
    } = shippingDestinationData;

    return (
        <>
            <Topic text='จุดหมายปลายทางการจัดส่ง' />
            <ThreeColumnGrid>
                <SelectPrimary
                    labelTag='ภาค'
                    optionDatas={regionOptionsDatas}
                    selectedValue={selectedShippingRegion}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedShippingRegion', value as string)}
                />
                <SelectPrimary
                    labelTag='จังหวัด'
                    optionDatas={provinceOptionsDatas}
                    selectedValue={selectedShippingProvince}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedShippingProvince', value as string)}
                />
                <SelectPrimary
                    labelTag='การขึ้นสินค้า (ช้าที่สุดที่ยอมรับได้)'
                    optionDatas={shippingTypeOptionsDatas}
                    selectedValue={selectedShippingType}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedShippingType', value as string)}
                />
                <InputPrimary
                    className='col-span-3 max-[1100px]:col-span-2 max-[800px]:col-span-1'
                    labelTag='ที่อยู่'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={shippingAddress}
                    onChange={event => onDataChange('shippingAddress', event.target.value)}
                />
            </ThreeColumnGrid>
        </>
    )
}
