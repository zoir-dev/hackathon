import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full h-full bg-[#FAFBFF] min-h-screen rounded-tl-xl px-7">
        <Header />
        <Outlet />
      </div>
    </div>

  )
}

export default Main