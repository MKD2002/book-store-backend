import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-60'
            onclick={onClose}>

            <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='text-3xl text-red-600 cursor-pointer  right-6 top-6' onClick={onClose} />
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
            </div>
        </div>
    )
}

export default BookModal