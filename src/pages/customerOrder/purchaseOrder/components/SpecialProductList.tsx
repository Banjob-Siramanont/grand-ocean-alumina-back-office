import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setSpecialProductDatas } from '../../../../store/reducer/customerOrder/PurchaseOrderSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';
import Prices from './Prices';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { SpecialProductData } from '../../../../types/store/customerOrder/purchaseOrder/purchaseOrderSliceTypes';

export default function SpecialProductList() {

    const { productOptionDatas, specialProductDatas } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);
    const dispatch = useDispatch<AppDispatch>();
    const handleOnChange = <Key extends keyof SpecialProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: SpecialProductData[Key]; }
    ) => dispatch(setSpecialProductDatas({ index, updateKey, value: value as string }));

    return (
        <>
            <Topic text='รายการสินค้าพิเศษ' />
            <div className='grid grid-cols-4 gap-x-2 max-[1000px]:grid-cols-1 mb-8'>
                {specialProductDatas.map((specialProductData, index) => {
                    // Count occurrences of each product_id
                    const specialProductIdCounts = specialProductDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = specialProductIdCounts[specialProductData.product_id] > 1;

                    return (
                        <React.Fragment key={specialProductData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={specialProductData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={specialProductData.amount}
                                onChange={event => handleOnChange({ index, updateKey: 'amount', value: numericWithoutText(event.target.value) })}
                            />
                            <InputSecondary
                                placeholder='ราคาเพิ่มเติมต่อหน่วย (ถ้ามี)'
                                type='number'
                                value={specialProductData.addedPrice}
                                onChange={event => handleOnChange({ index, updateKey: 'addedPrice', value: numericWithoutText(event.target.value) })}
                            />
                            <div className='flex justify-start items-start gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={specialProductData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })}
                                />
                                <OutlinedButton
                                    className='mt-3'
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData({ productType: 'special', index }))}
                                />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='flex justify-between items-start mb-8'>
                <div className='flex justify-start items-center gap-x-2'>
                    <OutlinedButton
                        text='+ เพิ่มรายการ'
                        textColor='text-themeColor'
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => dispatch(addProductData({ productType: 'special' }))}
                    />
                    <OutlinedButton
                        text='- ลบรายการ'
                        textColor='text-alarmRed'
                        bgColor='bg-alarmRed'
                        borderColor='border-alarmRed'
                        onClick={() => dispatch(deleteProductData({ productType: 'special', index: specialProductDatas.length - 1 }))}
                    />
                </div>
                <Prices />
            </div>
        </>
    )
}
