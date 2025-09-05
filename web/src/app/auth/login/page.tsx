import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md border-border/10 border">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <p className="mb-6">Enter your email below to login to your account</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded focus:outline-none focus:ring-1 text-foreground border border-border bg-background focus:ring-foreground placeholder-foreground"
              placeholder="m@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded focus:outline-none focus:ring-1 text-foreground border border-border bg-background focus:ring-foreground placeholder-foreground"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm hover:underline">Forgot your password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="btn w-full bg-primary"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center flex justify-center gap-x-2">
          <div>Don&apos;t have an account?</div>
          <Link href="/auth/signup" className="cursor-pointer hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
