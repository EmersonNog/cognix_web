import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePageController } from '@/pages/home'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<HomePageController />} path="/" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}
