import Protector from '@/components/protector';
import React from 'react';

export default function layout({ children }: Readonly<{children: React.ReactNode}>) {
  return <Protector>
    {children}
  </Protector> 
}