import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setReturnProductDatas } from '../../../../store/reducer/customerOrder/ClaimSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { ReturnProductData } from '../../../../types/store/customerOrder/claimSliceTypes';

export default function ReturnProductList() {

    const dispatch = useDispatch<AppDispatch>();

    const { productOptionDatas, returnProductDatas } = useSelector((state: RootState) => state.claimDataStateValue);

    const handleOnChange = <Key extends keyof ReturnProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: ReturnProductData[Key]; }
    ) => dispatch(setReturnProductDatas({ index, updateKey, value: value as string }));

    return (
        <>
            <Topic text='รายการสินค้าส่งคืน' />
            <div className='grid grid-cols-3 gap-x-2 max-[1000px]:grid-cols-1 mb-8'>
                {returnProductDatas.map((returnProductData, index) => {
                    // Count occurrences of each product_id
                    const productIdCounts = returnProductDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = productIdCounts[returnProductData.product_id] > 1;

                    return (
                        <React.Fragment key={returnProductData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={returnProductData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={returnProductData.quantity}
                                onChange={event => handleOnChange({ index, updateKey: 'quantity', value: numericWithoutText(event.target.value) })}
                            />
                            <div className='flex justify-start items-start gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={returnProductData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })}
                                />
                                <OutlinedButton
                                    className='mt-3'
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData({ index, productType: 'return' }))}
                                />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='flex justify-start items-center gap-x-2 mb-8'>
                <OutlinedButton
                    text='+ เพิ่มรายการ'
                    textColor='text-themeColor'
                    bgColor='bg-themeColor'
                    borderColor='border-themeColor'
                    onClick={() => dispatch(addProductData({ productType: 'return' }))}
                />
                <OutlinedButton
                    text='- ลบรายการ'
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    onClick={() => dispatch(deleteProductData({ index: returnProductDatas.length - 1, productType: 'return' }))}
                />
            </div>
        </>
    )
}
