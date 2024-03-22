import React from 'react'

export default function Pagination({startproductnumber,endproductnumber,totalresult,setpaginate,currentpagevalue}) {
  return (
    <div className="w-full  border-gray-300 my-5">
      <div className="mt-2 flex flex-wrap items-center justify-between">
        <div>
          <p>
            showing <strong>{startproductnumber}</strong> to <strong>{endproductnumber<=totalresult? endproductnumber:totalresult}</strong> of <strong>{totalresult}</strong> results
          </p>
        </div>
        <div className="space-x-2">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>setpaginate(currentpagevalue-1)}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={()=>setpaginate(currentpagevalue+1)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
