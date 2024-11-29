'use client'

import Navbar from './(components)/Navbar'
import StoreProvider from './redux'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50">
      <Navbar />
      {children}
    </main>
  )
}

export const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}
