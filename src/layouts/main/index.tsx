import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const Main = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={"w-full min-h-screen flex"}>
      <div className={cn(open ? 'ml-0' : "-ml-[345px] w-full max-w-[345px]", 'duration-200 w-full max-w-[345px] h-screen')}>
        <Sidebar />
      </div>
      <div className="w-full bg-[#FAFBFF] min-h-screen rounded-tl-xl h-screen overflow-hidden">
        <Header open={open} setOpen={setOpen} />
        <div className="pt-7 overflow-y-auto h-full px-7 pb-32">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Main