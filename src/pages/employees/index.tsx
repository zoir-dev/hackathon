import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

const Employees = () => {
    const [dates, setDates] = useState<DateRange | undefined>(undefined)
    return (
        <div>
            <div className="flex gap-6">
                <Input placeholder="Search" type="search" fullWidth />
                <DatePickerWithRange date={dates} setDate={setDates} />
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="All employees" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button icon={<Filter width={16} />} className="w-full">
                    Filter
                </Button>
            </div>
        </div>
    )
}

export default Employees