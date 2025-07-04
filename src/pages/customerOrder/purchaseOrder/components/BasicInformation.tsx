import { useDispatch, useSelector } from 'react-redux';
import { setPurchaseOrderData } from '../../../../store/reducer/customerOrder/PurchaseOrderSlice';

// Components
import ThreeColumnGrid from '../../../../common/general/ThreeColumnGrid';
import InputDateAndTime from '../../../../common/input/InputDateAndTime';
import InputPrimary from '../../../../common/input/InputPrimary';
import SelectPrimary from '../../../../common/select/SelectPrimary';
import Topic from '../../../../common/topic/Topic';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { PurchaseOrderData } from '../../../../types/store/customerOrder/purchaseOrderSliceTypes';

export default function BasicInformation() {

    const {
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
        customerCompanyOptionDatas,
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const dispatch = useDispatch<AppDispatch>();

    const handleOnchange = <Key extends keyof PurchaseOrderData>(variableName: Key, value: PurchaseOrderData[Key]) => {
        dispatch(setPurchaseOrderData({ variableName, value }));
    };

    return (
        <>
            <Topic text='ข้อมูลใบ PO' />
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
                <InputDateAndTime
                    labelTag='วันที่ออกใบสั่งซื้อ'
                    type='date'
                    placeholder='กรุณาเลือกวันที่'
                    value={orderDate}
                    onChange={date => handleOnchange('orderDate', date as string)}
                />
                <InputDateAndTime
                    labelTag='วันที่หมดอายุของใบสั่งซื้อ'
                    type='date'
                    placeholder='กรุณาเลือกวันที่'
                    value={expiredDate}
                    onChange={date => handleOnchange('expiredDate', date as string)}
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
