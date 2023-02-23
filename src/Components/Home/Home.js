import React, { useState } from 'react';
import DailyRoutine from '../DailyRoutine/DailyRoutine';
import { data } from '../Data/RoutineTime';
import { Link } from 'react-router-dom';


const currentDate = new Date();

const {
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds,
    d
} = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
    milliseconds: currentDate.getMilliseconds(),
    d: currentDate.getDay()
};
const td = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(d)
const dayName = td[d];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const showMonth = monthNames[month]

const dataOfRoutine = data
console.log(dataOfRoutine)
const singleDay = data[d];

const Home = () => {
    return (
        <div>
            <h2 className='p-4 text-3xl font-bold text-cyan-800'>{dayName}, {day} {showMonth} {year}</h2>
            <h3 className='p-3 text-xl mb-4 font-semibold text-cyan-700'>Todays Routine</h3>
            {
                d>4 && <p className='text-lg'>No class today</p>

            }
            {
                d<5 && <>
                    <DailyRoutine key={singleDay.id} singleDay={singleDay}></DailyRoutine>
                </>
            }
            
            <Link to={'/routine'}><button type="button" className="px-8 py-3 mt-6 font-semibold border border-2 rounded border-teal-800 text-teal-800">See Full Routine</button></Link>
            
            <a href='https://drive.google.com/file/d/1XH7KUsUQPwFeJ6kMNCB46UOKEWT7ufIg/view?usp=share_link' target={'_blank'}><button type="button" className="px-8 py-3 ml-6 font-semibold border border-2 rounded border-teal-800 text-teal-800">Download Routine</button></a>
        </div>
    );
};

export default Home;