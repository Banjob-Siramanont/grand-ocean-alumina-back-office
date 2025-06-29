import Topic from '../../../../common/topic/Topic';
import ExcelDemoDownloadButton from '../../../../common/button/ExcelDemoDownloadButton';
import ExcelUploadButton from '../../../../common/button/ExcelUploadButton';

export default function UploadExcel() {
    return (
        <>
            <Topic text='อัพโหลดรายการสินค้า' />
            <div className='font-semibold dark:text-white'>เงื่อนไขการอัพโหลด</div>
            <ul className='list-disc pl-5 dark:text-white mb-4'>
                <li>ไฟล์ที่อัพโหลดต้องเป็นไฟล์ Excel (.xlsx) เท่านั้น</li>
            </ul>
            <div className='font-semibold dark:text-white'>คำอธิบายหัวข้อการอัพโหลด</div>
            <ul className='list-disc pl-5 dark:text-white mb-4'>
                <li>id : รหัสสินค้า <span className='text-alarmRed'>(required)</span></li>
                <li>product_name : ชื่อสินค้า <span className='text-alarmRed'>(required)</span></li>
                <li>product_unit : หน่วยนับ <span className='text-alarmRed'>(required)</span></li>
                <li>product_weight : น้ำหนักสินค้า (kg) <span className='text-alarmRed'>(required)</span></li>
                <li>product_category : ประเภทสินค้า <span className='text-alarmRed'>(required)</span></li>
                <li>product_sub_category : ประเภทสินค้าย่อย <span className='text-alarmRed'>(required)</span></li>
                <li>production_line : Line ที่ผลิตได้ <span className='text-alarmRed'>(required)</span></li>
                <li>store_group : กลุ่มร้านค้า <span className='text-alarmRed'>(required)</span></li>
                <li>product_price_per_unit : ราคา/หน่วย (บาท) <span className='text-alarmRed'>(required)</span></li>
            </ul>
            <div className='flex justify-between items-center'>
                <ExcelDemoDownloadButton />
                <ExcelUploadButton />
            </div>
        </>
    )
}
