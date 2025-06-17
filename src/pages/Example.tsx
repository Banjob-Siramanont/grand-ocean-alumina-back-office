import InputDateAndTime from '../common/input/InputDateAndTime';
import InputPrimary from '../common/input/InputPrimary';
import InputSecondary from '../common/input/InputSecondary';
import Topic from '../common/topic/Topic';
import TopicOfPage from '../common/topic/TopicOfPage';

export default function Example() {
    return (
        <>
            <TopicOfPage text='Example Page' />
            <Topic text='Input Components Example' />
            <div>primary input design</div>
            <div className='grid grid-cols-3 gap-4'>
                <InputDateAndTime
                    type='date'
                    labelTag='วันที่เข้าเบิก'
                    placeholder='กรุณาเลือกวันที่'
                    value={'2025-06-19'}
                    onChange={formattedDate => console.log(formattedDate)}
                    textHelper='aws;edl'
                />
                <InputPrimary
                    labelTag='ผู้ทำเคลม'
                    placeholder='กรุณาระบุ'
                    type='text'
                    value={'John Doe'}
                    onChange={event => console.log(event.target.value)}
                    textHelper='aws;edl'
                />
            </div>
            <div className='mt-4'>secondary input design</div>
            <div className='grid grid-cols-3 gap-4'>
                <InputSecondary
                    placeholder='หมายเหตุ'
                    type='text'
                    value={'sdfg'}
                    onChange={event => console.log(event.target.value)}
                    textHelper='aws;edl'
                />
            </div>
        </>
    )
}
