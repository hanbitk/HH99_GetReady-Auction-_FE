import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
function MyPage() {
    const nav = useNavigate()
    const HomeButton = () => {
        nav("/")
    }
    return (
        <>
            <div>MyPage</div>
            <button onClick={HomeButton}>홈버튼</button>
        </>
    )
}

export default MyPage