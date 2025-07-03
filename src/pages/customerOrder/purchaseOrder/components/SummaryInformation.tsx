import { useSelector } from 'react-redux';

// Components
import Topic from '../../../../common/topic/Topic';

// Helpers
import { calculateOrderTotals } from '../../../../helper/utils/common';
import { currency } from '../../../../helper/utils/currency';
import { getDetailedDateInfo } from '../../../../helper/utils/date';
import { filteredData } from '../../../../helper/utils/filter';

// Types
import type { RootState } from '../../../../store/Store';

export default function SummaryInformation() {

    const {
        selectedCustomerCompany,
        poNumber,
        orderDate,
        expiredDate,
        shippingAddress,
        productOptionDatas,
        productDatas,
        specialProductDatas,
        customerCompanyOptionDatas
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const price = calculateOrderTotals(productDatas, specialProductDatas, productOptionDatas);

    return (
        <>
            <Topic text='ข้อมูลใบ PO' />
            <div className='grid grid-cols-[auto_1fr] max-[650px]:grid-cols-1 gap-x-4 mb-8'>
                <Detail topic='บริษัทลูกค้า' detail={filteredData(customerCompanyOptionDatas, selectedCustomerCompany, '_id', 'company_name', 'โปรดเลือกบริษัทลูกค้า') as string} />
                <Detail topic='เลขที่ใบสั่งซื้อ (PO Number)' detail={poNumber ? poNumber : 'กรุณาระบุเลขที่ใบสั่งซื้อ'} />
                <Detail topic='วันที่ออกใบสั่งซื้อ' detail={orderDate ? getDetailedDateInfo(new Date(orderDate)).thaiFormat : 'กรุณาเลือกวันที่'} />
                <Detail topic='วันหมดอายุใบสั่งซื้อ (PO Exp.)' detail={expiredDate ? getDetailedDateInfo(new Date(expiredDate)).thaiFormat : 'กรุณาเลือกวันที่'} />
                <Detail topic='สถานที่จัดส่งสินค้า' detail={shippingAddress ? shippingAddress : 'กรุณาระบุสถานที่จัดส่งสินค้า'} />
                <Detail topic='ยอดสั่งซื้อ' detail={`${currency(price.totalPrice)} บาท`} />
                <Detail topic='ภาษีมูลค่าเพิ่ม' detail={`${currency(price.totalVat)} บาท`} />
                <Detail topic='รวมทั้งสิ้น' detail={`${currency(price.grandTotal)} บาท`} />
            </div>
        </>
    )
}

type DetailProps = {
    topic: string;
    detail: string;
}
function Detail({ topic, detail }: DetailProps) {
    return (
        <>
            <div className='dark:text-white font-bold min-[650px]:after:content-["_:"]'>{topic}</div>
            <div className='dark:text-white  max-[650px]:mb-3 max-[650px]:before:content-["-_"]'>{detail}</div>
        </>
    )
}