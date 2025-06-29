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
            { header: 'id', key: 'id', width: 10 },
            { header: 'product_name', key: 'product_name', width: 20 },
            { header: 'product_unit', key: 'product_unit', width: 20 },
            { header: 'product_weight', key: 'product_weight', width: 20 },
            { header: 'product_category', key: 'product_category', width: 20 },
            { header: 'product_sub_category', key: 'product_sub_category', width: 25 },
            { header: 'production_line', key: 'production_line', width: 20 },
            { header: 'store_group', key: 'store_group', width: 20 },
            { header: 'product_price_per_unit', key: 'product_price_per_unit', width: 25 },
        ];

        // Create a buffer and write the file
        const buffer = await workbook.xlsx.writeBuffer();

        // Use FileSaver to save the file locally
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'update product.xlsx');
    };

    return (
        <OutlinedButton
            text='ดาวน์โหลดไฟล์หัวข้อ'
            textColor='text-excelGreen'
            bgColor='bg-excelGreen'
            borderColor='border-excelGreen'
            reactIcon={<BsDownload />}
            onClick={() => generateExcel()}
        />
    );
};
