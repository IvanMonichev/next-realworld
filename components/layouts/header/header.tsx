'use client'

import type { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import config from '@/lib/config'

const Header: FC = () => {
  const pathname = usePathname()

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>conduit</Link>
        <ul className='nav navbar-nav pull-xs-right'>
          {config.navigations.map((item, index) => (
            <li key={index} className='nav-item'>
              <Link className={cn('nav-link', {
                'active': pathname === item.patch
              })} href={item.patch}>
                {item.name}
              </Link>
            </li>)
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header
