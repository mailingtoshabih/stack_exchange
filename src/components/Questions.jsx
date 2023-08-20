import { useEffect, useState } from 'react'
import axios from "axios"
import { Question } from './Question';





export const Questions = () => {


    const [questions, setQuestions] = useState([]);


    useEffect(() => {

        const search = async () => {
            try {
                const res = await axios.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&filter=default&site=stackoverflow");
                res && setQuestions(res.data.items)
            }
            catch (e) {
                console.log(e.message);
            }
        }

        search();
    }, [])






    return (
        <div className='w-full lg:w-7/12 '>


            <div className='px-10 mt-20 text-gray-500 text-xl font-semibold'>
                Questions
            </div>


            <div className='px-10 mt-10 mb-5 flex space-x-5 text-gray-500'>

                <p className='p-1 px-4 bg-orange-500 text-white rounded-full'>
                    All</p>

                <div className='mt-1 flex space-x-5'>
                    <p className='cursor-pointer'>Featured</p>

                    <p className='cursor-pointer'>Hot</p>

                    <p className='cursor-pointer'>Weeks</p>

                    <p className='cursor-pointer'>Months</p>
                </div>


            </div>

            <hr />



            {/* Api Questions */}

            <div className='p-4 w-full h-screen  overflow-y-auto'>

                {/* mapping over here */}
                {
                    questions?.map((question, index) => (

                        <div key={index}>
                            <Question question={question} />

                            <hr />
                        </div>
                    ))
                }


            </div>
        </div>
    )
}
