import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {}

const CTA= (props: Props) => {
  return (
    <section className='py-16 bg-primary text-primary-foreground'>
        <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Experience Our Cusine</h2>
        <p className='text-lg mb-8 max-w-2xl mx-auto'>Book your table now or order for pickup</p>
        <div className='flex gap-4 justify-center'> 
            <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={"/reservation"}>Reserve a Table</Link>
            </Button>
            <Button variant={"secondary"} size={"lg"} asChild>
                <Link href={"/order"}>Order Online</Link>
            </Button>
        </div>
        </div>
    </section>
  )
}

export default CTA