import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

function Login() {
    const nav = useNavigate()
    const signupGo = () => {
        nav("/user/Signup")
    }
    return (
        <>
            <div>Login</div>
            ID: <input/>
            PW: <input/>
            <button>로그인</button>
            <button onClick={signupGo}>회원가입버튼</button>
        </>
    )
}

export default Login