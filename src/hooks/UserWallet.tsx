import { useState, createContext, useMemo, SetStateAction } from "react"

interface IUserWalletProps{
    walletAddress: string
    setWalletAddress: React.Dispatch<SetStateAction<string>>
}

export const UserContext = createContext({} as IUserWalletProps)

export const UserWallet = ({children} : {children: JSX.Element | JSX.Element[]}) => {

    const [ walletAddress, setWalletAddress ] = useState<string>("")
    const store = useMemo(()=>({
        walletAddress,
        setWalletAddress
    }), [
        walletAddress,
        setWalletAddress
    ])

  return (
    <UserContext.Provider value={store}>
        {children}
    </UserContext.Provider>
  )
}