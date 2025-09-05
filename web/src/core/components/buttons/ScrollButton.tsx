"use client";

import React from 'react'
import { scrollByNavId } from '../../utils/scroll';

interface IButtonProps {
    text: string;
    className?:string;
    navId:string
}

export default function ScrollButton(props:IButtonProps) {
  const {text, className, navId} = props
  return (
    <div onClick={() => scrollByNavId(navId)} className={`btn ${className}`}>{text}</div>
  )
}
