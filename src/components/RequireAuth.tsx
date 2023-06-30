import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Cookies from "js-cookie"

const RequireAuth = () => {
    const { auth }:any = useAuth()
    const location = useLocation()

    return (
        auth?.username || Cookies.get('token')
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth