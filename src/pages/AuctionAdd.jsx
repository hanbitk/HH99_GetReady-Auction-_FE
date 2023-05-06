import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
function AuctionAdd() {
    const nav = useNavigate()
    const HomeButton = () => {
        nav("/")
    }
    return (
        <>
            <div>AuctionAdd</div>
            <button onClick={HomeButton}>홈으로</button>
        </>

    )
}

export default AuctionAdd