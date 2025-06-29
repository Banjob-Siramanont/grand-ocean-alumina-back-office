import { useState } from 'react';
import Topic from '../../../../common/topic/Topic';
import ExcelDemoDownloadButton from '../../../../common/button/ExcelDemoDownloadButton';
import ExcelUploadButton from '../../../../common/button/ExcelUploadButton';
import { IoChevronDown } from 'react-icons/io5';

export default function UploadExcel() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Topic text='อัพโหลดรายการสินค้า' />
            <div className='font-semibold dark:text-white'>เงื่อนไขการอัพโหลด</div>
            <ul className='list-disc pl-5 dark:text-white mb-4'>
                <li>ไฟล์ที่อัพโหลดต้องเป็นไฟล์ Excel (.xlsx) เท่านั้น</li>
            </ul>
            <div className='flex justify-start items-center gap-2 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='font-semibold dark:text-white'>คำอธิบายหัวข้อการอัพโหลด</div>
                <IoChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-[400ms]`} />

            </div>
            {isOpen && (
                <ul className='list-disc pl-5 dark:text-white'>
                    <li>id : รหัสสินค้า <span className='text-alarmRed'>(required)</span></li>
                    <li>product_name : ชื่อสินค้า <span className='text-alarmRed'>(required)</span></li>
                    <li>product_unit : หน่วยนับ <span className='text-alarmRed'>(required)</span></li>
                    <li>product_weight : น้ำหนักสินค้า (kg) <span className='text-alarmRed'>(required)</span></li>
                    <li>
                        product_category : ประเภทสินค้า <span className='text-alarmRed'>(required)</span>
                        <ul className='list-none pl-5'>
                            <li>storage_cabinet : ตู้เก็บของเอนกประสงค์</li>
                            <li>rice_cabinet : ตู้กับข้าว</li>
                            <li>gas_stove_cabinet : ตู้วางเตาแก๊ส</li>
                            <li>wardrobe : ตู้เสื้อผ้า</li>
                            <li>shoe_cabinet : ตู้รองเท้า</li>
                        </ul>
                    </li>
                    <li>
                        product_sub_category : ประเภทสินค้าย่อย <span className='text-alarmRed'>(required)</span>
                        <ul className='list-none pl-5'>
                            <li>storage_2_door : ตู้เก็บของ 2 ประตู</li>
                            <li>storage_3_door : ตู้เก็บของ 3 ประตู</li>
                            <li>rice_small : ตู้กับข้าวขนาดเล็ก</li>
                            <li>rice_large : ตู้กับข้าวขนาดใหญ่</li>
                            <li>gas_standard : ตู้วางเตาแก๊สมาตรฐาน</li>
                            <li>gas_with_drawer : ตู้วางเตาแก๊สพร้อมลิ้นชัก</li>
                            <li>wardrobe_2_door : ตู้เสื้อผ้า 2 บาน</li>
                            <li>wardrobe_3_door : ตู้เสื้อผ้า 3 บาน</li>
                            <li>shoe_4_tier : ตู้รองเท้า 4 ชั้น</li>
                            <li>shoe_6_tier : ตู้รองเท้า 6 ชั้น</li>
                        </ul>
                    </li>
                    <li>
                        production_line : Line ที่ผลิตได้ <span className='text-alarmRed'>(required)</span>
                        <ul className='list-none pl-5'>
                            <li>line_1 : Line 1</li>
                            <li>line_2 : Line 2</li>
                            <li>line_3 : Line 3</li>
                            <li>line_4 : Line 4</li>
                        </ul>
                    </li>
                    <li>
                        store_group : กลุ่มร้านค้า <span className='text-alarmRed'>(required)</span>
                        <ul className='list-none pl-5'>
                            <li>groupA : กลุ่มร้านค้า A</li>
                            <li>groupB : กลุ่มร้านค้า B</li>
                            <li>groupC : กลุ่มร้านค้า C</li>
                            <li>groupD : กลุ่มร้านค้า D</li>
                        </ul>
                    </li>
                    <li>product_price_per_unit : ราคา/หน่วย (บาท) <span className='text-alarmRed'>(required)</span></li>
                </ul>
            )}
            <div className='flex justify-between items-center mt-4'>
                <ExcelDemoDownloadButton />
                <ExcelUploadButton />
            </div>
        </>
    )
}
