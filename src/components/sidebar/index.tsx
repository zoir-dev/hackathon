import { cn } from "@/lib/utils"

import { Link, useLocation } from "react-router-dom"
import { links } from "./links"

const Sidebar = () => {
    const pathname = useLocation().pathname
    return (
        <aside className="h-screen w-full max-w-[345px] px-5 pt-8">
            {
                links.map((link) => (
                    <Link key={link.href} to={link.href}>
                        <div className={cn("flex items-center gap-10 py-4 pl-[52px] text-xl rounded-xl hover:bg-muted duration-100 font-medium text-[#38445599]", pathname === link.href && "!bg-primary !text-white duration-100")}>
                            {link.icon}
                            {link.title}
                        </div>
                    </Link>
                ))
            }
        </aside>
    )
}

export default Sidebar
