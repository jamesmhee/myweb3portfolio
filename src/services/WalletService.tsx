interface IGetWalletBalanceProps {
    address: string
    action?: 'balance' | 'transaction' | 'tokenbalance'
}

export const getWalletBalance = async ({address, action}:IGetWalletBalanceProps) =>{
    let endpoint:string = 
    `https://api.etherscan.io/api?module=account&action=${action}&address=${address}&tag=latest&apikey=TANBMIU9P1DWTQJ1GWNWA5RSISUYYVD3M2`
    let config:object = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const getBalance = await fetch(endpoint, config)
    if(getBalance.ok){
        return await getBalance.json()
    }else{
        return {}
    }    
}

export const getWalletTransaction = async ({address}:IGetWalletBalanceProps) =>{
    let endpoint:string = 
    // `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=10&offset=10&sort=asc&apikey=TANBMIU9P1DWTQJ1GWNWA5RSISUYYVD3M2`
    `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=TANBMIU9P1DWTQJ1GWNWA5RSISUYYVD3M2`
    let config:object = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const getBalance = await fetch(endpoint, config)
    if(getBalance.ok){
        return await getBalance.json()
    }else{
        return {}
    }    
}