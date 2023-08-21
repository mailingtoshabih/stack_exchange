import { useEffect, useState } from 'react'
import axios from "axios"
import { Question } from './Question';







export const Questions = () => {


    const [questions, setQuestions] = useState([]);
    const [tab, setTab] = useState(1);



    const interesting_tab = async () => {
        setQuestions("");
        const res = await axios.get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&filter=default&site=stackoverflow");
        res && setQuestions(res.data.items);
    }


    const featured_tab = async () => {
        setQuestions("");
        const res = await axios.get("https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&filter=default&site=stackoverflow");
        res && setQuestions(res.data.items);
    }


    const filter = async (sort) => {
        setQuestions("");
        const res = await axios.get(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${sort}&filter=default&site=stackoverflow`);
        res && setQuestions(res.data.items);
    }



    useEffect(() => {

        const search = () => {
            try {
                switch (tab) {
                    case 1:
                        interesting_tab();
                        break;

                    case 2:
                        featured_tab();
                        break;

                    case 3:
                        filter("hot");
                        break;

                    case 4:
                        filter("week");
                        break;

                    case 5:
                        filter("month");
                        break;

                    default:
                        break;
                }
            }
            catch (e) {
                console.log(e.message);
            }
        }

        search();
    }, [tab])




    return (
        <div className='w-full lg:w-7/12 '>


            <div className='px-3 md:px-5 mt-5 md:mt-10 text-gray-500 text-xl font-semibold'>
                Questions
            </div>


            {/* tab bar */}

            <div className='px-3 md:px-5 mt-6 mb-5 flex space-x-5 text-gray-500 overflow-y-auto scrollbar-hide'>

                <button className={`${tab === 1 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 my-auto rounded-full`}
                    onClick={() => setTab(1)}>
                    Interesting
                </button>


                <div className='mt-1 flex space-x-3'>

                    <div className='cursor-pointer flex'
                        onClick={() => setTab(2)}>

                        <button className={`${tab === 2 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`} >
                            Featured
                        </button>

                        <span className='mx-1 p-1 px-2 border rounded-full text-orange-500 font-semibold'>
                            {
                                questions && questions.length
                            }
                        </span>

                    </div>


                    <button className={`${tab === 3 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(3)}>
                        Hot
                    </button>

                    <button className={`${tab === 4 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(4)}>Week</button>

                    <button className={`${tab === 5 ? "bg-orange-600 text-white" : "text-gray-500"} p-1 px-4 rounded-full`}
                        onClick={() => setTab(5)}>Month</button>

                </div>


            </div>

            <hr />



            {/* Api Questions */}

            {!questions ?

                <div className='mt-36'>
                    <svg aria-hidden="true" className="mx-auto w-8 h-8 text-gray-200 animate-spin fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>

                :

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

            }

        </div>
    )
}
