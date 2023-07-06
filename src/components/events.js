import React from 'react'

const Events = () => {
    return (
        <div className='grid gap-7'>
            {Event_Data?.map((item, id) => {
                return <div key={id} className='flex gap-7'>
                    <div className='bg-[#f0b504] h-[80px] w-[80px] rounded-full flex items-center justify-center p-4'>
                        <span className='text-base font-extrabold text-white Helvetica_Bold text-center'>
                            {item?.date}
                        </span>
                    </div>
                    <div>
                        <h2 className='text-base font-extrabold text-white Helvetica_Bold'>
                          {item?.name}
                        </h2>
                        <p className='text-base font-extrabold text-white Helvetica_Bold'>
                            {item?.type}
                        </p>
                        <p className='text-base font-extrabold text-white Helvetica_Bold'>
                            {item?.time}  —  {item?.link_txt}
                        </p>
                    </div>
                </div>
            })}
        </div>

    )
}

export default Events

export const Event_Data = [
    {
        name: "JP POOL PARTY. HQ2",
        date: "AUGUST 19 2023",
        link_txt: "LEARN MORE + RSVP",
        type: "CLASSICS",
        time: "10PM 4AM"
    },
    {
        name: "JP HQ2",
        date: "AUGUST 19 2023",
        link_txt: "LEARN MORE + RSVP",
        type: "CLASSICS",
        time: "10PM 4AM"
    },
]