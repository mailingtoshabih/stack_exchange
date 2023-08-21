import { useEffect, useState } from 'react'
import axios from "axios"
import { Question } from './Question';





export const Questions = () => {


    const [questions, setQuestions] = useState([]);
    const [tab, setTab] = useState(1);






    useEffect(() => {

        const search = async () => {
            try {
                const res = await axios.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&filter=default&site=stackoverflow");

                switch (tab) {
                    // intersting Tab
                    case 1:
                        const res = await axios.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&filter=default&site=stackoverflow");
                        break;

                    // /Featured tab
                    case 2:
                        const res2 = await axios.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&filter=default&site=stackoverflow");
                        break;

                    // Hot tab
                    // Month tab
                    // Week tab

                    default:
                        break;
                }


                res && setQuestions(res.data.items);

            }
            catch (e) {
                console.log(e.message);
            }
        }

        // search();
    }, [tab])






    return (
        <div className='w-full lg:w-7/12 '>


            <div className='px-3 md:px-10 mt-5 md:mt-20 text-gray-500 text-xl font-semibold'>
                Questions
            </div>


            {/* tab bar */}

            <div className='px-3 md:px-10 mt-10 mb-5 flex space-x-5 text-gray-500 overflow-y-auto'>

                <p className={`${tab === 1 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 my-auto rounded-full`}
                    onClick={() => setTab(1)}>
                    Interesting
                </p>


                <div className='mt-1 flex space-x-3'>

                    <div className='cursor-pointer flex'
                        onClick={() => setTab(2)}>

                        <p className={`${tab === 2 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`} >
                            Featured
                        </p>

                        <span className='mx-1 p-1 px-2 border rounded-full text-orange-500 font-semibold'>
                            234
                        </span>

                    </div>


                    <p className={`${tab === 3 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(3)}>
                        Hot
                    </p>

                    <p className={`${tab === 4 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(4)}>Week</p>

                    <p className={`${tab === 5 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(5)}>Month</p>

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
