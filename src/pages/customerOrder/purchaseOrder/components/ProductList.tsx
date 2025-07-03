import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setProductDatas } from '../../../../store/reducer/customerOrder/PurchaseOrderSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { ProductData } from '../../../../types/store/customerOrder/purchaseOrder/purchaseOrderSliceTypes';

const productOptionDatas = [
    { _id: '60367919', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีขาว' },
    { _id: '60367920', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10180 120x53x120 ซม. สีดำ' },
    { _id: '60367921', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10190 150x53x120 ซม. สีน้ำตาล' },
    { _id: '60367922', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10200 80x53x120 ซม. สีเทา' },
    { _id: '60367926', product_name: 'ตู้กับข้าว 2/4 Zagio CR2040-S 61.5x43x120.5 ซม. สีเงิน' },
    { _id: '60367927', product_name: 'ตู้กับข้าว 3/4 Zagio CR3040-S 91.5x43x120.5 ซม. สีขาว' },
    { _id: '60367928', product_name: 'ตู้กับข้าว 4/4 Zagio CR4040-S 122x43x120.5 ซม. สีดำ' },
    { _id: '60367929', product_name: 'ตู้กับข้าว 2/3 Zagio CR2030-S 61.5x43x90.5 ซม. สีเงิน' },
    { _id: '60367932', product_name: 'ตู้วางเตาแก๊ส Zagio CR120-S 122x45.5x85.5 ซม. สีเงิน' },
    { _id: '60367933', product_name: 'ตู้วางเตาแก๊ส Zagio CR100-S 102x45.5x85.5 ซม. สีขาว' },
    { _id: '60367934', product_name: 'ตู้วางเตาแก๊ส Zagio CR140-S 142x45.5x85.5 ซม. สีดำ' },
    { _id: '60367935', product_name: 'ตู้วางเตาแก๊ส Zagio CR80-S 82x45.5x85.5 ซม. สีเทา' },
];

export default function ProductList() {

    const { productDatas } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);
    const dispatch = useDispatch<AppDispatch>();
    const handleOnChange = <Key extends keyof ProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: ProductData[Key]; }
    ) => dispatch(setProductDatas({ index, updateKey, value }));

    return (
        <>
            <Topic text='รายการสินค้า' />
            <div className='grid grid-cols-3 gap-x-4 max-[1000px]:grid-cols-1 mb-8'>
                {productDatas.map((productData, index) => {
                    // Count occurrences of each product_id
                    const productIdCounts = productDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = productIdCounts[productData.product_id] > 1;

                    return (
                        <React.Fragment key={productData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={productData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={productData.amount}
                                onChange={event => handleOnChange({ index, updateKey: 'amount', value: numericWithoutText(event.target.value) })} />
                            <div className='flex justify-start items-center gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={productData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })} />
                                <OutlinedButton
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData(index))}
                                />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <OutlinedButton
                    text='+ เพิ่มรายการ'
                    textColor='text-themeColor'
                    bgColor='bg-themeColor'
                    borderColor='border-themeColor'
                    onClick={() => dispatch(addProductData())}
                />
                <OutlinedButton
                    text='- ลบรายการ'
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    onClick={() => dispatch(deleteProductData(productDatas.length - 1))}
                />
            </div>

        </>
    )
}
