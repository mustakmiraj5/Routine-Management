import React from 'react';

const DailyRoutine = ({singleDay}) => {
    console.log(singleDay)
    const schedules = singleDay.classes 
    // console.log(schedules)
    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                {
                    schedules.map(schedule => <div key={schedule._id} className='p-6 bg-teal-500 rounded-lg border-double border-2 font-semibold text-white mx-4 drop-shadow-xl'>
                        <h2 className='text-2xl'>Time: {schedule.period}</h2>
                        <p>{schedule.class}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DailyRoutine;