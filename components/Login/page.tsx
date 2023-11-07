"use client";
import Image from 'next/image'
import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';
import AxiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
export default function Home() {
  const router = useRouter()
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [showPassword, setShowPassword] = React.useState(false)
  const [reg_no, setReg_no] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')


  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
   
    if(!email || !password ){
      toast({
        title: 'Please fill all the fields',
        description: 'Please try again',
      })
      return
    }
  
    try {
   
      setLoading(true)
        AxiosInstance.post('/api/user/login', {
        email: email,
        password: password,
      }).then((res) => {
        console.log("res", res);
        toast({
          title: `${res.data.message}`,
          description: 'Welcome to the dashboard',
        })
        setEmail('')
        setPassword('')
        
        /* GO to dashboard */
        router.push('/dashboard')
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
    <div>
      {
        loading ? <Loader /> :   <main className="flex flex-col justify-center items-center h-screen overflow-x-hidden">
<div className=" w-96 bg-white sm:shadow-md rounded-lg p-8 flex flex-col justify-center items-center">
      <p className="title text-center text-4xl font-bold my-6">
        Welcome <span className="text-green-500">back</span>
      </p>
      <form className="flex flex-col justify-center items-center gap-y-3" onSubmit={handleSubmit} >
        <input type="email" className="input rounded-full border border-gray-300 px-4 py-3 outline-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="input rounded-full border border-gray-300 px-4 py-3 outline-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="page-link text-end text-green-700 text-sm">
           <Link href="/ResetPassword">
      <span className="page-link-label cursor-pointer">Forgot Password?</span>
      </Link>
        </p>
        <button className="relative py-2 px-8 text-black text-base font-bold  rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
        type='submit'
        >
        {
          loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
            </div>
          ) : (
            <span>
              Login to your account

            </span>
          )
        }
</button>


      </form>
      <p className="sign-up-label text-sm text-gray-700 mt-4">
          Don&apos;t have an account
        ?
         <Link href="/Accounts">
         <span className="sign-up-link text-teal-500 cursor-pointer font-bold ml-1">Sign up</span>
            </Link>
        </p>
     
    </div>
    </main>
      }
    </div>
  
  )
}
