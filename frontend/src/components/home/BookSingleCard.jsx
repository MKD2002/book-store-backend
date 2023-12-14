import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiShow, BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md' ;
import BookModal from './BookModal';
export const BookSingleCard = ({book}) => {
    const [sh,setSh]=useState(false);
  return (
    <div
    key={book._id}
    className='relative px-4 py-2 m-4 border-2 border-gray-500 rounded-1g hover:shadow-x1'>
      <h2 className='absolute px-4 py-1 bg-red-300 rounded-lg top-1 right-2'>
      {book.publishYear}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex items-center justify-start gap-x-2'>
          <PiBookOpenTextLight className='text-2xl text-red-300' />
          <h2 className='my-1'>{book.title}</h2>
      </div>
      <div className='flex items-center justify-start gap-x-2'>
          <BiUserCircle className='text-2xl text-red-300' />
          <h2 className='my-1'>{book.author}</h2>
      </div>
      <div className='flex items-center justify-between p-4 mt-4 gap-x-2'>
        <BiShow
        className='text-3xl text-blue-800 cursor-pointer hover:text-black'
        onClick={()=>setSh(true)}
       />
          <Link to={`/books/details/${book._id}`}>
             <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
          </Link>
          <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black'/>
          </Link>
          <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-800 hover:text-black'/>
          </Link>
      </div>
      {
        sh && (<BookModal book={book} onClose={()=>setSh(false)}/>)
      }
  </div>
  )
}
