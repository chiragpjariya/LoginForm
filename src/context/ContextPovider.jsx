import { useState } from 'react'
import Context from './Context.js'

const ContextPovider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [email, setemail] = useState(null)
    const [pass, setpass] = useState(null)

    return (
        <>
            <Context.Provider value={{ user, setuser, email, setemail, pass, setpass }}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ContextPovider