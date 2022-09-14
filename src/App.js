import {useState, useEffect} from 'react'
import './App.css';
import NFTContainer from './nft_container.js'

function App() {

  const [walletAdd, setWallletAdd] = useState(null);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    getNftData()
  }, [walletAdd])


  const connectWallet = async() => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      setWallletAdd(accounts[0]);
    }
  }

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
