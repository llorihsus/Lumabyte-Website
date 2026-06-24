import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function MainLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={pathname === '/' ? 'page-home' : undefined}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
