import './globals.css';
import React from 'react';

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex justify-center bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}

