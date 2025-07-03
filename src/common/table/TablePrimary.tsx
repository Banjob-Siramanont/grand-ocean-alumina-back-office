import { useCallback, useEffect, useState } from 'react';
import useTable from './UseTable';

// Component
import TableSearch from './components/TableSearch';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import TableActionButtons from './components/TableActionButtons';
import TableFooter from './components/TableFooter';
import RowPerPage from './components/RowPerPage';
import CurrentRowsInformation from './components/CurrentRowsInformation';

// css
import styles from './Table.module.css';

// Types
import type { Data, FormattedDataKey, TableHead } from '../../types/common/tableTypes';
import type { IconType } from 'react-icons/lib';


type TablePrimaryProps = {
    data: Data[];
    rowsPerPage: number;
    tHeadDatas: TableHead[];
    isHideTableSearch?: boolean;
    keyNameOfId: string;
    hasEditBtn?: boolean;
    editButtonText?: string;
    editButtonIcon?: IconType;
    editOnClick?: (id: string | number) => void;
    hasExtraBtn?: boolean;
    extraButtonText?: string;
    extraButtonIcon?: IconType;
    extraOnClick?: (id: string | number) => void;
    hasDeleteBtn?: boolean;
    deleteButtonText?: string;
    deleteButtonIcon?: IconType;
    deleteOnClick?: (id: string | number) => void;
}

export default function TablePrimary({
    data,
    rowsPerPage,
    tHeadDatas,
    isHideTableSearch = false,
    keyNameOfId = 'id',
    hasEditBtn = true,
    editButtonText,
    editButtonIcon,
    editOnClick = () => { },
    hasExtraBtn = false,
    extraButtonText,
    extraButtonIcon,
    extraOnClick = () => { },
    hasDeleteBtn = true,
    deleteButtonText,
    deleteButtonIcon,
    deleteOnClick = () => { },
}: TablePrimaryProps) {

    const [page, setPage] = useState<number>(1);
    const [rawData, setRawData] = useState<Data[]>(data);
    const [filteredData, setFilteredData] = useState<Data[]>(data);
    const [selectedRowPerPage, setSelectedRowPerPage] = useState<number>(rowsPerPage);
    const { slice, range } = useTable(filteredData, page, selectedRowPerPage);

    const formattedDataKeys = tHeadDatas
        .filter(({ key }) => key)
        .map(({ key }) => ({ keyName: key }));

    const handleSelectRowOnChange = useCallback((newRowsPerPage: number, newPage: number) => {
        setSelectedRowPerPage(newRowsPerPage);
        setPage(newPage);
    }, []);

    useEffect(() => {
        setRawData(data);
    }, [data]);

    return (
        <div>
            {!isHideTableSearch && (
                <>
                    <TableSearch
                        rawData={rawData}
                        formattedDataKeys={formattedDataKeys as FormattedDataKey[]}
                        setFilteredData={data => setFilteredData(data)}
                    />
                    <br />
                </>
            )}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <TableHeader
                        tHeadDatas={tHeadDatas}
                        rawData={rawData}
                        setRawData={newData => setRawData(newData)}
                    />
                    <tbody>
                        {slice.map((element, index) => (
                            <tr key={index} className={`${styles.tableRowItems} dark:text-white border-lightGrey dark:border-black hover:bg-veryLightGrey dark:hover:bg-tertiaryBlack`}>
                                {formattedDataKeys.map((formattedDataKey, idx) => (
                                    <TableRow
                                        idx={idx}
                                        key={idx}
                                        element={element}
                                        tHeadDatas={tHeadDatas}
                                        formattedDataKey={formattedDataKey}
                                    />
                                ))}

                                <td className={`${!hasEditBtn && !hasDeleteBtn ? 'hidden' : ''} py-2 px-1.5`}>
                                    <TableActionButtons
                                        editButtonText={editButtonText}
                                        extraButtonText={extraButtonText}
                                        deleteButtonText={deleteButtonText}
                                        hasEditBtn={hasEditBtn}
                                        hasExtraBtn={hasExtraBtn}
                                        hasDeleteBtn={hasDeleteBtn}
                                        editButtonIcon={editButtonIcon}
                                        extraButtonIcon={extraButtonIcon}
                                        deleteButtonIcon={deleteButtonIcon}
                                        element={element}
                                        keyNameOfId={keyNameOfId}
                                        editOnClick={targetedElement => editOnClick(targetedElement)}
                                        extraOnClick={targetedElement => extraOnClick(targetedElement)}
                                        deleteOnClick={targetedElement => deleteOnClick(targetedElement)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex justify-end items-center flex-wrap mt-6'>
                <RowPerPage
                    page={page}
                    selectedRowPerPage={selectedRowPerPage}
                    handleSelectRowOnChange={(newRowsPerPage, newPage) => handleSelectRowOnChange(newRowsPerPage, newPage)}
                />
                <CurrentRowsInformation
                    page={page}
                    selectedRowPerPage={selectedRowPerPage}
                    filteredData={filteredData}
                />
                <TableFooter
                    range={range}
                    slice={slice}
                    setPage={newValue => setPage(newValue)}
                    page={page}
                />
            </div>
        </div>
    );
}
