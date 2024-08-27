/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select"
import { FormData } from "@/types"
import { useForm } from "react-hook-form"
import { filterSchema } from "@/lib/schema"
import Iconify from "@/components/iconify"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"


function Actions() {
  const [isOpen, setIsOpen] = React.useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(filterSchema)
  })

  const toggleFilter = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = async (formData: FormData) => {
    console.log(formData)
  }

  const onError = (errors: any) => {
    console.log(errors)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="grid gap-4"
      >
        <div className="flex items-center gap-4 justify-center">
          <FormField
            control={form.control}
            name="employeeName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Find by Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateFrom"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <DatePicker placeholder="Pick a date" date={field.value} setDate={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateTo"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <DatePicker placeholder="Pick a date" date={field.value} setDate={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="All Employees" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                {/* <Iconify icon="radix-icons:magnifying-glass" /> */}
                <FormControl>
                  <Input placeholder="search" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={toggleFilter} className="flex items-center">
            <Iconify
              icon={`solar:${isOpen ? "alt-arrow-up-outline" : "alt-arrow-down-outline"
                }`}
              className="ml-auto h-2 w-2"
            />
            Filter
          </Button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card className="mt-4">
                <CardHeader className="flex-row items-center gap-8 border-b-2">
                  <CardTitle className="text-2xl font-bold">Filter</CardTitle>
                  <Button variant="destructive" onClick={toggleFilter}>
                    <Iconify
                      icon="solar:trash-bin-trash-outline"
                      className="ml-auto h-2 w-2"
                    />
                    Clear filter
                  </Button>
                </CardHeader>
                <CardContent className="pt-6 grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="By phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
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
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Form>
  )
}

export default Actions
