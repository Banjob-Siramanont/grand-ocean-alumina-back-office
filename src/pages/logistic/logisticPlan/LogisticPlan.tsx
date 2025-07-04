import { useEffect, useState } from 'react';

// Components
import TwoColumnGrid from '../../../common/general/TwoColumnGrid';
import InputDateAndTime from '../../../common/input/InputDateAndTime';
import Filter from '../../../common/select/Filter';
import TopicOfPage from '../../../common/topic/TopicOfPage';

// Types
import { dateSelector, type Period } from '../../../helper/utils/date';
import ProductInformation from './components/ProductInformation';

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

export default function LogisticPlan() {

    const [selectedOption, setSelectedOption] = useState<Period>('TW');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    useEffect(() => {
        const { startDate, endDate } = dateSelector(selectedOption);
        setStartDate(startDate);
        setEndDate(endDate);
    }, [selectedOption]);

    return (
        <>
            <TopicOfPage text='ตารางจัดส่ง' />
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
        </>
    )
}
