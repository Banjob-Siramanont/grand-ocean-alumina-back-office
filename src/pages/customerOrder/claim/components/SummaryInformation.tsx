import { useSelector } from 'react-redux';

// Components
import Topic from '../../../../common/topic/Topic';

// Helpers
import { getDetailedDateInfo } from '../../../../helper/utils/date';
import { filteredData } from '../../../../helper/utils/filter';

// Types
import type { RootState } from '../../../../store/Store';

export default function SummaryInformation() {

    const {
        selectedCustomerCompany,
        poNumber,
        invoiceNumber,
        shippingDate,
        shippingAddress,
        customerCompanyOptionDatas,
    } = useSelector((state: RootState) => state.claimDataStateValue);

    return (
        <>
            <Topic text='ข้อมูลส่งซ่อม / คืน / เปลี่ยน' />
            <div className='grid grid-cols-[auto_1fr] max-[650px]:grid-cols-1 gap-x-4 mb-8'>
                <Detail topic='บริษัทลูกค้า' detail={filteredData(customerCompanyOptionDatas, selectedCustomerCompany, '_id', 'company_name', 'โปรดเลือกบริษัทลูกค้า') as string} />
                <Detail topic='เลขที่ใบสั่งซื้อ (PO Number)' detail={poNumber ? poNumber : 'กรุณาระบุเลขที่ใบสั่งซื้อ'} />
                <Detail topic='เลขใบกำกับภาษี / ใบส่งสินค้า' detail={invoiceNumber ? invoiceNumber : 'กรุณาระบุเลขใบกำกับภาษี / ใบส่งสินค้า'} />
                <Detail topic='วันที่ส่งสินค้า' detail={shippingDate ? getDetailedDateInfo(new Date(shippingDate)).thaiFormat : '-'} />
                <Detail topic='สถานที่จัดส่งสินค้า' detail={shippingAddress ? shippingAddress : 'กรุณาระบุสถานที่จัดส่งสินค้า'} />
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