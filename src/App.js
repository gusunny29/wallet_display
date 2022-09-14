import {useState, useEffect} from 'react'
import './App.css';
import NFTContainer from './nft_container.js'

function App() {

  // Set State Hook to get and set Wallet Address
  const [walletAdd, setWallletAdd] = useState(null);
  // Set Nfts hook to keep track of full nft list for a
  const [nfts, setNfts] = useState([]);

  /**
   * Use Effect Hook to track whenever the wallet address is changed, make sure you update the NFTs are updatead
   */
  useEffect(() => {
    getNftData()
  }, [walletAdd])


  /**
   * Function used to get the account of the user's wallet 
   */
  const connectWallet = async() => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      setWallletAdd(accounts[0]);
    }
  }

  /**
   * Obtains the NFT Data with all details from the user's wallet 
   * @returns in the instance the wallet does not exist, the function will terminate
   */
  const getNftData = async() => {
    if(!walletAdd) return;
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAdd}`)
    const data = await response.json()
    setNfts(data.items)
  }

  return (
    <div className="App">
      <div className = "text">
        Account: {walletAdd}
      </div>
      <button className='connect-button' onClick={connectWallet}>
        Connect Wallet!
      </button>
      <NFTContainer nfts={nfts}/> 
    </div>
  );
}

export default App;
