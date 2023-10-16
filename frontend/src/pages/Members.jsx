import {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchUserData = async() => {
            try {
                const res = axios.get("http://localhost:5000/get")
                console.log(res);
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    }, [])
}

function Members() {
    

    return (
    <div>
        <h1 className='heading-1'>Members Page</h1>

        {/* Table - List of Members */}
        {/* <table className='table'>
            <thead>
                <tr>
                    <th>Account No.</th>
                    <th>Email</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody> */}
                {/* { userData.map( (
                    userData, index
                ) => 
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{userData.email}</td>
                        <td>{userData.name}</td>
                    </tr>
                ) } */}
                {/* <tr>
                    <td>{message}</td>
                </tr>
            </tbody>
        </table> */}
    </div>
    )
}

export default Members
