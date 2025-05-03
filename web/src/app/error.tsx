/* eslint-disable no-console */
'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'


interface IErrorProps{
  error: Error & { digest?: string }
  reset: () => void
}
export default function Error({error,reset}: IErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong</h2>
      <p className="mb-8">We encountered an unexpected error. Please try again later.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-foreground text-background rounded-full hover:bg-opacity-90 transition duration-200"
      >
        Try Again
      </button>
    </div>
  )
}