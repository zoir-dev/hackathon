import Iconify from "@/components/iconify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BlocksProps = {
  item: {
    title: string
    icon: string
    value: number
    color: string
  }
}
const slectedColours = {
  indigo: "bg-indigo-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  lime: "bg-lime-500",
}
const Blocks: React.FC<BlocksProps> = ({ item }) => {
  const { title, icon, value, color } = item
  return (
    <Card
      className={`shadow-none border-none ${slectedColours[color]} text-white`}
    >
      <CardHeader className="items-end justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="p-2 border-2 rounded-xl">
          <Iconify icon={`solar:${icon}`} />
        </span>
        <span className="text-2xl font-bold">{value}</span>
      </CardContent>
    </Card>
  )
}

export default Blocks
