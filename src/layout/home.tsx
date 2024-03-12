import React from 'react'
import Slider from '../components/slider'
import Productlist from '../components/productlist'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Slider/>
    <Productlist/>
    </>
  )
}

export default Home