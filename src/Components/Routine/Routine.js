import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { data } from '../Data/RoutineTime'
import DailyRoutine from '../DailyRoutine/DailyRoutine';

const classNames = (...classes) => classes.filter(Boolean).join(' ');
const fullRoutine = data;
export default function Example() {
    let [categories] = useState(fullRoutine)
    // console.log(categories)

    return (
        <div className="w-full p-4">
        <h2 className='text-2xl font-semibold p-5 text-teal-700'>Full Routine</h2>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-teal-900/20 p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category.id}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-black'
                                )
                            }
                        >
                            {category.today}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {categories.map((day) => (
                        <Tab.Panel
                            key={day.id}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-80 ring-offset-2 ring-offset-teal-800 focus:outline-none focus:ring-2'
                            )}
                        >
                            {
                                <DailyRoutine key={day.idx} singleDay={day}></DailyRoutine>
                            }
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
