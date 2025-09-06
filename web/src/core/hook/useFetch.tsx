/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"



interface ReqParamsTypes {
    method?:"GET" | "POST" | "PUT" | "DELETE";
    body?:any,
    headers?:HeadersInit,
}


export default function useFetch<T = any>() {
  const [isLoading, setIsLoading]= useState(false)
  const [isSuccess, setIsSuccess]= useState(false)
  const [isError, setIsError]= useState(false)
  const [error, setError]= useState<any | null>(null)
  const [data, setData]= useState<T | null>(null)


  const req = async (url: string, prams:ReqParamsTypes):Promise<{data:T | null, error: null | any}> =>{
    const {
      method = "GET",
      body = undefined,
      headers = new Headers({ 'Content-Type': 'application/json', Accept: 'application/json'})
    } = prams
    setIsLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        method,
        body,
        headers,
        credentials:"include",
      })
      const result = await res.json()
      setData(result)
      setIsLoading(false)
      setIsSuccess(true)
      return {data: result, error: null};
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
      setIsSuccess(false)
      setError(error)
      console.log(error);
      return {data: null , error};
    }
  }

  return{
    isError,
    isLoading,
    error,
    isSuccess,
    data,
    req,
  }
}