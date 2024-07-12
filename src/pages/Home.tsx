import { useContext } from "react"
import { UserContext } from "../hooks/UserWallet"
import ProfileWallet from "../components/ProfileWallet"
import PleaseConnect from "../components/PleaseConnect"

const Home = () => {
  const { walletAddress } = useContext(UserContext)
  return (
    <>
      {walletAddress !== '' ? 
        (<ProfileWallet/>)
        : 
        (<PleaseConnect/>)
      }
    </>
  )
}

export default Home