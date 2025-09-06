'use client'

import Button from '@/core/components/buttons/Button'
import Input from '@/core/components/Input'
import useFetch from '@/core/hook/useFetch'
import { setCookie } from '@/core/utils/cookies'
import { UserRes } from '@/types'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

interface FromVales {
  email:string
  password:string
}


export default function LoginPage() {
  const {register,handleSubmit,formState: {errors}} = useForm<FromVales>()
  const {isLoading, req}= useFetch<UserRes>()

  const onSubmit = async (data:FromVales) => {
    try {
      const result = await req("/api/user/login", {
        method:"POST",
        body: JSON.stringify({
          "email": data.email,
          "password": data.password,
          "remember": true
        })
      })
      if(result.data) {
        setCookie(process.env.NEXT_PUBLIC_COOKIE_KEY!, result.data?.token, {
          days: 365,        // or maxAge: 60 * 60 * 24 * 365
          sameSite: 'lax',
          secure: true,
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md border-border/10 border">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <p className="mb-6">Enter your email below to login to your account</p>
        <form className='space-y-3' onSubmit={handleSubmit(onSubmit)} >
          <Input 
            id='email' 
            type='email' 
            label='Email' 
            placeholder='m@example.com' 
            autoComplete="email"
            error={errors.email?.message}
            {...register('email', {
              required:{message:"Email is required", value:true},
              pattern:{message:'Please enter a valid email address.', value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            })} 
          />
          <Input 
            id='password' 
            type='password' 
            label='Password' 
            placeholder='Type password' 
            autoComplete="current-password"
            error={errors.password?.message}
            {...register('password', {
              required:{message:"Password is required", value:true},
              minLength:{message:'Use at least 6 characters.', value: 6}
            })} 
          />
          <div className="text-right mt-2">
            <a href="#" className="text-sm hover:underline">Forgot your password?</a>
          </div>
          <Button text='Login' type='submit' isLoading={isLoading} className='w-full'/>
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
