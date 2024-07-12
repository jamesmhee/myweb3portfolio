import ConnectWalletButton from "../components/ConnectWalletButton"

const PleaseConnect = () => {
  return (
    <div className="w-screen h-screen bg-black z-[60] fixed top-0 flex items-center justify-center">        
        <div className="bg-zinc-900 p-2 rounded-xl w-[calc(100vw_-_50px)] sm:max-w-sm md:max-w-lg h-80 text-white">            
            <div className="w-full h-full  backdrop-blur  border-2 border-zinc-800 rounded-lg flex items-center justify-center flex-col">
                <h2 className="text-xl my-5 uppercase text-zinc-300">Please connect wallet</h2>
                <ConnectWalletButton/>
            </div>            
        </div>
    </div>
  )
}

export default PleaseConnect