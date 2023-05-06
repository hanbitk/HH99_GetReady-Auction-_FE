import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
function AuctionDetail() {
    const nav = useNavigate()
    const HomeButton = () => {
        nav("/")
    }
    return (
        <>
            <div>AuctionDetail</div>
            <button onClick={HomeButton}>홈으로</button>
        </>
    )
}

export default AuctionDetail