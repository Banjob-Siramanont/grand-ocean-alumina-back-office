import { useDispatch, useSelector } from 'react-redux';
import { setClaimData } from '../../../../store/reducer/customerOrder/ClaimSlice';

// Components
import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputDateAndTime from '../../../../common/input/InputDateAndTime';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { ClaimData } from '../../../../types/store/customerOrder/claimSliceTypes';

export default function BasicInformation() {

    const {
        selectedCustomerCompany,
        poNumber,
        invoiceNumber,
        shippingDate,
        shippingAddress,
        customerCompanyOptionDatas,
    } = useSelector((state: RootState) => state.claimDataStateValue);

    const dispatch = useDispatch<AppDispatch>();

    const handleOnchange = <Key extends keyof ClaimData>(variableName: Key, value: ClaimData[Key]) => {
        dispatch(setClaimData({ variableName, value }));
    };

    return (
        <>
            <Topic text='ข้อมูลส่งซ่อม / คืน / เปลี่ยน' />
            <ThreeColumnGrid>
                <SelectPrimary
                    labelTag='บริษัทลูกค้า'
                    optionDatas={customerCompanyOptionDatas}
                    selectedValue={selectedCustomerCompany}
                    keyValue='_id'
                    keyDisplayValue='company_name'
                    onChange={value => handleOnchange('selectedCustomerCompany', value as string)}
                />
                <InputPrimary
                    labelTag='เลขที่ใบสั่งซื้อ (PO Number)'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={poNumber}
                    onChange={event => handleOnchange('poNumber', event.target.value as string)}
                />
                <InputPrimary
                    labelTag='เลขใบกำกับภาษี / ใบส่งสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={invoiceNumber}
                    onChange={event => handleOnchange('invoiceNumber', event.target.value as string)}
                />
                <InputDateAndTime
                    labelTag='วันที่ส่งสินค้า (ไม่บังคับ)'
                    type='date'
                    placeholder='กรุณาเลือกวันที่'
                    value={shippingDate}
                    onChange={date => handleOnchange('shippingDate', date as string)}
                />
                <InputPrimary
                    labelTag='สถานที่จัดส่งสินค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={shippingAddress}
                    onChange={event => handleOnchange('shippingAddress', event.target.value as string)}
                />
            </ThreeColumnGrid>
        </>
    )
}
