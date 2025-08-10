import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../store"

const NonAuth = () => {
    const {user} = useAuthStore()
    if(user !== null){
        <Navigate  to="/" replace={true}/>
    }
  return (
    <>
    <h1>NonAuth</h1>
    <Outlet/>
    </>
  )
}

export default NonAuth