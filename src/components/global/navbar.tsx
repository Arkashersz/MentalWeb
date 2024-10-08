import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Navbar = async (props: Props) => {

    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 
        backdrop-blur-lg z-[100] flex items-center border-b-[1px] 
        border-neutral-900 justify-between'>
            <aside className='flex items-center gap-[2px]'>
                <p className='text-3xl font-bold'>Mi</p>
                <Image
                    src="/fuzzieLogo.png"
                    width={15}
                    height={15}
                    alt='fuzzie logo'
                    className='shadow-sm'
                />
                <p className='text-3xl font-bold'>ze</p>
            </aside>
            <nav className='absolute left-[50%] top-[50%] transform 
            translate-x-[-50%] translate-y-[-50%] hidden md:block'>
                <ul className='flex items-center gap-4 list-none'>
                    <li>
                        <Link href="#">Produtos</Link>
                    </li>
                    <li>
                        <Link href="#">Preços</Link>
                    </li>
                    <li>
                        <Link href="#">Clientes</Link>
                    </li>
                    <li>
                        <Link href="#">Ferramentas</Link>
                    </li>
                    <li>
                        <Link href="#">Documentação</Link>
                    </li>
                    <li>
                        <Link href="#">Empresa</Link>
                    </li>                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar