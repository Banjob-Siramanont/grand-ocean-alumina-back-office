import { useEffect, useState } from 'react';
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
import TableSecondary from '../common/table/TableSecondary';
import Filter from '../common/select/Filter';
import TwoColumnGrid from '../common/general/TwoColumnGrid';
import { dateSelector, type Period } from '../helper/utils/date';
import VerticalBarchart from '../common/chart/VerticalBarchart';
import { GREY, THEME_COLOR } from '../common/chart/colorForCharts';
import ProductInformation from './logistic/logisticPlan/components/ProductInformation';

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

const mockupDatas = [
    {
        "date": "2024-03-28",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 1
    },
    {
        "date": "2025-01-11",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 2
    },
    {
        "date": "2025-01-20",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 3
    },
    {
        "date": "2025-02-05",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 4
    },
    {
        "date": "2025-02-14",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 5
    },
    {
        "date": "2025-02-18",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 6
    },
    {
        "date": "2025-02-26",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 7
    },
    {
        "date": "2025-02-28",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 9
    },
    {
        "date": "2025-03-03",
        "amount_of_claim_history": 10,
        "accumulated_claim_history": 19
    },
    {
        "date": "2025-03-04",
        "amount_of_claim_history": 9,
        "accumulated_claim_history": 28
    },
    {
        "date": "2025-03-05",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 31
    },
    {
        "date": "2025-03-06",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 34
    },
    {
        "date": "2025-03-07",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 37
    },
    {
        "date": "2025-03-08",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 39
    },
    {
        "date": "2025-03-10",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 42
    },
    {
        "date": "2025-03-11",
        "amount_of_claim_history": 7,
        "accumulated_claim_history": 49
    },
    {
        "date": "2025-03-12",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 50
    },
    {
        "date": "2025-03-13",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 52
    },
    {
        "date": "2025-03-14",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 56
    },
    {
        "date": "2025-03-15",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 60
    },
    {
        "date": "2025-03-17",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 65
    },
    {
        "date": "2025-03-18",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 68
    },
    {
        "date": "2025-03-19",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 73
    },
    {
        "date": "2025-03-20",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 75
    },
    {
        "date": "2025-03-21",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 77
    },
    {
        "date": "2025-03-22",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 79
    },
    {
        "date": "2025-03-25",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 82
    },
    {
        "date": "2025-03-27",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 84
    },
    {
        "date": "2025-03-28",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 86
    },
    {
        "date": "2025-03-29",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 87
    },
    {
        "date": "2025-04-01",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 88
    },
    {
        "date": "2025-04-02",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 91
    },
    {
        "date": "2025-04-03",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 95
    },
    {
        "date": "2025-04-04",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 97
    },
    {
        "date": "2025-04-05",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 99
    },
    {
        "date": "2025-04-07",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 104
    },
    {
        "date": "2025-04-08",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 105
    },
    {
        "date": "2025-04-09",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 106
    },
    {
        "date": "2025-04-10",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 108
    },
    {
        "date": "2025-04-11",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 109
    },
    {
        "date": "2025-04-13",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 110
    },
    {
        "date": "2025-04-17",
        "amount_of_claim_history": 6,
        "accumulated_claim_history": 116
    },
    {
        "date": "2025-04-19",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 119
    },
    {
        "date": "2025-04-20",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 120
    },
    {
        "date": "2025-04-21",
        "amount_of_claim_history": 9,
        "accumulated_claim_history": 129
    },
    {
        "date": "2025-04-22",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 130
    },
    {
        "date": "2025-04-23",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 133
    },
    {
        "date": "2025-04-24",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 135
    },
    {
        "date": "2025-04-25",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 136
    },
    {
        "date": "2025-04-26",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 137
    },
    {
        "date": "2025-04-27",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 138
    },
    {
        "date": "2025-04-28",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 141
    },
    {
        "date": "2025-04-29",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 143
    },
    {
        "date": "2025-04-30",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 146
    },
    {
        "date": "2025-05-01",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 149
    },
    {
        "date": "2025-05-02",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 153
    },
    {
        "date": "2025-05-03",
        "amount_of_claim_history": 6,
        "accumulated_claim_history": 159
    },
    {
        "date": "2025-05-04",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 162
    },
    {
        "date": "2025-05-05",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 167
    },
    {
        "date": "2025-05-06",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 170
    },
    {
        "date": "2025-05-07",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 171
    },
    {
        "date": "2025-05-08",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 173
    },
    {
        "date": "2025-05-09",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 174
    },
    {
        "date": "2025-05-10",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 175
    },
    {
        "date": "2025-05-12",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 176
    },
    {
        "date": "2025-05-13",
        "amount_of_claim_history": 6,
        "accumulated_claim_history": 182
    },
    {
        "date": "2025-05-15",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 184
    },
    {
        "date": "2025-05-16",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 187
    },
    {
        "date": "2025-05-17",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 189
    },
    {
        "date": "2025-05-19",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 191
    },
    {
        "date": "2025-05-20",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 192
    },
    {
        "date": "2025-05-21",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 194
    },
    {
        "date": "2025-05-22",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 195
    },
    {
        "date": "2025-05-23",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 200
    },
    {
        "date": "2025-05-26",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 203
    },
    {
        "date": "2025-05-27",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 205
    },
    {
        "date": "2025-05-29",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 207
    },
    {
        "date": "2025-05-30",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 209
    },
    {
        "date": "2025-05-31",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 210
    },
    {
        "date": "2025-06-02",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 213
    },
    {
        "date": "2025-06-03",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 214
    },
    {
        "date": "2025-06-05",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 218
    },
    {
        "date": "2025-06-06",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 222
    },
    {
        "date": "2025-06-07",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 223
    },
    {
        "date": "2025-06-09",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 227
    },
    {
        "date": "2025-06-10",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 231
    },
    {
        "date": "2025-06-12",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 232
    },
    {
        "date": "2025-06-14",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 233
    },
    {
        "date": "2025-06-16",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 235
    },
    {
        "date": "2025-06-17",
        "amount_of_claim_history": 4,
        "accumulated_claim_history": 239
    },
    {
        "date": "2025-06-18",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 244
    },
    {
        "date": "2025-06-19",
        "amount_of_claim_history": 5,
        "accumulated_claim_history": 249
    },
    {
        "date": "2025-06-20",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 252
    },
    {
        "date": "2025-06-21",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 254
    },
    {
        "date": "2025-06-23",
        "amount_of_claim_history": 3,
        "accumulated_claim_history": 257
    },
    {
        "date": "2025-06-24",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 258
    },
    {
        "date": "2025-06-25",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 259
    },
    {
        "date": "2025-06-26",
        "amount_of_claim_history": 1,
        "accumulated_claim_history": 260
    },
    {
        "date": "2025-06-27",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 262
    },
    {
        "date": "2025-06-28",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 264
    },
    {
        "date": "2025-06-30",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 266
    },
    {
        "date": "2025-07-01",
        "amount_of_claim_history": 2,
        "accumulated_claim_history": 268
    }
]

const mockupProductInformationDatas = [
    {
        id: '1',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'ABC Corp',
        shippingAddress: '123 Main St, Cityville',
        poNumber: 'PO123456',
        price: 1000,
        poExpireDate: '2025-07-01',
        logisticStatus: true,
        productionStatus: false
    },
    {
        id: '2',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'XYZ Limited',
        shippingAddress: '456 Oak Avenue, Downtown',
        poNumber: 'PO123457',
        price: 1500,
        poExpireDate: '2025-07-05',
        logisticStatus: false,
        productionStatus: true
    },
    {
        id: '3',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Tech Solutions Inc',
        shippingAddress: '789 Pine Road, Uptown',
        poNumber: 'PO123458',
        price: 2000,
        poExpireDate: '2025-07-10',
        logisticStatus: true,
        productionStatus: true
    },
    {
        id: '4',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Global Industries',
        shippingAddress: '321 Elm Street, Midtown',
        poNumber: 'PO123459',
        price: 750,
        poExpireDate: '2025-07-15',
        logisticStatus: false,
        productionStatus: false
    },
    {
        id: '5',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Metro Business',
        shippingAddress: '654 Cedar Lane, Westside',
        poNumber: 'PO123460',
        price: 1200,
        poExpireDate: '2025-07-20',
        logisticStatus: true,
        productionStatus: false
    },
    {
        id: '6',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Prime Enterprises',
        shippingAddress: '987 Maple Drive, Eastside',
        poNumber: 'PO123461',
        price: 1800,
        poExpireDate: '2025-07-25',
        logisticStatus: false,
        productionStatus: true
    },
    {
        id: '7',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Future Systems',
        shippingAddress: '147 Birch Court, Northside',
        poNumber: 'PO123462',
        price: 2200,
        poExpireDate: '2025-07-30',
        logisticStatus: true,
        productionStatus: true
    },
    {
        id: '8',
        customerType: 'generalStore' as const,
        customerCompanyName: 'Innovative Solutions',
        shippingAddress: '258 Spruce Way, Southside',
        poNumber: 'PO123463',
        price: 950,
        poExpireDate: '2025-08-05',
        logisticStatus: false,
        productionStatus: false
    },
    {
        id: '9',
        customerType: 'claim' as const,
        customerCompanyName: 'Dynamic Corp',
        shippingAddress: '369 Willow Path, Central',
        poNumber: 'PO123464',
        price: 0,
        poExpireDate: '2025-08-10',
        logisticStatus: true,
        productionStatus: false
    },
    {
        id: '10',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Advanced Tech',
        shippingAddress: '741 Aspen Boulevard, Riverside',
        poNumber: 'PO123465',
        price: 1650,
        poExpireDate: '2025-08-15',
        logisticStatus: false,
        productionStatus: true
    }
];

