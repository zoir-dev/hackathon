import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Spinner from "@/components/ui/spinner"
import { useLocation } from "react-router-dom"

const Loading = () => {
    const pathname = useLocation().pathname

    if (pathname === 'auth') return <div className="w-full h-screen grid place-items-center"><Spinner size="lg" /></div>
    return (

        <div className="flex w-full">
            <Sidebar />
            <div className="w-full min-h-screen bg-[#FAFBFF] rounded-tl-xl">
                <Header />
                <div className="w-full h-[80vh] grid place-items-center">
                    <Spinner size="lg" />
                </div>
            </div>
        </div>
    )
}

export default Loading