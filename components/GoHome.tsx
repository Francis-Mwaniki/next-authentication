import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

type Props = {}

const GoHome = (props: Props) => {
  return (
    <div className='left-20   hover:bg-neutral-700 bottom-5 rounded-full p-2 my-auto mx-auto fixed z-20 bg-neutral-900 text-white'>
    <Link href="/" className=" text-sm  flex justify-center items-center flex-row ">
    <ArrowLeftIcon className="h-6 w-6" /><span>home</span>
    </Link>
    </div>
  )
}

export default GoHome