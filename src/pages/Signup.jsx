import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

function Signup() {
    const nav = useNavigate()
    const backHome = () => {
        nav("/")
    }
    return (
        <>
            <div>Signup</div>
            ID: <input />
            PW: <input />
            <button>회원가입승인버튼</button>
            <button onClick={backHome}>홈버튼</button>
        </>
    )
}

export default Signup