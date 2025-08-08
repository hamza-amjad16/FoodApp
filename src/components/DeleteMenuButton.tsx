import React from 'react'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

type Props = {}

const DeleteMenuButton = (props: Props) => {
  return (
   <form action="">
    <Button>
        <Trash2 className='h-4 w-4' />
    </Button>
   </form>
  )
}

export default DeleteMenuButton