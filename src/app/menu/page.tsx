import MenuList from '@/components/Menu-List'
import React, { Suspense } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mx-auto py-8'>
        <div className='gap-4 mb-8'>
        <h1 className='text-3xl font-bold'>Our Menu</h1>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
        <MenuList />
        </Suspense>
    </div>
  )
}

export default page