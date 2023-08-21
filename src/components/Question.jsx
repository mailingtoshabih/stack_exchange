import React from 'react'
import { Interaction } from './Interaction';

export const Question = ({ question }) => {


    let date = new Date(question?.creation_date * 1000)
    date = date.toLocaleString();

   

    return (

        <div className='my-4 w-full flex'>

            {/* question title */}

            <div className='w-full md:w-8/12'>

                <p className='my-1 text-lg text-[#0A95FF] capitalize'>
                    {question?.title}
                </p>

                <div className='my-4 flex space-x-3'>
                    {
                        question?.tags?.slice(0, 3).map((m, index) => (
                            <p key={index}
                                className='text-xs p-1 px-3 border rounded-full text-gray-600'>
                                {m}
                            </p>
                        ))
                    }
                </div>



                <div className='flex space-x-5 text-gray-500'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        className="my-auto w-5 h-5 text-orange-600">
                        <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                    </svg>

                    <div className='text-sm'>

                        Answered on
                        &nbsp;{date}

                        <span className='font-semibold cursor-pointer' onClick={(() => location.reload)}>
                            &nbsp;{question?.owner?.display_name}
                        </span>
                    </div>

                </div>



                {/*Mobile Size : votes, views, answer */}

                <div className='mt-4 block md:hidden w-full h-20'>
                    <Interaction type={"v"} question={question} />
                </div>


            </div>


            <div className='hidden md:block w-4/12 my-auto'>
                <Interaction type={"horizontal"} question={question} />
            </div>


        </div>
    )
}
