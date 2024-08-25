
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"
import { Pagination2, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "./pagination2"
import { cn } from "@/lib/utils"

interface CustomPaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    disabled?: boolean
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    disabled,
}: CustomPaginationProps) {
    const getPageNumbers = () => {
        const pages = []
        const childs = window.innerWidth > 640 ? 2 : 1
        pages.push(1)

        if (currentPage <= 4) {
            for (let i = 2; i <= Math.min(5, totalPages); i++) {
                pages.push(i)
            }
            if (totalPages > 5) pages.push("...")
        } else if (currentPage >= totalPages - 3) {
            if (totalPages > 5) pages.push("...")
            for (let i = Math.max(2, totalPages - 4); i < totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push("...")
            for (let i = currentPage - childs; i <= currentPage + childs; i++) {
                pages.push(i)
            }
            pages.push("...")
        }

        pages.push(totalPages)
        return pages
    }

    function changePagination(page: number) {
        onPageChange(page)
    }

    return (
        <Pagination2 className="w-auto m-0">
            <PaginationContent>
                <PaginationItem>
                    <Button
                        disabled={disabled}
                        icon={<ChevronLeft width={20} />}
                        variant="ghost"
                        onClick={() => changePagination(Math.max(1, currentPage - 1))}
                        size="icon"
                    />
                </PaginationItem>
                {(totalPages > 7 ? getPageNumbers() : Array.from({ length: totalPages }, (_, i) => i + 1))?.map(
                    (page, index) =>
                        typeof page === "number" ?
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={page === currentPage}
                                    onClick={() => changePagination(page)}
                                    className={cn(
                                        "cursor-pointer",
                                        disabled && "cursor-not-allowed pointer-events-none opacity-50",
                                    )}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                            : <PaginationItem key={index}>
                                <PaginationEllipsis
                                    className={disabled ? "cursor-not-allowed pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>,
                )}
                <PaginationItem>
                    <Button
                        disabled={disabled}
                        icon={<ChevronRight width={20} />}
                        variant="ghost"
                        onClick={() => changePagination(Math.min(totalPages, currentPage + 1))}
                        size="icon"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination2>
    )
}
