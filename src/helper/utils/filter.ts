import type { Option } from '../../types/common/commonTypes';

export const filteredData = (
    optionDatas: Option[],
    selectedValue: string | number,
    keyValue: string,
    keyDisplayValue: string,
    placeholder?: string,
): string | number => {
    const filteredValue = optionDatas.filter(optionData => optionData[keyValue] === selectedValue);

    if (filteredValue?.length > 0) return filteredValue[0][keyDisplayValue]
    return placeholder || 'ไม่พบข้อมูล';
};