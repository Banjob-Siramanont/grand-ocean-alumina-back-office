import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setReplaceProductDatas } from '../../../../store/reducer/customerOrder/ClaimSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { ReplaceProductData } from '../../../../types/store/customerOrder/claimSliceTypes';
import ActionButtons from '../../../components/ActionButtons';

export default function ReplaceProductList() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { productOptionDatas, replaceProductDatas } = useSelector((state: RootState) => state.claimDataStateValue);

    const handleOnChange = <Key extends keyof ReplaceProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: ReplaceProductData[Key]; }
    ) => dispatch(setReplaceProductDatas({ index, updateKey, value: value as string }));

    return (
        <>
            <Topic text='รายการสินค้าเปลี่ยน' />
            <div className='grid grid-cols-3 gap-x-2 max-[1000px]:grid-cols-1 mb-8'>
                {replaceProductDatas.map((replaceProductData, index) => {
                    // Count occurrences of each product_id
                    const productIdCounts = replaceProductDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = productIdCounts[replaceProductData.product_id] > 1;

                    return (
                        <React.Fragment key={replaceProductData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={replaceProductData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={replaceProductData.quantity}
                                onChange={event => handleOnChange({ index, updateKey: 'quantity', value: numericWithoutText(event.target.value) })}
                            />
                            <div className='flex justify-start items-start gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={replaceProductData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })}
                                />
                                <OutlinedButton
                                    className='mt-3'
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData({ index, productType: 'replace' }))}
                                />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='flex justify-between items-center gap-x-2'>
                <div className='flex justify-start items-center gap-x-2'>
                    <OutlinedButton
                        text='+ เพิ่มรายการ'
                        textColor='text-themeColor'
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => dispatch(addProductData({ productType: 'replace' }))}
                    />
                    <OutlinedButton
                        text='- ลบรายการ'
                        textColor='text-alarmRed'
                        bgColor='bg-alarmRed'
                        borderColor='border-alarmRed'
                        onClick={() => dispatch(deleteProductData({ index: replaceProductDatas.length - 1, productType: 'replace' }))}
                    />
                </div>
                <ActionButtons
                    actionText='ถัดไป'
                    onClick={() => {
                        if (id) navigate(`/edit/verify-claim?id=${id}`);
                        else navigate('/add/verify-claim');
                    }}
                />
            </div>
        </>
    )
}
