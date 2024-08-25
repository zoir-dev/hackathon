import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff, Search } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, fullWidth, ...props }, ref) => {
  const [hide, setHide] = React.useState<boolean>(true)
  const iconClassnames = `absolute right-1 top-[2px] text-muted-foreground p-1 box-content cursor-pointer backdrop-blur z-2 ${props.disabled && "pointer-events-none cursor-not-allowed opacity-50"}`
  const searchIconClassnames = `absolute right-1 top-[2px] text-muted-foreground p-1 box-content cursor-pointer backdrop-blur z-1 ${props.disabled && "pointer-events-none cursor-not-allowed opacity-50"}`
  return (
    <div className={`${fullWidth ? "w-full" : "w-full sm:w-max"} h-9 relative`}>
      {type === "search" && <Search width={18} className={searchIconClassnames} />}
      <input
        type={
          type === "password" ?
            hide ?
              "password"
              : "text"
            : type
        }
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
          type === "search" && "pr-8",
          type === "password" && "pr-8",
        )}
        ref={ref}
        {...props}
      />
      {type === "password" &&
        (hide ?
          <Eye width={18} className={iconClassnames} onClick={() => setHide(false)} />
          : <EyeOff width={18} className={iconClassnames} onClick={() => setHide(true)} />)}
    </div>
  )
})
Input.displayName = "Input"

export { Input }
