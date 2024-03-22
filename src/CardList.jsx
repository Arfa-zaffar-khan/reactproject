import React, { memo, useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'

 function CardList({products}) {
    

    const[currentPage,setCurrentPage]=useState(1)
    const[itemsPerPage,setItemsPerPage]=useState(3)


    const indexOfLastItem=currentPage * itemsPerPage
    const indexofFirstItem=indexOfLastItem-itemsPerPage
    const currentItems =products.slice(indexofFirstItem,indexOfLastItem);
    console.log("hii")
    function paginate(pagenumber){
    console.log(pagenumber)
        if(pagenumber>=1 && pagenumber<=Math.ceil(products.length/itemsPerPage)){
            setCurrentPage(pagenumber)
        }else{
            alert("pages not found")
        }
       
        
    }


    return (

        <div className='max-w-[80%] mx-auto'>
            <Pagination startproductnumber={indexofFirstItem+1} endproductnumber={indexOfLastItem} totalresult={products.length} setpaginate={paginate} currentpagevalue={currentPage}/>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 
        gap-4  '>
                {currentItems.map(prod => <Card key={prod.id} product={prod} />)}
            </div>

        </div>


    )
}

export default memo(CardList)