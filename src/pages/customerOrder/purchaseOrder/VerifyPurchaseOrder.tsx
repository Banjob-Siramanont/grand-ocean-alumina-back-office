import { useNavigate } from 'react-router-dom';
import OutlinedButton from '../../../common/button/OutlinedButton';
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import SummaryInformation from './components/SummaryInformation';
import SummaryTable from './components/SummaryTable';
import ContainedButton from '../../../common/button/ContainedButton';

export default function VerifyPurchaseOrder() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='ตรวจสอบข้อมูลใบ PO' />
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
                        text='เพิ่มใบ PO'
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => console.log('Add Purchase Order')}
                    />
                </div>
            </CardPrimary>
        </>

    )
}