const mockupProductInformationDatas2 = [
    {
        id: '1',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'ABC Corp',
        shippingAddress: '123 Main St, Cityville',
        poNumber: 'PO123456',
        price: 1000,
        poExpireDate: '2025-07-01',
        logisticStatus: true,
        productionStatus: false
    },
    {
        id: '2',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'XYZ Limited',
        shippingAddress: '456 Oak Avenue, Downtown',
        poNumber: 'PO123457',
        price: 1500,
        poExpireDate: '2025-07-05',
        logisticStatus: false,
        productionStatus: true
    },
    {
        id: '3',
        customerType: 'generalStore' as const,
        customerCompanyName: 'Tech Solutions Inc',
        shippingAddress: '789 Pine Road, Uptown',
        poNumber: 'PO123458',
        price: 2000,
        poExpireDate: '2025-07-10',
        logisticStatus: true,
        productionStatus: true
    },
    {
        id: '4',
        customerType: 'shoppingMall' as const,
        customerCompanyName: 'Global Industries',
        shippingAddress: '321 Elm Street, Midtown',
        poNumber: 'PO123459',
        price: 750,
        poExpireDate: '2025-07-15',
        logisticStatus: false,
        productionStatus: false
    },
    {
        id: '5',
        customerType: 'generalStore' as const,
        customerCompanyName: 'Metro Business',
        shippingAddress: '654 Cedar Lane, Westside',
        poNumber: 'PO123460',
        price: 1200,
        poExpireDate: '2025-07-20',
        logisticStatus: true,
        productionStatus: false
    },
    {
        id: '6',
        customerType: 'claim' as const,
        customerCompanyName: 'Prime Enterprises',
        shippingAddress: '987 Maple Drive, Eastside',
        poNumber: 'PO123461',
        price: 0,
        poExpireDate: '2025-07-25',
        logisticStatus: false,
        productionStatus: true
    },
];

export default function Example() {

    const [selectedOption, setSelectedOption] = useState<Period>('TW');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const [selectedCustomOption, setSelectedCustomOption] = useState<string>('เสาเหลี่ยม');

    useEffect(() => {
        const { startDate, endDate } = dateSelector(selectedOption);
        setStartDate(startDate);
        setEndDate(endDate);
        console.log(startDate, endDate);
    }, [selectedOption]);

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
            <CardPrimary className='mb-4'>
                <Topic text='Primary table design' />
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

            <CardIdentifier topicText='Secondary table design' borderColor='border-roseRed'>
                <TableSecondary />
            </CardIdentifier>

            <CardPrimary className='my-4'>
                <Topic text='Time Range Selector' />
                <Filter selectedOption={selectedOption} onClick={setSelectedOption} />
                <TwoColumnGrid className='my-4'>
                    <InputDateAndTime
                        labelTag='วันที่เริ่มต้น'
                        type='date'
                        value={startDate}
                        onChange={formattedDate => setStartDate(formattedDate)}
                    />
                    <InputDateAndTime
                        labelTag='วันที่สิ้นสุด'
                        type='date'
                        value={endDate}
                        onChange={formattedDate => setEndDate(formattedDate)}
                    />
                </TwoColumnGrid>
                <Filter
                    selectedOption={selectedCustomOption}
                    customOption={['เสาเหลี่ยม', 'โครงเหล็ก', 'ตู้กระจก', 'ขาโปร่ง']}
                    onClick={setSelectedCustomOption}
                />
            </CardPrimary>

            <CardPrimary>
                <VerticalBarchart
                    datas={mockupDatas}
                    renderKeyName={['amount_of_claim_history']}
                    barColor={[{ keyName: 'amount_of_claim_history', color: THEME_COLOR }]}
                    legendDatas={[{ name: 'ข้อมูลตัวเลขสมมติ', color: THEME_COLOR, textColor: GREY }]}
                    tooltipDatas={[{ keyName: 'amount_of_claim_history', name: 'ข้อมูลตัวเลขสมมติ', color: THEME_COLOR, unit: 'หน่วย' }]}
                    isLoading={false}
                />
            </CardPrimary>
            <CardPrimary className='my-4'>
                <div className='w-full flex justify-start items-start gap-x-4 overflow-auto'>
                    <div className='w-[600px] border border-themeColor rounded-[10px] p-4 shrink-0'>
                        {mockupProductInformationDatas.map(mockupProductInformationData => (
                            <ProductInformation key={mockupProductInformationData.id} productInformation={mockupProductInformationData} />
                        ))}
                    </div>
                    <div className='w-[600px] border border-themeColor rounded-[10px] p-4 shrink-0'>
                        {mockupProductInformationDatas2.map(mockupProductInformationData => (
                            <ProductInformation key={mockupProductInformationData.id} productInformation={mockupProductInformationData} />
                        ))}
                    </div>
                    <div className='w-[600px] border border-themeColor rounded-[10px] p-4 shrink-0'>
                        {mockupProductInformationDatas.map(mockupProductInformationData => (
                            <ProductInformation key={mockupProductInformationData.id} productInformation={mockupProductInformationData} />
                        ))}
                    </div>
                    <div className='w-[600px] border border-themeColor rounded-[10px] p-4 shrink-0'>
                        {mockupProductInformationDatas2.map(mockupProductInformationData => (
                            <ProductInformation key={mockupProductInformationData.id} productInformation={mockupProductInformationData} />
                        ))}
                    </div>
                </div>
            </CardPrimary>
        </>
    )
}
