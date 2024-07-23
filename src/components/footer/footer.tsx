import React, { useContext } from 'react'
import { ActionCT } from '../../context/action'
import Login from '../user/login'
import Register from '../user/register'

type Props = {}

const Footer = (props: Props) => {
  const {userAction} = useContext(ActionCT)
  return (
    <>
    {(userAction.isLogin)&&
    <><Login/></>
    }
    {
    (userAction.isRegister)&&
    <><Register/></>
    }
    <div>Footer</div>
    </>
  )
}

export default Footer