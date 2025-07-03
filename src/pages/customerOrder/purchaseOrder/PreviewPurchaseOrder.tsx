import { useNavigate } from 'react-router-dom';

// Components
import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import SummaryInformation from './components/SummaryInformation';
import SummaryTable from './components/SummaryTable';
import ContainedButton from '../../../common/button/ContainedButton';

export default function PreviewPurchaseOrder() {

    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='รายละเอียดข้อมูลใบ PO' />
            <CardPrimary>
                <SummaryInformation />
                <SummaryTable />
                <div className='flex justify-end items-center gap-x-2 mt-8'>
                    <ContainedButton
                        text='แก้ไขข้อมูล'
                        bgColor='bg-themeColor'
                        borderColor='border-themeColor'
                        onClick={() => navigate(`/edit-purchase-order?id=${id}`)}
                    />
                </div>
            </CardPrimary>
        </>

    )
}
