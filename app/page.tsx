"use client";
import Login from '@/components/Login/page'
import Loader from '@/components/Loader'
import React from 'react'
type Props = {}

const Home = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div>
      {
        loading ? <Loader /> : <Login />
      }
    </div>
  )
}

export default Home