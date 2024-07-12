import { useContext, useEffect, useState } from "react"
import { UserContext } from "../hooks/UserWallet"
import { useNavigate } from "react-router-dom"
import { ConfigProvider, Segmented } from 'antd';
import { GrMoney, GrTransaction } from "react-icons/gr";
import { MdCollections } from "react-icons/md";
import SegmentDetail from "./SegmentDetail";


const ProfileWallet = () =>{    
    const navigate = useNavigate()
    const [ isMobile, setIsMobile ] = useState<boolean>(false)
    const [ segment, setSegment ] = useState<string>("Portfolio")

    useEffect(()=>{
        if(walletAddress === ''){
            navigate('/')
        }
    })

    const onChangeSegment = (event:string) =>{        
        setSegment(event)
    }

    const onScreenResize = () =>{
        window.addEventListener('resize', (event: UIEvent)=>{
            const w = event.target as Window
            if(w.innerWidth <= 440){
                setIsMobile(true)
            }else{
                setIsMobile(false)
            }            
        })
    }

    useEffect(()=>{
        onScreenResize()
    }, [])

    const { walletAddress } = useContext(UserContext)
    return (
        <ConfigProvider theme={{
            components: {
                Segmented: {
                    itemActiveBg: 'black',                    
                    itemColor: 'black',
                    itemSelectedBg: 'black',
                    itemSelectedColor: 'white',
                    itemHoverBg: 'black',
                    itemHoverColor: 'white',                    
                }
            }
        }}>
            <div className="bg-zinc-300 p-5 h-full max-h-screen w-full">
                <div className="border bg-zinc-200 rounded-xl p-2">
                    <Segmented      
                        block={isMobile} 
                        defaultValue="Portfolio"
                        size={isMobile ? 'middle' : 'large'}
                        onChange={(event)=>onChangeSegment(event)}                        
                        options={[
                        { label: 'Portfolio', value: 'Portfolio', icon: <GrMoney/> },
                        { label: 'NFT', value: 'NFT', icon: <MdCollections /> },
                        { label: 'Transaction', value: 'Transaction', icon: <GrTransaction /> },
                    ]}/>
                    <SegmentDetail walletAddress={walletAddress} segment={segment}/>                    
                </div>
            </div>
        </ConfigProvider>
    )
}

export default ProfileWallet