import { ArrowLeftRight, Bell, Mail, Settings, User } from "lucide-react"
import { Input } from "./search-input"
import { Button } from "../ui/button"
import { formatMoney } from "@/lib/formatMoney"
import { links } from "../sidebar/links"
import { useLocation } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Header = ({ open, setOpen }: { open: boolean, setOpen: (val: boolean) => void }) => {
    const pathname = useLocation().pathname
    return (
        <header className="border-b-2 border-[#38445599] px-7 py-4 flex items-center gap-16 justify-between">
            <div className="flex items-center gap-6 w-[50%] max-w-[900px] justify-between">
                <Button size='icon' variant='ghost' onClick={() => setOpen(!open)}>
                    <ArrowLeftRight className="text-[#38445599]" strokeWidth={2.5} />
                </Button>
                {!open && <h2 className="text-[#384455] text-3xl font-bold">{links.find((link) => link.href === pathname)?.title}</h2>}
                <div className="max-w-[460px] w-full">
                    <Input type="search" placeholder="Search..." fullWidth className="h-12" />
                </div>
            </div>
            <div className="flex items-end gap-2.5">
                <div className="space-y-2">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                </div>
                <div className="flex gap-2.5">
                    <div className="flex flex-col items-center">
                        <p className="text-[14px] text-[#868D99] font-bold">Buy</p>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-[14px] text-[#1AD598] font-medium">{formatMoney(12640.00)}</p>
                            <p className="text-[14px] text-[#868D99] font-medium">{formatMoney(12640.00)}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[14px] text-[#868D99] font-bold">Sell</p>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-[14px] text-[#868D99] font-medium">{formatMoney(12640.00)}</p>
                            <p className="text-[14px] text-[#868D99] font-medium">{formatMoney(12640.00)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost'>
                            <div className="w-6 h-6 rounded-full bg-primary"></div> EN
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary"></div> UZ
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary"></div> RU
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary"></div> EN
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative">
                    <div className="w-2.5 h-2.5 border-2 border-white absolute -top-0.5 -right-1 rounded-full bg-destructive"></div>
                    <Mail className="text-[#38445599] cursor-pointer" />
                </div>
                <Settings className="text-[#38445599] cursor-pointer" />
                <div className="relative">
                    <div className="w-2.5 h-2.5 border-2 border-white absolute -top-0.5 right-0 rounded-full bg-destructive"></div>
                    <Bell className="text-[#38445599] cursor-pointer" />
                </div>
                <DropdownMenu>
                    <div className="relative h-10">
                        <DropdownMenuTrigger className="!outline-none" asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
                            {/* <Link to="/profile"> */}
                            <User width={16} /> Edit profile
                            {/* </Link> */}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header