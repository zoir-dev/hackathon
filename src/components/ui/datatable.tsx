/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Spinner from "./spinner"
import { cn } from "@/lib/utils"
import { Pagination } from "./pagination"

interface Pagination {
    prev: boolean
    next: boolean
    page: number
    limit: number
    total: number
}
interface thisProps {
    data: any
    columns: any
    loading?: boolean
    className?: string
    deleteSelecteds?: (val: number[]) => void
    rowSelection?: any
    setRowSelection?: (val: any) => void
    pagination?: Pagination
    setPagination?: any
    onRightClick?: (val: any) => void
    selecteds_count?: boolean
    cursor_pagination?: { prev: string; next: string; limit: number; page: number; link: string }
    onRowClick?: (data: any) => void
    disabled?: boolean
    viewAll?: boolean
}

export function DataTable({
    data,
    columns,
    loading,
    className,
    deleteSelecteds,
    rowSelection,
    setRowSelection,
    pagination,
    onRightClick,
    selecteds_count,
    cursor_pagination,
    onRowClick,
    disabled,
    viewAll,
}: thisProps) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [selecteds, setSelecteds] = React.useState<any>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel({
            initialSync: true,
        }),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection ?? setSelecteds,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection: rowSelection ?? selecteds,
        },
        manualPagination: !!pagination?.page || !!cursor_pagination?.page || viewAll,
    })
    return (
        <div className="w-full">
            {selecteds_count && (
                <div className={"flex flex-col gap-2 sm:flex-row items-end sm:items-center sm:justify-between pb-4"}>
                    <div className={cn("flex-1 text-sm text-muted-foreground", !deleteSelecteds && "text-end")}>
                        {table.getFilteredRowModel().rows.length} dan {table.getFilteredSelectedRowModel().rows.length}{" "}
                        ta qator tanlandi.
                    </div>
                    <div></div>
                </div>
            )}
            <div className="rounded-md border overflow-x-auto relative">
                {loading && (
                    <div className="absolute top-0 w-full h-full grid place-items-center bg-black/80 z-20">
                        <Spinner />
                    </div>
                )}
                <Table className={`${className} select-text`}>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup, index) => (
                            <TableRow key={index} className="border">
                                {headerGroup.headers.map((header, index) => {
                                    return (
                                        <TableHead key={index} className="border border-b-2">
                                            {header.isPlaceholder ? null : (
                                                flexRender(header.column.columnDef.header, header.getContext())
                                            )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length > 0 ?
                            table.getRowModel().rows?.map((row, index) => (
                                <TableRow
                                    key={index}
                                    data-state={row.getIsSelected() && "selected"}
                                    onContextMenu={(e) => {
                                        e.preventDefault()
                                        onRightClick?.(row.original)
                                    }}
                                    className="hover:bg-border/50"
                                >
                                    {row.getVisibleCells().map((cell, index) => (
                                        <TableCell
                                            key={index}
                                            onClick={() => !notClick(cell.column.id) && onRowClick?.(cell.row.original)}
                                            className={`cursor-pointer border ${notClick(cell.column.id) && "cursor-default"}`}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                            : <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Mavjud emas
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
            {!pagination?.page && table.getPageCount() > 1 && !cursor_pagination?.page && !viewAll && (
                // <div className="flex justify-center py-4">
                //     <div className="flex items-center gap-4">
                //         <Button
                //             variant="outline"
                //             size="sm"
                //             onClick={() => table.previousPage()}
                //             disabled={!table.getCanPreviousPage() || disabled}
                //         >
                //             Oldingisi
                //         </Button>
                //         <p className="text-sm text-muted-foreground">
                //             {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                //         </p>
                //         <Button
                //             variant="outline"
                //             size="sm"
                //             onClick={() => table.nextPage()}
                //             disabled={!table.getCanNextPage() || disabled}
                //         >
                //             Keyingisi
                //         </Button>
                //     </div>
                // </div>
                <div className="pt-4">
                    <Pagination
                        disabled={disabled || loading}
                        currentPage={table.getState().pagination.pageIndex + 1}
                        totalPages={table.getPageCount()}
                        onPageChange={(page) => table.setPageIndex(page - 1)}
                    />
                </div>
            )}
        </div>
    )
}

function notClick(id: string) {
    return ["code", "phone_number", "Amallar", "Boshqarish"].find((e) => e === id)?.length
}
