"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import AxiosInstance from '@/lib/axiosInstance';
import Link from 'next/link';

export default function Home() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [reg_no, setReg_no] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [token, setToken] = useState('');
  useEffect (()=>{
    const url = window.location.href;
    const token = url.split('/')[4];
    setToken(token);
    console.log("token", token);
  }
  ,[])
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
   
    if(!password ){
      toast({
        title: 'Please fill all the fields',
        description: 'Please try again',
      })
      return
    }
    if(!token){
      toast({
        title: 'No token found',
        description: 'Please try again',
      })
      return
    }
  
    try {
   
      setLoading(true)
       AxiosInstance.post(`api/user/reset-password/${token}`, {
        password: password,
      }).then((res) => {
        console.log("res", res);
        toast({
          title: `${res.data.message}`,
          description: 'Please login',
        })
        setEmail('')
        setPassword('')
        setReg_no('')
        setConfirmPassword('')
        /* GO to dashboard */
        window.location.href = '/'
      }
      ).catch((err) => {
        setLoading(false)
        console.log("err", err);
        toast({
          title:`${err.response.data.message}`,
          description: 'Please try again',
        })
      })

      setTimeout(() => {
        setLoading(false)
      }
      , 2000);
    } catch {
      toast({
        title: 'Failed to login',
        description: 'Please try again',
      
      })
    }
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen overflow-x-hidden">
<div className=" w-96 bg-white sm:shadow-md rounded-lg p-8 flex flex-col justify-center items-center">
      <p className="title text-center text-4xl font-bold my-6">
        Welcome  <span className="text-green-500">back</span>
      </p>
      <form className="flex flex-col justify-center items-center gap-y-3" onSubmit={handleSubmit} >
        <input type="password" className="input rounded-full border border-gray-300 px-4 py-3 outline-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className="input rounded-full border border-gray-300 px-4 py-3 outline-none" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      
        <button className="relative py-2 px-8 text-black text-base font-bold  rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 my-4"
        type='submit'
        >
        {
          loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
            </div>
          ) : (
            <span>
              Reset Password

            </span>
          )
        }
</button>


      </form>
        <p className="page-link text-center text-gray-700 text-sm">
            <span className="page-link-label cursor-pointer">Already have an account? <Link href="/"><span className="text-green-500">Login</span></Link></span>
            </p>
     
     
    </div>
    </main>
  )
}
