import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import ExcelJS from 'exceljs';
import { PiMicrosoftExcelLogoLight } from 'react-icons/pi';

// Component
import ContainedButton from './ContainedButton';

export default function ExcelUploadButton() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Mock API call to patch update by Excel file
    const patchUpdateByExcelApi = async ({ file: excelFile }: { file: string }) => {
        // const response = await fetch('/api/admin/product/update-by-excel', {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ excelFile }),
        // });
        console.log('excelFile', excelFile);
        return { status: 'OK', client_message: 'ไฟล์อัพโหลดสำเร็จ', data: excelFile }; // Mock response, replace with actual response handling
    }

    const patchUpdateByExcel = async (excelFile: string) => {
        try {
            const response = await patchUpdateByExcelApi({ file: excelFile });
            if (response.status === 'OK') {
                Swal.fire({
                    title: 'ดำเนินการสำเร็จ',
                    text: `file แบบ base64 : ${response.data}`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 3000,
                });
            } else {
                Swal.fire({
                    title: 'ดำเนินการไม่สำเร็จ',
                    text: response.client_message,
                    icon: 'error',
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    confirmButtonColor: 'var(--color-emeraldGreen)'
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'ดำเนินการไม่สำเร็จ',
                text: 'เกิดข้อผิดพลาดในการอัพโหลดไฟล์',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: 'var(--color-emeraldGreen)'
            });
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file && file.name.endsWith('.xlsx')) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file); // ให้ผลลัพธ์เป็น e.target.result เป็น ArrayBuffer

            // ทำงานหลังจากที่อ่านไฟล์ (บรรทัด 64) สำเร็จ
            reader.onload = async (e) => {
                const arrayBuffer = e.target?.result as ArrayBuffer;

                // Use ExcelJS to load the file
                const workbook = new ExcelJS.Workbook();
                await workbook.xlsx.load(arrayBuffer);

                // Convert ArrayBuffer to Base64
                const base64String = arrayBufferToBase64(arrayBuffer);

                Swal.fire({
                    title: `อัพโหลดไฟล์ ${file.name}`,
                    text: '',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: 'var(--color-emeraldGreen)',
                    confirmButtonText: 'อัพโหลด',
                    cancelButtonColor: 'var(--color-alarmRed)',
                    cancelButtonText: 'ไม่อัพโหลด',
                }).then(result => { if (result.isConfirmed) patchUpdateByExcel(base64String) });

                // Clear the file input after processing
                if (fileInputRef.current) fileInputRef.current.value = ''; // Reset file input value
            };
        } else {
            Swal.fire({
                title: 'ดำเนินการไม่สำเร็จ',
                text: 'กรุณาอัพโหลดไฟล์ .xlsx',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: 'var(--color-emeraldGreen)'
            })
        }
    };

    // Helper function to convert ArrayBuffer to Base64
    const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
        const uint8Array = new Uint8Array(buffer);
        const binary = String.fromCharCode(...Array.from(uint8Array));
        return window.btoa(binary); // Convert binary to base64
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) fileInputRef.current.click(); // Trigger the file input click event
    };

    return (
        <div>
            <ContainedButton
                text='อัพโหลดไฟล์'
                bgColor='bg-excelGreen'
                borderColor='border-excelGreen'
                reactIcon={<PiMicrosoftExcelLogoLight />}
                onClick={() => triggerFileInput()}
            />
            <input
                ref={fileInputRef}
                type='file'
                accept='.xlsx'
                className='hidden'
                onChange={handleFileUpload}
            />
        </div>
    );
};
