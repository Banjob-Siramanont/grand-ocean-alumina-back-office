import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs';

// Component
import OutlinedButton from './OutlinedButton';

export default function ExcelDemoDownloadButton() {
    const generateExcel = async () => {
        // Create a new workbook and add a worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');

        // Define the header row
        worksheet.columns = [
            { header: 'รหัสสินค้า', key: 'id', width: 10 },
            { header: 'ชื่อสินค้า', key: 'product_name', width: 20 },
            { header: 'หน่วยนับ', key: 'product_unit', width: 20 },
            { header: 'น้ำหนักสินค้า (kg)', key: 'product_weight', width: 20 },
            { header: 'ประเภทสินค้า', key: 'product_type', width: 15 },
            { header: 'ประเภทสินค้าย่อย', key: 'product_subtype', width: 30 },
            { header: 'Line ที่ผลิตได้', key: 'production_line', width: 10 },
            { header: 'กลุ่มร้านค้า', key: 'customer_group', width: 20 },
            { header: 'ราคาสินค้า / หน่วย (บาท)', key: 'product_price_per_unit', width: 60 },
        ];

        // Create a buffer and write the file
        const buffer = await workbook.xlsx.writeBuffer();

        // Use FileSaver to save the file locally
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'update product.xlsx');
    };

    return (
        <OutlinedButton
            className='text-sm'
            text='ดาวน์โหลดไฟล์หัวข้อ'
            textColor='text-excelGreen'
            bgColor='bg-excelGreen'
            borderColor='border-excelGreen'
            reactIcon={<BsDownload />}
            onClick={() => generateExcel()}
        />
    );
};
