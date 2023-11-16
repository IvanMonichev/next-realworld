'use client'

import { useAppSelector } from '@/hooks/useAppSelector'

export default function Home() {
  const { currentUser, isLoggedIn } = useAppSelector(state => state.auth)
  console.log(currentUser)
  console.log(isLoggedIn)
  return (
    <main>
      <p>Hello, Next</p>
    </main>
  )
}
