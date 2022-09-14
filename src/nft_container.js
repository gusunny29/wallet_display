import React from 'react'
import NFTCard from './nft_cards.js'

const nft_container = ({ nfts }) => {
    
    return (
        <div className='nft-container'>
            {nfts.map((nft, index) => {
                return <NFTCard nft = {nft}  key = {index}/>
            })}
        </div>
    )
}
export default nft_container