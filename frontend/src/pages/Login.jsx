import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Login() {

    // const [accessKeyLog, setAccessKeyLog] = useState("")
    // const [passwordLog, setPasswordLog] = useState("")

    // const loginAttempt = () => {
    //     Axios.get("http://localhost:5000/login", {
    //         accesskey: accessKeyLog,
    //         password: passwordLog,
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }

    return (
    <>
        <h1>Login Page</h1>
        <Link to={"/"}>To Home</Link>

        <form>
            <h1 className='text-5xl mb-5 font-bold'>Login Form</h1>
            <label className='block mt-2 text-sm font-medium text-gray-900' htmlFor="accessKey">Access Key</label>
            {/* <input onChange={(e) => {
                setAccessKeyLog(e.target.value)
            }} className='bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' type="text" name="accessKey" id="accessKey" placeholder='ex. jB23-9pM5-23Rc' required/>

            <label className='block mt-2 text-sm font-medium text-gray-900' htmlFor="password">Password</label>
            <input onChange={(e) => {
                setPasswordLog(e.target.value)
            }} className='bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' type="password" name="password" id="password" required/> */}

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Submit</button>
        </form>
    </>
    )
}

export default Login
