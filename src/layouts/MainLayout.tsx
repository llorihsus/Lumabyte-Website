import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar />
      <main className={pathname === '/' ? 'page-home' : undefined}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
