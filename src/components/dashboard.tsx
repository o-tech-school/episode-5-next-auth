'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

function DashboardPage() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session ? (<>
        <img className='w-20 rounded-full h-20' src={session.user?.image as string} alt="" />
        <h1>Welcome back</h1>
        <p>{session.user?.name}</p>
        <button className='border border-red-800 rounded-lg px-5 py-1 bg-red-500 text-white' onClick={() => signOut()}>Sign out</button>

      </>) : (<>
        <h1>You are not login</h1>
        <div className="flex gap-1">
          <button className='border border-black rounded-lg px-5 py-1 bg-black text-white' onClick={() => signIn('github')}>Github</button>
          <button className='border border-green-800 rounded-lg px-5 py-1 bg-green-500 text-white' onClick={() => signIn('google')}>Google</button>
        </div>
      </>)}
    </>
  )
}

export default DashboardPage