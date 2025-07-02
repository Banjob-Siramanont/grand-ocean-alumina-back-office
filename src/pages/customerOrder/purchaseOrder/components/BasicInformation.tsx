import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputDateAndTime from '../../../../common/input/InputDateAndTime';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

const customerCompanyOptionDatas = [
    { value: '01', displayValue: 'ไทวัสดุ' },
    { value: '02', displayValue: 'อมรภัณฑ์' },
    { value: '03', displayValue: 'Home Pro' },
];

type BasicInformationData = {
    selectedCustomerCompany: string;
    poNumber: string;
    orderDate: string;
    expiredDate: string;
    shippingAddress: string;
};

type BasicInformationProps = {
    basicInformationData: BasicInformationData;
    onDataChange: (key: keyof BasicInformationData, value: string | number) => void;
};

export default function BasicInformation({ basicInformationData, onDataChange }: BasicInformationProps) {

    const {
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
    } = basicInformationData;
    return (
        <>
            <Topic text='ข้อมูลใบ PO' />
            <ThreeColumnGrid>
                <SelectPrimary
                    labelTag='บริษัทลูกค้า'
                    optionDatas={customerCompanyOptionDatas}
                    selectedValue={selectedCustomerCompany}
                    keyValue='value'
                    keyDisplayValue='displayValue'
                    onChange={value => onDataChange('selectedCustomerCompany', value as string)}
                />
                <InputPrimary
                    labelTag='เลขที่ใบสั่งซื้อ (PO Number)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={poNumber}
                    onChange={event => onDataChange('poNumber', event.target.value as string)}
                />
                <InputDateAndTime
                    labelTag='วันที่ออกใบสั่งซื้อ'
                    type='date'
                    placeholder='กรุณาเลือกวันที่'
                    value={orderDate}
                    onChange={date => onDataChange('orderDate', date as string)}
                />
                <InputDateAndTime
                    labelTag='วันที่หมดอายุของใบสั่งซื้อ'
                    type='date'
                    placeholder='กรุณาเลือกวันที่'
                    value={expiredDate}
                    onChange={date => onDataChange('expiredDate', date as string)}
                />
                <InputPrimary
                    labelTag='สถานที่จัดส่งสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={shippingAddress}
                    onChange={event => onDataChange('shippingAddress', event.target.value as string)}
                />
            </ThreeColumnGrid>
        </>
    )
}
