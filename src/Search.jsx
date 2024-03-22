import React, { useState } from 'react'

export default function ({searchhandler}) {
    const [username,setUserName]=useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log(username)
        searchhandler(username)
    }
  return (
    <form  className='flex gap-2' onSubmit={handleSubmit}>
    <input
        className="flex h-10 w-[150px] lg:w-[250px] rounded-md bg-gray-100 px-3 py-2 text-lg placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
        value={username}
        onChange={(event)=>setUserName(event.target.value)}
    ></input>

    <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
        Search
    </button>
</form>
  )
}
