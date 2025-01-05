import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function Card(props) {
  return (
    <div>
      <div className=' ' >
        <Image src="/tony.jpg" width="60" height="40"
          alt="card-image"
          className=' h-60 w-auto rounded-xl'
        />
      </div>


      <div className='grid grid-cols-10 rounded-md' >
        <div className='border-red-700 col-span-2 '>
          <Avatar>
            <AvatarImage src="/image.jpg" />
            <AvatarFallback>pnb </AvatarFallback>
          </Avatar >
        </div>
        <div className='col-span-8   ' >
          {props.title} : Chaleya(Hindi-dubbed)
          <div className='text-gray-600 ' >
            {props.author}
          </div>

          <div className='text-gray-600' >
            {props.views}views.   {props.timestamp}
          </div>

        </div>

      </div>


    </div>
  )
}

export default Card
