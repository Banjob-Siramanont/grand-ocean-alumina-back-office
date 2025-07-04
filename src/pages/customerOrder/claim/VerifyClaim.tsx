import { useNavigate } from 'react-router-dom';

// Components
import ContainedButton from '../../../common/button/ContainedButton';
import OutlinedButton from '../../../common/button/OutlinedButton';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import SummaryInformation from './components/SummaryInformation';
import SummaryTable from './components/SummaryTable';

export default function VerifyClaim() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='ตรวจสอบข้อมูลส่งซ่อม / คืน / เปลี่ยน' />
            <CardPrimary>
                <SummaryInformation />
                <SummaryTable />
                <div className='flex justify-end items-center gap-x-2 mt-8'>
                    <OutlinedButton
                        text='แก้ไขข้อมูล'
                        textColor='text-themeColor'
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => navigate(-1)}
                    />
                    <ContainedButton
                        text={id ? 'บันทึกข้อมูล' : 'เพิ่มรายการ'}
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => {
                            if (id) console.log('edit claim with ID:', id);
                            else console.log('add new claim');
                        }}
                    />
                </div>
            </CardPrimary>
        </>
    )
}
