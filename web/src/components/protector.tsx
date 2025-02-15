import { redirect } from 'next/navigation';
import React from 'react'

export default function Protector({children}: Readonly<{children: React.ReactNode}>) {
    const isLogin = true;
    if(!isLogin) {
        redirect('/auth')
    }
    return children
}
