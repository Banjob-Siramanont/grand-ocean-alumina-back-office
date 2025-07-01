import CardPrimary from '../common/card/CardPrimary';
import InputDateAndTime from '../common/input/InputDateAndTime';
import InputPrimary from '../common/input/InputPrimary';
import InputSecondary from '../common/input/InputSecondary';
import SelectPrimary from '../common/select/SelectPrimary';
import SelectSecondary from '../common/select/SelectSecondary';
import TablePrimary from '../common/table/TablePrimary';
import Topic from '../common/topic/Topic';
import TopicOfPage from '../common/topic/TopicOfPage';
import { RxTrackNext } from 'react-icons/rx';
import { IoPlaySkipBackOutline } from 'react-icons/io5';
import ActionButtons from './components/ActionButtons';
import ThreeColumnGrid from '../common/general/ThreeColumnGrid';
import CardIdentifier from '../common/card/CardIdentifier';

const mockupDatas4 = [
    {
        _id: '01',
        no: 1,
        product_name: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีขาว',
        step1: '✓',
        step2: '✓',
        step3: '✓',
        step4: '✓',
        step5: '✓',
    },
    {
        _id: '02',
        no: 2,
        product_name: 'โต๊ะทำงาน Modern Desk MD-2024 120x60x75 ซม. สีดำ',
        step1: '✓',
        step2: '✓',
        step3: '✓',
        step4: '',
        step5: '',
    },
    {
        _id: '03',
        no: 3,
        product_name: 'เก้าอี้สำนักงาน Office Chair OC-500 สีเทา',
        step1: '✓',
        step2: '✓',
        step3: '',
        step4: '',
        step5: '',
    },
    {
        _id: '04',
        no: 4,
        product_name: 'ชั้นวางของ Storage Shelf SS-150 80x40x180 ซม. สีน้ำตาล',
        step1: '✓',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
    },
    {
        _id: '05',
        no: 5,
        product_name: 'โซฟา 2 ที่นั่ง Comfort Sofa CS-250 สีครีม',
        step1: '',
        step2: '',
        step3: '',
        step4: '',
        step5: '',
    },
];

export default function Example() {
    return (
        <>
            <TopicOfPage text='Example Page' />
            <Topic text='Input Components Example' />
            <CardPrimary className='mb-4'>
                <div className='dark:text-white'>primary input design</div>
                <ThreeColumnGrid>
                    <InputDateAndTime
                        type='date'
                        labelTag='วันที่เข้าเบิก'
                        placeholder='กรุณาเลือกวันที่'
                        value={'2025-06-19'}
                        onChange={formattedDate => console.log(formattedDate)}
                        textHelper='aws;edl'
                    />
                    <InputPrimary
                        labelTag='ผู้กรอกรายละเอียดใบ PO'
                        placeholder='กรุณาระบุ'
                        type='text'
                        value={'John Doe'}
                        onChange={event => console.log(event.target.value)}
                        textHelper='aws;edl'
                    />
                    <SelectPrimary
                        labelTag='สถานะ'
                        optionDatas={[
                            { value: 'pending', displayValue: 'รอดำเนินการ' },
                            { value: 'approved', displayValue: 'อนุมัติ' },
                            { value: 'rejected', displayValue: 'ปฏิเสธ' },
                        ]}
                        selectedValue={''}
                        onChange={value => console.log(value)}
                        textHelper='test'
                    />
                </ThreeColumnGrid>
                <div className='mt-4 dark:text-white'>secondary input design</div>
                <ThreeColumnGrid>
                    <InputSecondary
                        placeholder='หมายเหตุ'
                        type='text'
                        value={''}
                        onChange={event => console.log(event.target.value)}
                        textHelper=''
                    />
                    <InputSecondary
                        placeholder='หมายเหตุ'
                        type='text'
                        value={'asdf'}
                        onChange={event => console.log(event.target.value)}
                        textHelper=''
                    />
                    <SelectSecondary
                        optionDatas={[
                            { value: 'pending', displayValue: 'รอดำเนินการ' },
                            { value: 'approved', displayValue: 'อนุมัติ' },
                            { value: 'rejected', displayValue: 'ปฏิเสธ' },
                        ]}
                        selectedValue={''}
                        onChange={value => console.log(value)}
                        textHelper='test'
                    />
                </ThreeColumnGrid>
            </CardPrimary>
            <ActionButtons onClick={() => console.log('Action button clicked')} />
            <div className='mt-4' />
            <ThreeColumnGrid>
                <CardIdentifier topicText='Card Identifier Example'>
                    <div>this is child element which can be anything</div>
                </CardIdentifier>
                <CardIdentifier topicText='Card Identifier Example' borderColor='border-roseRed'>
                    <div>this is child element which can be anything</div>
                </CardIdentifier>
                <CardIdentifier topicText='Card Identifier Example' borderColor='border-emeraldGreen'>
                    <div>this is child element which can be anything</div>
                </CardIdentifier>
                <CardIdentifier topicText='Card Identifier Example' borderColor='border-creamYellow'>
                    <div>this is child element which can be anything</div>
                </CardIdentifier>
            </ThreeColumnGrid>
            <div className='mb-4' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas4}
                    rowsPerPage={200}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ชื่อสินค้า', cssTextAlign: 'left', key: 'product_name' },
                        { tHeadTiltle: 'โครง', cssTextAlign: 'center', key: 'step1' },
                        { tHeadTiltle: 'ท็อป', cssTextAlign: 'center', key: 'step2' },
                        { tHeadTiltle: 'คอ', cssTextAlign: 'center', key: 'step3' },
                        { tHeadTiltle: 'บาน', cssTextAlign: 'center', key: 'step4' },
                        { tHeadTiltle: 'ยิงหลัง', cssTextAlign: 'center', key: 'step5' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editButtonIcon={RxTrackNext}
                    deleteButtonIcon={IoPlaySkipBackOutline}
                    editButtonText='next step'
                    deleteButtonText='back step'
                    editOnClick={id => console.log('edit', id)}
                    deleteOnClick={id => console.log('delete', id)}
                />
            </CardPrimary>
        </>
    )
}
