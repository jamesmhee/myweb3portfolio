import { useCallback, useEffect, useState } from 'react'
import { getWalletBalance, getWalletTransaction, dashboard } from '../services/WalletService'
import { BsCopy } from "react-icons/bs";


type Props = {
    walletAddress: string
    segment: string
}

interface DataProps{
    message: string
    result: string
    status: string
}

const SegmentDetail = ({walletAddress, segment}: Props) => {
    const unit = 1000000000000000000
    const [ data, setData ] = useState<DataProps>({} as DataProps)
    
    const getBalance = useCallback(async ()=>{
        if(segment === 'Portfolio'){
            const bal = await dashboard({address: walletAddress, type: 'all'})
            setData(bal)            
        }else if(segment === 'NFT'){
            const bal = await getWalletBalance({address: walletAddress, action: 'tokenbalance'})
            setData(bal)
        }else if(segment === 'Transaction'){
            const bal = await getWalletTransaction({address: walletAddress})
            setData(bal)
        }
    }, [segment])

    useEffect(()=>{
       getBalance()
    }, [segment])

  return (
    <div className='p-5 flex w-full h-full'>                    
        <div className='flex flex-col gap-2 backdrop-blur-sm w-full font-medium'>            
            <div className='flex-col sm:flex-row flex gap-1 w-full'>
                <span className='flex-shrink-0 flex-grow w-max'>Wallet Address :</span>
                <span className="flex-auto text-wrap text-xs sm:text-sm w-full overflow-auto select-all inline-flex flex-wrap" onClick={()=> navigator.clipboard.writeText(walletAddress)}>{walletAddress} <BsCopy className='cursor-pointer ml-2 inline-flex my-auto'/></span>
            </div>
            {
                segment === 'Portfolio' ?
                (
                    <div className='flex gap-1'>
                        <span className='flex-shrink-0 flex-grow'>Wallet Balance :</span>
                        <span className='flex-auto text-wrap w-full'>{Number.isNaN((Number(data?.result) / unit).toFixed(6)) || (Number(data?.result) / unit).toFixed(6) === 'NaN' ? 'Loading..' : (Number(data?.result) / unit).toFixed(6)}</span>
                    </div>
                ) : 
                (
                    segment === 'NFT' ? 
                    (
                        <div className='flex gap-1'>                        
                            <span>NFT</span>
                        </div>
                    )
                    : 
                    (
                        <div className='flex gap-1'>                        
                            <span>Transaction</span>
                        </div>
                    )
                )

            }            
        </div>
        
    </div>
  )
}

export default SegmentDetail