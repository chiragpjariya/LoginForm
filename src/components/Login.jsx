import { useContext, useState } from 'react'
import LoginImg from 'https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714435200&semt=ais'
import Context from '../context/Context'

function Login() {

    let [username, setusername] = useState();
    let [userEmail, setuserEmail] = useState();
    let [userpass, setuserpass] = useState();

    let { setuser, setemail, setpass } = useContext(Context);
    let handel = () => {
        if (username == "" || userEmail == "" || userpass == "" || username == null || userEmail == null || userpass == null) {
            alert("Please fill the all Fields")
        } else {
            //filling the context
            setuser(username);
            setemail(userEmail);
            setpass(userpass);
            //clear the fields
            setusername(null)
            setuserEmail(null)
            setuserpass(null)
            //
            document.querySelector("#Name").value="";
            document.querySelector("#Email").value="";
            document.querySelector("#Password").value="";
        }

    }

    return (
        <>
            <div className="flex items-center justify-center  h-[100vh] w-[100%]   bg-yellow-400 " style={{
                backgroundImage: `url(${LoginImg})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`
            }}  >
                <div className="container flex flex-col h-auto p-4 rounded-[20px] w-[500px] items-center text-white   bg-white/20 shadow-lg ring-1 ring-black/5">
                    <div className="input-fields flex flex-col w-[100%] gap-y-[20px]" >

                        <div className="name  h-[80px] w-[100%] flex flex-col justify-around p-[5px]  rounded-t-[10px] bg-transparent" >
                            <label htmlFor="Name" className=' text-lg font-semibold'>Name</label>
                            <input type="text" name="Name" id="Name" className='text-black h-[30px] rounded-md p-[5px]' onChange={(e) => setusername(e.target.value)} value={username}/>
                        </div>

                        <div className="Email bg-transparent  h-[80px] w-[100%] flex flex-col justify-around p-[5px] " >
                            <label htmlFor="Email" className=' text-lg font-semibold'>Email</label>
                            <input type="Email" name="Email" id="Email" className=' text-black h-[30px] rounded-md p-[5px]' onChange={(e) => setuserEmail(e.target.value)} value={userEmail}/>
                        </div>

                        <div className="Password bg-transparent  h-[80px] w-[100%] flex flex-col justify-around p-[5px] rounded-b-[10px]" >
                            <label htmlFor="Password" className=' text-lg font-semibold'>Password</label>
                            <input type="password" name="password" id="Password" className='text-black h-[30px] rounded-md p-[5px] ' onChange={(e) => setuserpass(e.target.value)} value={userpass}/>
                        </div>
                        <div className="btn h-[80px] w-[100%] flex flex-col justify-center  items-center p-[5px] rounded-b-[10px]">
                            <button onClick={handel} className=' bg-red-600 h-[50px] w-[20%] rounded-xl  font-semibold focus:bg-blue-500'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login