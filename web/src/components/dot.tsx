import React from 'react'

interface IDotProps {
  size?: number,
  className?:string
}
export default function Dot(props: IDotProps) {
  const {size = 10, className} = props;
  return <div className={`rounded-full bg-primary ${className}`} style={{height: size , width: size}}/>
}
