import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, type TooltipContentProps } from 'recharts';

// Helper
import { currency } from '../../helper/utils/currency';

// Color
import { BLACK, GREY } from './colorForCharts';


type ResultDataKeyName = { keyName: string };
type DataItem = { [key: string]: number | string };
type VerticalBarchartProps = {
    datas: DataItem[];
    renderKeyName: string[];
    barColor: { keyName: string; color: string }[];
    legendDatas: { name: string; color: string; textColor: string }[];
    sumOfDatas?: { name: string; value: number; textColor: string; unit: string }[];
    tooltipDatas: { keyName: string; name: string; color: string; unit: string }[];
    denominatorKeyName?: string;
    displayPercentage?: boolean;
    isLoading: boolean;
};

export default function VerticalBarchart({ datas, renderKeyName, barColor, legendDatas, sumOfDatas, tooltipDatas, displayPercentage = false, denominatorKeyName = '', isLoading = false }: VerticalBarchartProps) {

    const dataKeyNames = datas.length > 0 ? Object.keys(datas[0]) : []; // get keyName from object
    const formattedDataKeys = dataKeyNames.map(dataKeyName => ({ keyName: dataKeyName })); // [{keyName: 'string1'}, {keyName: 'string2'}, {keyName: 'string3'}]
    const resultDataKeyNames: ResultDataKeyName[] = formattedDataKeys
        .map(formattedDataKey => {
            if (formattedDataKey.keyName !== 'date') return formattedDataKey
            return null
        })
        .filter(item => item !== null);


    const checkBarSize = (resultDataKeyName: ResultDataKeyName) => {
        if (renderKeyName.includes(resultDataKeyName.keyName)) return 20;
        else return 0;
    };

    const checkDisplay = (resultDataKeyName: ResultDataKeyName) => {
        if (renderKeyName.includes(resultDataKeyName.keyName)) return false;
        return true;
    };

    const checkColor = (resultDataKeyName: ResultDataKeyName) => {
        const colorObject = barColor.find(item => item.keyName === resultDataKeyName.keyName);
        return colorObject ? colorObject.color : BLACK; // default to black if no color found
    };

    const checkTooltipName = (payloadName: string) => {
        const tooltipObject = tooltipDatas.find(item => item.keyName === payloadName);
        return tooltipObject ? tooltipObject.name : '';
    };

    const checkTooltipTextColor = (payloadName: string) => {
        const tooltipObject = tooltipDatas.find(item => item.keyName === payloadName);
        return tooltipObject ? tooltipObject.color : BLACK; // default to black if no color found
    };

    const checkTooltipUnit = (payloadName: string) => {
        const tooltipObject = tooltipDatas.find(item => item.keyName === payloadName);
        return tooltipObject ? tooltipObject.unit : '';
    };

    const yAxisValue = (value: number) => {
        if (value >= 10000 && value < 1000000) return `${(value / 1000).toFixed(0)}k`
        else if (value >= 1000000) return `${currency(Number((value / 1000000).toFixed(0)))}M`
        return currency(value, 0, 2)
    };

    const customTooltip = ({ active, payload }: TooltipContentProps<number, string>) => {
        if (active && payload && payload.length) {
            const category = payload[0].payload[formattedDataKeys[0].keyName];
            return (
                <div className='shadow-basic text-base'>
                    <div className={`text-lg text-white text-center font-bold bg-themeColor rounded-t-lg py-1 px-3`}>{category}</div>

                    <div className='grid grid-cols-[auto_auto] gap-x-8 px-3 py-2 border border-themeColor bg-white dark:bg-secondaryBlack rounded-b-lg font-normal'>
                        {payload.map((pl, index: number) => (
                            <React.Fragment key={index}>
                                {checkTooltipName(pl.name) && (
                                    <>
                                        <div style={{ color: checkTooltipTextColor(pl.name) }}>{checkTooltipName(pl.name)}</div>
                                        <div className='text-right' style={{ color: checkTooltipTextColor(pl.name) }}>
                                            {currency(pl.value)} {displayPercentage ? `(${currency(pl.value / (payload[0].payload[denominatorKeyName] as number) * 100)}%)` : ''} {checkTooltipUnit(pl.name)}
                                        </div>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            );
        }
        return <div></div>
    };

    return (
        <>
            {datas.length > 0 && (
                <div>
                    <div className='grid grid-cols-1 gap-2 text-base'>
                        {sumOfDatas?.map(sumOfData => (
                            <div key={sumOfData.name} style={{ color: sumOfData.textColor }}>
                                {sumOfData.name}: {currency(sumOfData.value)} {sumOfData.unit}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-x-8 text-base py-5 max-[660px]:gap-x-2'>
                        {legendDatas.map(legendData => (
                            <div key={legendData.name} className='flex justify-start items-center flex-wrap gap-x-2'>
                                <div className='rounded-full w-5 h-5' style={{ backgroundColor: legendData.color }}></div>
                                <div style={{ color: legendData.textColor }}>{legendData.name}</div>
                            </div>
                        ))}
                    </div>
                    <ResponsiveContainer width='100%' height={500}>
                        <BarChart data={datas} barGap={0}>
                            <CartesianGrid strokeDasharray='' vertical={false} />
                            <XAxis
                                dataKey={'date'}
                                height={100}
                                // interval={0} comment เอาไว้เพื่อให้แกน x ซ่อนบางรายการโดยอัตโนมัติ เมื่อรายการเยอะเกินไปในหน้าจอของ user
                                tick={props => (
                                    <g transform={`translate(${props.x},${props.y}) rotate(-45)`}>
                                        <text x={0} y={0} dy={5} textAnchor='end' fontSize={13} fill={GREY}>
                                            {props.payload.value}
                                        </text>
                                    </g>
                                )}
                                tickLine={false}
                            />
                            <YAxis
                                axisLine={false}
                                tick={{ fontSize: 13, fill: GREY }}
                                tickLine={false}
                                tickFormatter={value => yAxisValue(value)}
                            />
                            <Tooltip
                                content={customTooltip}
                                wrapperStyle={{ outline: 'none' }}
                            />
                            {resultDataKeyNames.map(resultDataKeyName => (
                                <React.Fragment key={resultDataKeyName.keyName}>
                                    <Bar
                                        radius={[4, 4, 0, 0]}
                                        dataKey={resultDataKeyName.keyName}
                                        fill={checkColor(resultDataKeyName)}
                                        barSize={checkBarSize(resultDataKeyName)}
                                        hide={checkDisplay(resultDataKeyName)}
                                    />
                                </React.Fragment>
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
            {(datas.length < 1 && !isLoading) && (
                <div className='flex justify-center items-center h-[570px] text-orange text-[20px] p-5 shadow-basic'>ไม่มีข้อมูล</div>
            )}
            {(datas.length < 1 && isLoading) && (
                <div className='flex justify-center items-center h-[570px] text-orange text-[20px] p-5 shadow-basic'>กำลังโหลด...</div>
            )}
        </>
    )
}