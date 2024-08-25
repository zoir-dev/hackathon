import { ChartPie, Home, MessageCircleMore, Newspaper, User } from "lucide-react"
export const links = [
    {
        title: "Dashboard",
        href: '/',
        icon: <Home />
    },
    {
        title: 'Employees',
        href: "/employees",
        icon: <User />
    },
    {
        title: 'Chat',
        href: '/chat',
        icon: <MessageCircleMore />
    },
    {
        title: "Statistics",
        href: '/statistics',
        icon: <ChartPie />
    },
    {
        title: 'News',
        href: "/news",
        icon: <Newspaper />
    }
]