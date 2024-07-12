import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import { LoginPayload,VerifyLoginPayloadParams } from "thirdweb/auth";
import { UserContext } from "../hooks/UserWallet";
import { useContext } from "react";

const client = createThirdwebClient({
  clientId: "05af70b50eeb9e48b18b73982ae91652",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
  createWallet("app.phantom"),
];

export interface PayloadProps {
  signature: string
  payload: Payload
}

export interface Payload {
  address: string
  chainId: number
}


export default function App() {  
  const { walletAddress, setWalletAddress } = useContext(UserContext)

  const generatePayload = ({address} : {address : string}) =>{        
    setWalletAddress(address)    
    return address
  }

  return (
    <>
    <ThirdwebProvider>      
      <ConnectButton        
        client={client}
        wallets={wallets}
        theme={"dark"}
        connectModal={{ size: "wide" }}
        auth={{
          isLoggedIn: async (address : string) : Promise<boolean> => {
            setWalletAddress(address)
            return true
          },
          getLoginPayload: async ({ address } : {address : string}) =>
            generatePayload({ address }),
          doLogin: async (params: VerifyLoginPayloadParams) : Promise<void> => {            
            console.log(params)            
          },
          doLogout: async () =>{            
            setWalletAddress("")
          }
        }}        
      />            
    </ThirdwebProvider>
    </>
  );
}
