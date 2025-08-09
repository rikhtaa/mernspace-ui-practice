import { Outlet } from "react-router-dom"

const NonAuth = () => {
  return (
    <>
    <h1>NonAuth</h1>
    <Outlet/>
    </>
  )
}

export default NonAuth