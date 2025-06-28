import type { Data } from '../../../types/common/tableTypes';

type CurrentRowsInformationProps = {
    page: number;
    selectedRowPerPage: number;
    filteredData: Data[];
}

export default function CurrentRowsInformation({ page, selectedRowPerPage, filteredData }: CurrentRowsInformationProps) {
    return (
        <div className='text-base dark:text-white mr-4'>
            {(page - 1) * selectedRowPerPage + 1}-
            {(page * selectedRowPerPage - 1) >= filteredData.length
                ? filteredData.length
                : page * selectedRowPerPage}{' '}
            of {filteredData.length}
        </div>
    )
}
