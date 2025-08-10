import { Navigate } from "react-router-dom"
import { useAuthStore } from "../../store"
const Dashboard = () => {
    const {user} = useAuthStore()
    if(user === null){
        <Navigate to="/auth/login" replace={true}/>
    }
  return (
    <>
    <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard