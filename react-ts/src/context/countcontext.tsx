import React, { createContext } from 'react'

type Props = {
    children: React.ReactNode
}
export const countCT = createContext<number>(0)
const Countcontext = ({children}: Props) => {
  return (
    <countCT.Provider value={10}>{children}</countCT.Provider>
  )
}

export default Countcontext