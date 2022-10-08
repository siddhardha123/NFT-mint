import React from 'react'

const Navbar = ({accounts,setAccounts}) => {

    const isConnected = Boolean(accounts[0]);
    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
           setAccounts(accounts);
        }
    }
  return (
    <div>
         <div>instagram</div>
         <div>github</div>
         <div>mail</div>

         <div>about</div>
         <div>mint</div>
         <div>team</div>

         {isConnected ?(<p>connected</p>):(<button type="" onClick={connectAccount}>connect</button>)}
    </div>
  )
}

export default Navbar