import React from 'react'

type Props = {
    isActive:boolean
}

const Sidebar = ({isActive}: Props) => {
  return (
    <div id='sidebar' className={(isActive)?'active':''}>
            adsf asdfhasd lfhadsldfhadslkfhads
    </div>
  )
}

export default Sidebar