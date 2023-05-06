import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

function Action() {
    const nav = useNavigate()
    const HomeButton = () => {
        nav("/")
    }
    return (
        <>
            <div>Action 전체 상품조회</div>
            <button onClick={HomeButton}>홈으로</button>
        </>
    )
}

export default Action