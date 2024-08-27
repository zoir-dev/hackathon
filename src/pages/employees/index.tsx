import Iconify from "@/components/iconify"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Actions from "./components/actions"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Github, LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const Employees = () => {
  const employeesData = Array.from({ length: 30 }, (_, index) => ({
    status: `Department ${index + 1}`,
    jobRole: `Job Role ${index + 1}`,
    employeeName: `Employee Name ${index + 1}`,
    telId: `Tel: ${index + 1}`,
    employeeImg: `https://via.placeholder.com/150?text=Employee+${index + 1}`,
  }))

  return (
    <div className="grid gap-10">
      <Actions />
      <div>
        <div className="flex items-center justify-between">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-400">
            EMPLOYEES OF THE MONTH - 30
          </h3>
          <Button className="rounded-3xl" variant="outline">
            View more
            <Iconify
              icon="solar:arrow-right-outline"
              className="w-[10px] h-[10px] ms-auto"
            />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {employeesData.map(
            ({ employeeName, jobRole, status, telId, employeeImg }, idx) => (
              <Card key={idx}>
                <CardHeader className="flex-row items-center justify-between">
                  <Badge>{status}#{idx}</Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-gray-400 flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                        <Iconify
                          className="h-4 w-4"
                          icon="solar:menu-dots-bold"
                        />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-lg font-medium text-gray-700">
                        {employeeName}
                      </h4>
                      <p className="text-gray-500">{jobRole}</p>
                      <p className="text-gray-400">{status}</p>
                      <p className="text-gray-400">{telId}</p>
                    </div>
                    <img
                      src={employeeImg}
                      alt={employeeName}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                  </div>
                  <Button className="w-full mt-4">View</Button>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 border-t-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex items-center gap-4 text-gray-600 text-bold">
                    <Iconify icon="solar:calendar-outline" />
                    <span>02 May 23</span>
                  </div>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Employees
