import { useEffect, useState } from 'react';
import type { Data } from '../../types/common/tableTypes';

const calculateRange = (data: Data[], rowsPerPage: number) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data: Data[], page: number, rowsPerPage: number) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: Data[], page: number, rowsPerPage: number) => {
    const [tableRange, setTableRange] = useState<number[]>([]);
    const [slice, setSlice] = useState<Data[]>([]);
    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice, rowsPerPage]);
    return { slice, range: tableRange };
};

export default useTable;