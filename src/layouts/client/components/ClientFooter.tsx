import React, { useContext } from 'react'
import { CartCT } from '../../../context/cartContext'
import { StoreType } from '../../../types/storetype'

const ClientFooter = () => {
  const {Storestate,dispath} = useContext(CartCT)
  return (
    <div>ClientFooter
      <button onClick={()=>dispath({type:StoreType.ChangeTheme,payload:!Storestate.theme})}>Change Mode</button>
      <button onClick={()=>dispath({type:StoreType.increase,payload:1})}>Tăng giỏ hàng</button>
      <button onClick={()=>dispath({type:StoreType.decrease,payload:1})}>Giảm giỏ hàng</button>
    </div>
  )
}

export default ClientFooter