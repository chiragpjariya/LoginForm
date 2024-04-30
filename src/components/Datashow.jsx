import React, { useContext, useEffect, useState } from 'react'
import LoginImg from './img/DataShow.avif'
import Context from '../context/Context'
function Datashow() {

    let [Username, setUsername] = useState("Demo")
    let [UserEmail, setUserEmail] = useState("Demo@.com")
    let [UserPassword, setUserPassword] = useState("1234536")

    let { user, email, pass } = useContext(Context);
    useEffect(() => {
        setUsername(user);
        setUserEmail(email);
        setUserPassword(pass);
    }, [user, email, pass, setUsername, setUserEmail, setUserPassword])
    return (
        <>
            <div className="flex items-center justify-center  h-[100vh] w-[100%]   bg-yellow-400 " style={{
                backgroundImage: `url(${LoginImg})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`
            }} >
                <div className=' h-auto w-[500px] border-[3px] text-base  border-black  p-1'>
                    <table className='w-[100%]   border-[2px] border-black'>
                        <thead className='w-[100%]  border-[1px] border-black'>
                            <tr className=' border-[1px] border-black flex items-center justify-around w-[100%] h-[50px]'>
                                <th className='border-[1px] border-black size-full text-center flex items-center justify-center'>Name</th>
                                <th className='border-[1px] border-black size-full text-center flex items-center justify-center'>Email</th>
                                <th className='border-[1px] border-black size-full text-center flex items-center justify-center'>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=' border-[1px] border-black flex items-center justify-around w-[100%] h-[50px]'>
                                <td className='border-[1px] border-black size-full text-center flex items-center justify-center'>{Username}</td>
                                <td className='border-[1px] border-black size-full text-center flex items-center justify-center'>{UserEmail}</td>
                                <td className='border-[1px] border-black size-full text-center flex items-center justify-center'>{UserPassword}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Datashow