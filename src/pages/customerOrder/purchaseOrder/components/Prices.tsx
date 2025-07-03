import { useSelector } from 'react-redux';

// Helpers
import { currency } from '../../../../helper/utils/currency';
import { calculateOrderTotals } from '../../../../helper/utils/common';

// Types
import type { RootState } from '../../../../store/Store';

export default function Prices() {
    const {
        productOptionDatas,
        productDatas,
        specialProductDatas
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const price = calculateOrderTotals(productDatas, specialProductDatas, productOptionDatas);

    return (
        <div className='text-right dark:text-white'>
            <div className='text-right'>ยอดสั่งซื้อ : {currency(price.totalPrice)} บาท</div>
            <div className='text-right'>ภาษีมูลค่าเพิ่ม : {currency(price.totalVat)} บาท</div>
            <div className='text-right'>รวมทั้งสิ้่น : {currency(price.grandTotal)} บาท</div>
        </div>
    )
}
