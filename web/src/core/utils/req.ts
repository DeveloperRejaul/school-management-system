/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
interface ReqParamsTypes {
    method?:"GET" | "POST" | "PUT" | "DELETE";
    body?:any,
    headers?:HeadersInit,
}


export async function req <T>(url: string, prams?:ReqParamsTypes):Promise<{data:T | null, error: null | any}>{
  const {
    method = "GET",
    body = undefined,
    headers = new Headers({ 'Content-Type': 'application/json', Accept: 'application/json'})
  } = prams || {}
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method,
      body,
      headers,
      credentials:"include",
    })
    const result = await res.json()
    return {data: result, error: null};
  } catch (error) {
    console.log(error);
    return {data: null , error};
  }
}