import React, { ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
    el:'button',
    title:string
} & ComponentPropsWithoutRef<'button'>
type AnchorProps = {
    el:'anchor',
    title:string
} & ComponentPropsWithoutRef<'a'>
const CustomElement = (props: ButtonProps|AnchorProps) => {
  return (
    <>
    {(props.el=='button')?<button {...props}>{props.title}</button>:<a {...props}>{props.title}</a>}
    </>
  )
}

export default CustomElement