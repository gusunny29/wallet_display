import React from 'react'

const nft_card = ({ nft }) => {
    return (
        <div className='nft-card'>
            <img src= {nft.meta.content[0].url} className = 'nft-image'/>
            <div>
                {nft.meta.name}
            </div>
        </div>
    )
}
export default nft_card