import { Outlet } from 'react-router-dom'

export default function  LayoutRoutePage ({children}) {
  return children || <Outlet />
}